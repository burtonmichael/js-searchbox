require(['jquery', 'moment', 'pikaday', 'translations', 'template'], function($, moment, Pikaday, translations, template) {

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

	function setHiddenFields(date, fieldset) {
		var rcEle = rcAppForm.elements;
		$(rcEle[fieldset + 'Day']).val(date.date());
		$(rcEle[fieldset + 'Month']).val(date.month() + 1);
		$(rcEle[fieldset + 'Year']).val(date.year());
	}

	if (noConflict) $.noConflict();

	var defaults = {
		preflang: 'en',
		containerId: 'app',
		dateFormat: translations.i18n.format
	}

	rcApp.options = $.extend(true, {}, defaults, rcApp.options);

	var $container = $('#' + rcApp.options.containerId);

	loadCss([
		'library/cleanslate/cleanslate.css',
		'library/pikaday/css/pikaday.css'
	])

	$container.html(template(translations));

	var startDate = moment();

	var endDate = moment();
	endDate.add('days', 3);

	setHiddenFields(startDate, 'pu');
	setHiddenFields(endDate, 'do');

	var pickupDate = new Pikaday({
		theme: 'asd',
		defaultDate: startDate.toDate(),
		minDate: startDate.toDate(),
		setDefaultDate: true,
	    field: document.getElementById('rc-datepicker--pickup'),
	    format: rcApp.options.dateFormat,
	    i18n: translations.i18n,
	    onSelect: function() {
	    	var date = this.getMoment();
	    	dropoffDate.setMinDate(date);
	    	if (date > dropoffDate.getMoment()) {
	    		dropoffDate.setMoment(date);
	    		setHiddenFields(date, 'do')
	    	}
	    	setHiddenFields(date, 'pu')
	    }
	});

	var dropoffDate = new Pikaday({
		defaultDate: endDate.toDate(),
		minDate: startDate.toDate(),
		setDefaultDate: true,
	    field: document.getElementById('rc-datepicker--dropoff'),
	    format: rcApp.options.dateFormat,
	    i18n: translations.i18n,
	    onSelect: function() {
	    	setHiddenFields(date, 'do')
	    }
	});

});