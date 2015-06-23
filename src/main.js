var rcApp = rcApp || {};

var jQuery = window.jQuery,
    // check for old versions of jQuery
    oldjQuery = jQuery && !!jQuery.fn.jquery.match(/^1\.[0-6](\.|$)/),
    localJqueryPath = 'https://code.jquery.com/jquery-1.11.3.min',
	paths = {
		'translations': 'js/data/translations/en',
		'handlebars.runtime': 'library/handlebars/handlebars.runtime.amd.min',
		'moment': 'library/moment/min/moment.min',
		'pikaday': 'library/pikaday/pikaday',
		'helpers': 'js/helpers',
		'template': 'templates/app.tpl',
		'jquery-cascading-dropdown': 'library/jquery-cascading-dropdown/dist/jquery.cascadingdropdown.min'
	},
    noConflict;

// check for jQuery 
if (!jQuery || oldjQuery) {
    // load if it's not available or doesn't meet min standards
    paths.jquery = localJqueryPath;
    noConflict = !!oldjQuery;
} else {
    // register the current jQuery
    define('jquery', [], function() { return jQuery; });
}

// set up require
require.config({
    paths: paths,
	baseUrl: '',
	include: ['jquery-cascading-dropdown'],
	shim: {
		'jquery-cascading-dropdown': {
			deps: ['jquery']
		}
	}
});

// load stuff
require(['moment', 'pikaday', 'translations', 'template', 'helpers', 'jquery'], function(Moment, Pikaday, translations, template, helpers, $) {

	function loadCss(urls) {
		$.each(urls, function(index, url) {
			var link = $('<link/>', {
				type: 'text/css',
				rel: 'stylesheet',
				href: url
			});
	    	$container.before(link);
		})
	}

	if (noConflict) $.noConflict();

	var defaults = {
		preflang: 'en',
		containerId: 'app',
		dateFormat: 'D MMM YYYY'
	}

	rcApp.options = $.extend(true, {}, defaults, rcApp.options);

	var $container = $('#' + rcApp.options.containerId);

	loadCss([
		'library/cleanslate/cleanslate.css',
		'library/pikaday/css/pikaday.css'
	])

	$container.html(template(translations));

	var startDate = new Date();

	var endDate = new Date();
	endDate.setDate(startDate.getDate() + 3);

	var pickupDate = new Pikaday({
		defaultDate: startDate,
		minDate: startDate,
		setDefaultDate: true,
	    field: document.getElementById('rc-datepicker--pickup'),
	    format: rcApp.options.dateFormat,
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
	    format: rcApp.options.dateFormat,
	    onSelect: function() {
	    }
	});

});