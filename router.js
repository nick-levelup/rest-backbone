define([
  'backbone',

  'pages/HomePage',
  'pages/BookPage',
  'pages/NotFoundPage'
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
      this.createPage('homepage');
    },

    bookPage: function (id) {
      this.createPage('book', {id: id});
    },

    notFoundPage: function () {
      this.createPage('notfoundpage');
    },

    createPage: function (type, params) {
      var PageClass;

      if (type === 'homepage') {
        PageClass = HomePage;
      }

      if (type === 'book') {
        PageClass = BookPage;
      }

      if (type === 'notfoundpage') {
        PageClass = NotFoundPage;
      }

      this.removeCurrentPage();

      this.currentPage = (new PageClass(params)).render();
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