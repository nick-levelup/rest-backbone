define([
  'backbone',

  'models/Book'
], function (
  Backbone,
  Book
) {

  return Backbone.Collection.extend({
    model: Book,

    //url: 'http://10.47.90.173:8080/api/books',
    url: 'http://localhost:8080/api/books',

    // sort book by title
    comparator: 'title',

    initialize: function (event) {
      var self = this;

      this.listenTo(this, 'all', function (eventName) {
        console.info('collection', eventName);
      });
    },

    sortBooks: function (sortParam) {
      // change comparator
      this.comparator = sortParam;
      // cort collection with new comporator
      this.sort();
    }
  });
});