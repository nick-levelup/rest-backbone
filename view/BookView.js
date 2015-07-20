define(
	[
		'backbone',
		'handlebars'
	],
	function (
			Backbone,
			Handlebars
		) {

		var BookView = Backbone.View.extend({

			tagName: 'tr',

			events: {
				// 'click th[data-sort]': 'sortEvent'
			},

			template: Handlebars.compile($('#bookTpl').html()),

			render: function () {
				this.$el.html(this.template(this.model.toJSON()));

				return this;
			}

		});

		return BookView;
	}
)