define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "					<option value=\""
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=helpers.blockHelperMissing, buffer = 
  "<div class=\"cleanslate rc-app\">\r\n	<form action=\"http://www.rentalcars.com\" target=\"_blank\">\r\n		<p class=\"rc-title\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\r\n		<div class=\"rc-form-group rc-locations rc-locations--pickup\">\r\n			<select class=\"rc-location rc-location--country\" name=\"country\">\r\n				<option selected=\"selected\" disabled=\"disabled\" value=\"0\">"
    + alias3(((helper = (helper = helpers.country || (depth0 != null ? depth0.country : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"country","hash":{},"data":data}) : helper)))
    + "</option>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.countries : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</select>\r\n			<select class=\"rc-location rc-location--city\" name=\"city\">\r\n				<option selected=\"selected\" disabled=\"disabled\" value=\"0\">"
    + alias3(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"city","hash":{},"data":data}) : helper)))
    + "</option>\r\n			</select>\r\n			<select class=\"rc-location rc-location--location\" name=\"location\">\r\n				<option selected=\"selected\" disabled=\"disabled\" value=\"0\">"
    + alias3(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"location","hash":{},"data":data}) : helper)))
    + "</option>\r\n			</select>\r\n		</div>\r\n		<div class=\"rc-form-group rc-locations rc-locations--dropoff\">\r\n			<select class=\"rc-location rc-location--country\" name=\"country\">\r\n				<option selected=\"selected\" disabled=\"disabled\" value=\"0\">"
    + alias3(((helper = (helper = helpers.country || (depth0 != null ? depth0.country : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"country","hash":{},"data":data}) : helper)))
    + "</option>\r\n			</select>\r\n			<select class=\"rc-location rc-location--city\" name=\"city\">\r\n				<option selected=\"selected\" disabled=\"disabled\" value=\"0\">"
    + alias3(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"city","hash":{},"data":data}) : helper)))
    + "</option>\r\n			</select>\r\n			<select class=\"rc-location rc-location--location\" name=\"location\">\r\n				<option selected=\"selected\" disabled=\"disabled\" value=\"0\">"
    + alias3(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"location","hash":{},"data":data}) : helper)))
    + "</option>\r\n			</select>\r\n		</div>\r\n		<div class=\"rc-form-group rc-date rc-date--pickup\">\r\n			<label for=\"rc-datepicker--pickup\">"
    + alias3(((helper = (helper = helpers.pickupDate || (depth0 != null ? depth0.pickupDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"pickupDate","hash":{},"data":data}) : helper)))
    + "</label>\r\n			<input spellcheck=\"false\" type=\"text\" name=\"\" id=\"rc-datepicker--pickup\">\r\n		</div>\r\n		<div class=\"rc-form-group rc-time rc-time--pickup\">\r\n			<select class=\"rc-hour\" name=\"puHour\">\r\n";
  stack1 = ((helper = (helper = helpers.Hours || (depth0 != null ? depth0.Hours : depth0)) != null ? helper : alias1),(options={"name":"Hours","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.Hours) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "			</select>\r\n			<select class=\"rc-minute\" name=\"puMinute\">\r\n";
  stack1 = ((helper = (helper = helpers.Minutes || (depth0 != null ? depth0.Minutes : depth0)) != null ? helper : alias1),(options={"name":"Minutes","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.Minutes) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "			</select>\r\n		</div>\r\n		<div class=\"rc-form-group rc-date rc-date--dropoff\">\r\n			<label for=\"rc-datepicker--dropoff\">"
    + alias3(((helper = (helper = helpers.dropoffDate || (depth0 != null ? depth0.dropoffDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"dropoffDate","hash":{},"data":data}) : helper)))
    + "</label>\r\n			<input spellcheck=\"false\" type=\"text\" name=\"\" id=\"rc-datepicker--dropoff\">\r\n		</div>\r\n		<div class=\"rc-form-group rc-time rc-time--pickup\">\r\n			<select class=\"rc-hour\" name=\"doHour\">\r\n";
  stack1 = ((helper = (helper = helpers.Hours || (depth0 != null ? depth0.Hours : depth0)) != null ? helper : alias1),(options={"name":"Hours","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.Hours) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "			</select>\r\n			<select class=\"rc-minute\" name=\"doMinute\">\r\n";
  stack1 = ((helper = (helper = helpers.Minutes || (depth0 != null ? depth0.Minutes : depth0)) != null ? helper : alias1),(options={"name":"Minutes","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.Minutes) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			</select>\r\n		</div>\r\n		<div class=\"rc-form-group rc-submit\">\r\n			<button class=\"rc-submit__button\">"
    + alias3(((helper = (helper = helpers.submit || (depth0 != null ? depth0.submit : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"submit","hash":{},"data":data}) : helper)))
    + "</button>\r\n		</div>\r\n	</form>\r\n</div>";
},"useData":true})

});