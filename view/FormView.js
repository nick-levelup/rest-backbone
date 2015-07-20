define(
	[
		'backbone',
		'handlebars'
	],
	function (
			Backbone,
			Handlebars
		) {
		var FormView = Backbone.View.extend({

			events: {
				'submit': 'submitEvent'
			},

			tagName: 'form',
			className: 'js-form',

			template: Handlebars.compile($('#formTpl').html()),

			render: function () {
				this.$el.html(this.template());

				return this;
			},

			submitEvent: function (event) {
				event.preventDefault();

		        var $form = this.$el,
		            data = {};

		        _.each($form.serializeArray(), function (item) {
		            data[item.name] = item.value;
		        });

		        this.collection.add(data).save();
			}

		});

		return FormView;
	}
)