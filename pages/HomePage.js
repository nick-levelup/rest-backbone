define([
  'pages/AbstractPage',
  'view/BooksView',
  'collections/books'
], function (
  AbstractPage,
  BooksView,
  getBooks
) {

  return AbstractPage.extend({

    title: 'Home Page',

    initialize: function () {

      AbstractPage.prototype.initialize.call(this, arguments);

      var booksView = new BooksView({
        collection: getBooks()
      });

      this.components.push(booksView);
    }

  })
});