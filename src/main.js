require(['jquery', 'moment', 'pikaday', 'template', 'cssLoader'], function(jq, moment, Pikaday, template, cssLoader) {

	var rcApp = window.rcApp || {}

	jq.noConflict( true );

	function setHiddenDateFields(date, fieldset) {
		var rcEle = rcAppForm.elements;
		jq(rcEle[fieldset + 'Day']).val(date.date());
		jq(rcEle[fieldset + 'Month']).val(date.month() + 1);
		jq(rcEle[fieldset + 'Year']).val(date.year());
	}

	var defaults = {
		preflang: 'en',
		containerId: 'app'
	}

	rcApp = jq.extend(true, {}, defaults, rcApp.options);

	switch(typeof rcApp.css) {
		case "undefined":
			cssLoader.link('src/css/base.css')
			break;
		case "string":
			cssLoader.link(rcApp.css)
			break;
		default:
			break;
	}

	jq.getJSON('src/js/data/translations/' + rcApp.preflang + '.json', function(data) {
		var translations = data;

		var $container = jq('#' + rcApp.containerId);

		$container.html(template(translations));

		var startDate = moment();

		var endDate = moment();
		endDate.add(3, 'days');

		setHiddenDateFields(startDate, 'pu');
		setHiddenDateFields(endDate, 'do');

		var pickupDate = new Pikaday({
			defaultDate: startDate.toDate(),
			minDate: startDate.toDate(),
			setDefaultDate: true,
		    field: document.getElementById('rc-datepicker--pickup'),
		    format: rcApp.dateFormat || data.date.format,
		    i18n: translations.date,
		    theme: 'rc-app',
		    onSelect: function(date) {
		    	var dateMoment = this.getMoment();
		    	dropoffDate.setMinDate(date);
		    	if (dateMoment > dropoffDate.getMoment()) {
		    		dropoffDate.setMoment(dateMoment);
		    		setHiddenDateFields(dateMoment, 'do')
		    	}
		    	setHiddenDateFields(dateMoment, 'pu')
		    }
		});

		var dropoffDate = new Pikaday({
			defaultDate: endDate.toDate(),
			minDate: startDate.toDate(),
			setDefaultDate: true,
		    field: document.getElementById('rc-datepicker--dropoff'),
		    format: rcApp.dateFormat || data.date.format,
		    i18n: translations.date,
		    theme: 'rc-app',
		    onSelect: function(date) {
		    	setHiddenDateFields(this.getMoment(), 'do')
		    }
		});
	});

});