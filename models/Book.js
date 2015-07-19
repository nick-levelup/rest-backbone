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
			if (data.releaseDateMS) {
                data.releaseDateMS = new Date(data.releaseDateMS);
            }

            data.date = data.releaseDateMS;
            delete data.releaseDateMS;

			return data;
		},

	    idAttribute: '_id'
	});
 });