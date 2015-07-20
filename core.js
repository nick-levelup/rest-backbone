requirejs.config({
    paths: {
		jquery :'https://yastatic.net/jquery/2.1.4/jquery',
		underscore :'https://yastatic.net/underscore/1.6.0/underscore',
		backbone :'https://yastatic.net/backbone/1.1.2/backbone',
		handlebars :'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/3.0.3/handlebars',
		jqueryui: 'http://code.jquery.com/ui/1.11.4/jquery-ui'
    },

	shim: {
		jqueryui: {
			deps: ['jquery']
		}
	}
});

requirejs([
		'view/BooksView',
		'view/FormView',

		'collections/books'
	], function (
		BooksView,
		FormView,

		getBooks
	) {
		// create books
		var books = new BooksView({
			collection: getBooks()
		});

		// Create form
		var form = new FormView({
			collection: getBooks()
		});

		$('body').append(form.render().el);
		$('body').append(books.render().el);
})