define([
		'backbone'
	], function (
		Backbone
	) {

	return Backbone.View.extend({

		changeTitle: function (title) {
			document.querySelector('title').firstChild.nodeValue = title;
		},

		initialize: function () {
			// set event listeners
			this.listenTo(this, 'removePage', this.removePage);

			// set title of page
			this.changeTitle(this.title);

			// insert view into DOM
			$('.js-page').append(this.el);

			// set content
			this.render();
		},

		render: function () {
			this.$el.html(this.template());

			return this;	
		},

		removePage: function () {
			this.remove();
		}

	});
});