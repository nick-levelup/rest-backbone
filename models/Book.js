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

	    idAttribute: '_id'
	});
 });