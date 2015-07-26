define([
  'pages/AbstractPage',

  'view/BookViewDetail',

  'models/Book'
], function (
  AbstractPage,

  BookViewDetail,

  Book
) {

  return AbstractPage.extend({

    initialize: function (options) {

      AbstractPage.prototype.initialize.call(this, arguments);

      var model = new Book({id: options.id});
      model.fetch();

      var bookView = new BookViewDetail({
        model: model
      });

      this.components.push(bookView);
    }
  })
});