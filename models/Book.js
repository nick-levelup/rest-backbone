define([
		'backbone',
	], function (
		Backbone
	) {
	
	return Backbone.Model.extend({

	    initialize: function () {
	      this.listenTo(this, 'all', function (eventName) {
	        console.info('model', eventName)
	      });
	    },

		parse: function (data) {
			data.date = data.releaseDateMS;

			delete data.releaseDateMS;
			delete data._id;
			delete data.__v;

			data.bookTitle = data.title;

			return data
		},

	    // idAttribute: '_id'
	});
 });