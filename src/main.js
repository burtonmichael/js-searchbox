var rcApp = rcApp || {};

require.config({
	paths: {
		'translations': 'js/data/translations/en',
		'handlebars.runtime': 'library/handlebars/handlebars.runtime.amd.min',
		'moment': 'library/moment/min/moment.min',
		'pikaday': 'library/pikaday/pikaday',
		'helpers': 'js/helpers',
		'template': 'templates/app.tpl'
	},
	shim: {
		'handlebars.runtime': {
			exports: 'Handlebars'
		}
	}
})

// load stuff
require(['moment', 'pikaday', 'translations', 'template', 'helpers'], function(Moment, Pikaday, translations, template, helpers) {

	var html = template(translations);

	document.getElementById('app').innerHTML = html;

	var startDate = new Date();

	var endDate = new Date();
	endDate.setDate(startDate.getDate() + 3);

	var pickupDate = new Pikaday({
		defaultDate: startDate,
		minDate: startDate,
		setDefaultDate: true,
	    field: document.getElementById('rc-datepicker--pickup'),
	    format: 'D MMM YYYY',
	    onSelect: function() {
	    	var date = this.getMoment();
	    	dropoffDate.setMinDate(date);
	    	if (date > dropoffDate.getMoment()) dropoffDate.setMoment(date);
	    }
	});

	var dropoffDate = new Pikaday({
		defaultDate: endDate,
		minDate: startDate,
		setDefaultDate: true,
	    field: document.getElementById('rc-datepicker--dropoff'),
	    format: 'D MMM YYYY',
	    onSelect: function() {
	    }
	});

});