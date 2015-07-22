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

	jq.getJSON('/stand-alone-locale/translations/' + rcApp.preflang + '.json', function(data) {

		var $container = jq('#' + rcApp.containerId);

		$container.html(template(data));

		moment.defineLocale("preflang", data.moment);

		moment.locale("preflang");

        var i18n = {
            previousMonth: data.previousMonth,
            nextMonth: data.nextMonth,
            months: data.moment.months,
            monthsShort: data.moment.monthsShort,
            weekdays: data.moment.weekdays,
            weekdaysShort: data.moment.weekdaysShort
        };

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
		    format: 'L',
		    i18n: i18n,
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
		    format: 'L',
		    i18n: i18n,
		    theme: 'rc-app',
		    onSelect: function(date) {
		    	setHiddenDateFields(this.getMoment(), 'do')
		    }
		});
	});

});