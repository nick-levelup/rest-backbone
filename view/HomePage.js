define([
	'view/AbstractPage',
	'view/BooksView',
	'collections/books',

	'handlebars'
	], function (
		AbstractPage,
		BooksView,
		getBooks,

		Handlebars
	) {

	return AbstractPage.extend({

		title: 'Home Page',

		template: Handlebars.compile($('#bookPageTpl').html()),

		initialize: function () {
			var books = new BooksView({
				collection: getBooks()
			});

			AbstractPage.prototype.initialize.call(this, arguments);

			this.$el.append(books.$el);
		}

	})
});