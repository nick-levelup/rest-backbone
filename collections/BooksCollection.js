define([
		'backbone',

		'models/Book',

		'view/books'
	], function (
		Backbone,
		Book,

		books
	) {
	
	return Backbone.Collection.extend({
	    model: Book,

	    url: 'http://10.47.90.165:8080/api/books',

	    initialize: function (event) {
	      this.listenTo(this, 'all', function (eventName) {
	        console.info('collection', eventName)
	      });

	      this.listenTo(this, 'sync', function () {
	        books.renderBooks(this.toJSON());
	      })
	    }
  });
});