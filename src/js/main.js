var rcApp = rcApp || {},
    paths = {
		'translations': 'js/data/translations/' + (rcApp.preflang || 'en'),
		'handlebars.runtime': 'library/handlebars/handlebars.runtime.amd.min',
		'moment': 'library/moment/min/moment.min',
		'pikaday': 'library/pikaday/pikaday',
		'template': 'templates/app.tpl'
    };

// check for existing jQuery
var jQuery = window.jQuery,
    // check for old versions of jQuery
    oldjQuery = jQuery && !!jQuery.fn.jquery.match(/^1\.[0-7](\.|$)/),
    jqueryPath = 'https://code.jquery.com/jquery-1.11.3.min',
    noConflict;

// check for jQuery 
if (!jQuery || oldjQuery) {
    // load if it's not available or doesn't meet min standards
    paths.jquery = jqueryPath;
    noConflict = !!oldjQuery;
} else {
    // register the current jQuery
    define('jquery', [], function() { return jQuery; });
}

require.config({
	baseUrl: '',
	paths: paths,
	shim: {
		'handlebars.runtime': {
			exports: 'Handlebars'
		}
	}
})


// load stuff
require(['jquery', 'handlebars.runtime', 'moment', 'pikaday', 'translations', 'template' ], function($, Hb, Moment, Pikaday, translations, template) {

	if (noConflict) $.noConflict();

	var html = Hb.templates.app(translations);

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