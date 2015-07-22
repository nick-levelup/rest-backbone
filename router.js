define([
		'backbone',

		'view/HomePage',
		'view/BookPage',
		'view/NotFoundPage'
	], function (
		Backbone,

		HomePage,
		BookPage,
		NotFoundPage
	) {

	var Router = Backbone.Router.extend({
		routes: {
			'(books)(/)': 'homePage',
			'books/:id(/)': 'bookPage',
			'*notfound': 'notFoundPage'
		},

		homePage: function () {
			this.removeCurrentPage();

			this.currentPage = new HomePage();
		},

		bookPage: function (id) {
			console.log('bookpage', id);

			this.removeCurrentPage();

			this.currentPage = new BookPage();
		},

		notFoundPage: function () {
			console.log('notfoundpage');

			this.removeCurrentPage();

			this.currentPage = new NotFoundPage();
		},

		// custom methods
		removeCurrentPage: function () {
			if (this.currentPage) {
				this.currentPage.trigger('removePage');
			};			
		}
	});

	window.router = new Router;
});