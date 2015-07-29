require(['moment', 'pikaday', 'template'], function(moment, Pikaday, template) {

	var app = window.rcApp || {}

	app.extend = function(defaults, options) {
	    var extended = {};
	    var prop;
	    for (prop in defaults) {
	        if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
	            extended[prop] = defaults[prop];
	        }
	    }
	    for (prop in options) {
	        if (Object.prototype.hasOwnProperty.call(options, prop)) {
	            extended[prop] = options[prop];
	        }
	    }
	    return extended;
	};

	app.getJSON = function(url, params, callback) {

		if (params) {
			var queryStr = '?';

			for(var prop in params) {
				queryStr += prop + '=' + decodeURIComponent(params[prop]) + '&';
			}

			url += queryStr;
		}

		var request = new XMLHttpRequest();
		request.open('GET', url, true);

		request.onreadystatechange = function() {
		  if (this.readyState === 4) {
		    if (this.status >= 200 && this.status < 400) {
		      // Success!
		      var data = JSON.parse(this.responseText);
		      callback(data);
		    } else {
		      // Error :(
		      console.log('getJSON error')
		    }
		  }
		};

		request.send();
		request = null;
	}

	app.getLocations = function(callback) {
		app.getJSON('http://www.rentalcars.com/InPathAjaxAction.do', app.search, function(data) {
			app[callback](data);
		});
	}

	app.localeChanged = function(event) {
		var locale = event.name;

		var callback;

		switch(locale) {
			case 'country':
				app.clear('country');
				callback = 'countryChanged';
				app.search.country = event.options[event.selectedIndex].value;
				delete app.search.city;
				break;
			case 'city':
				app.clear('city');
				callback = 'cityChanged';
				app.search.city = event.options[event.selectedIndex].value;
				break;
		}

		app.getLocations(callback);
	}

	app.clear = function(locale) {
		switch(locale) {
			case 'country':
				app.clearField(app.form.city);
			case 'city':
				app.clearField(app.form.location);
		}
	}

	app.clearField = function(elem) {
		elem.disabled = true;
		elem.options.length = 0;

	    var opt = document.createElement('option');
	    opt.innerHTML = app.messages.emptySelect;
	    opt.value = 0;
	    opt.disabled = true;
	    elem.appendChild(opt);
	}

	app.countryChanged = function(data) {
		app.fillSelect(app.form.city, data.cityList);
		if (data.cityList.length === 1) {
			app.form.city.selectedIndex = 1;
			app.search.city = data.cityList[0].id;
			app.getLocations('cityChanged');
		}
	}

	app.cityChanged = function(data) {
		app.fillSelect(app.form.location, data.locationList);
		if (data.locationList.length === 1) {
			app.form.location.selectedIndex = 1;
			app.search.location = data.locationList[0].id;
			app.locationChanged()
		}
	}

	app.locationChanged = function() {
		console.log('Location Changed')
	}

	app.fillSelect = function(elem, array) {
		var fragment = document.createDocumentFragment();

		for(var i = 0; i < array.length; i++) {
		    var opt = document.createElement('option');
		    opt.innerHTML = array[i].name;
		    opt.value = array[i].id;
		    fragment.appendChild(opt);
		}

		elem.appendChild(fragment);
	    elem.disabled = false;
	}

	app.setHiddenDateFields = function(date, fieldset) {
		app.form[fieldset + 'Day'].value = date.date();
		app.form[fieldset + 'Month'].value = date.month() + 1;
		app.form[fieldset + 'Year'].value = date.year();
	}

	app.cssLoader = function(url) {
        var css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = url;

        document.head.appendChild(css);
    };

	var defaults = {
		preflang: 'en',
		containerId: 'app'
	}

	app.options = app.extend(defaults, app.options);

	app.search = {
		preflang: app.options.preflang
	}

	switch(typeof app.css) {
		case "undefined":
			app.cssLoader('src/css/base.css')
			break;
		case "string":
			app.cssLoader(app.css)
			break;
		default:
			break;
	}

	app.getJSON('/stand-alone-locale/translations/' + app.options.preflang + '.json', false, function(data) {

		app.messages = data;

		document.getElementById(app.options.containerId).innerHTML = template(data);

		app.form = rcAppForm;

		moment.defineLocale("app", data.moment);
		moment.locale("app");

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

		app.setHiddenDateFields(startDate, 'pu');
		app.setHiddenDateFields(endDate, 'do');

		app.pickupDate = new Pikaday({
			defaultDate: startDate.toDate(),
			minDate: startDate.toDate(),
			setDefaultDate: true,
		    field: document.getElementById('rc-datepicker--pickup'),
		    format: 'L',
		    i18n: i18n,
		    theme: 'rc-app',
		    onSelect: function(date) {
		    	var dateMoment = this.getMoment();
		    	app.dropoffDate.setMinDate(date);
		    	if (dateMoment > app.dropoffDate.getMoment()) {
		    		app.dropoffDate.setMoment(dateMoment);
		    		app.setHiddenDateFields(dateMoment, 'do')
		    	}
		    	app.setHiddenDateFields(dateMoment, 'pu')
		    }
		});

		app.dropoffDate = new Pikaday({
			defaultDate: endDate.toDate(),
			minDate: startDate.toDate(),
			setDefaultDate: true,
		    field: document.getElementById('rc-datepicker--dropoff'),
		    format: 'L',
		    i18n: i18n,
		    theme: 'rc-app',
		    onSelect: function(date) {
		    	app.setHiddenDateFields(this.getMoment(), 'do')
		    }
		});

		window.rcApp = app
	});

});