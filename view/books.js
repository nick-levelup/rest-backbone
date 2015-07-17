define([
		'handlebars',
		'jquery',

		'templates/books'
	], function (
		Handlebars,
		$,

		booksTpl
	) {



	function renderBooks (data) {
		$('.js-books').html(Handlebars.compile(booksTpl)(data));
	}

	function bind () {
		$('.js-books').on('click', '.js-del', deleteBookEvent);
		$('.js-form').on('submit', createBookEvent);
		$('.js-books').on('click', '.js-save', saveBookEvent);
	}

	function deleteBookEvent () {
		var me = this;
		
		require(['collections/books'], function (getBooks) {
			var book = getBooks().get($(me).closest('li').data('id'))

		    book.destroy({
		      success: function () {
		        renderBooks(getBooks().toJSON())
		      }
		    });	
		})
	}

	function createBookEvent (event) {
		var me = this;

	    event.preventDefault();

		require(['collections/books'], function (getBooks) {
		    var $form = $(me),
		        data = {};

		    _.each($form.serializeArray(), function (item) {
		      data[item.name] = item.value;
		    });

		    getBooks().add(data).save();	
		})
	}

	function saveBookEvent () {
		var me = this;

		require(['collections/books'], function (getBooks) {
		    var book = getBooks().get($(me).closest('li').data('id'))

		    book.set('title', $(me).prev().val());

		    book.save();
		})		
	}

	bind();


	return {
		renderBooks: renderBooks
	}
});