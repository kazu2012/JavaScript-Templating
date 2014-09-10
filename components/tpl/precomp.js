/**
* Note: I've added the wrapper module.exports=(function() { ... return templates['precomp']; })();
		to conviniently return the template precompiled
*/
module.exports=(function() {

	var Handlebars 				= require('handlebars');
  	var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
	templates['precomp'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
	  return "<div class=\"itemTemplateWrapper\">\n    <div><span>Item: </span><span>"
	    + escapeExpression(((helper = (helper = helpers.item || (depth0 != null ? depth0.item : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"item","hash":{},"data":data}) : helper)))
	    + "</span></div>\n    <div><span>Description: </span><span>"
	    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
	    + "</span></div>\n    <div><span>Price: </span><span>"
	    + escapeExpression(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"price","hash":{},"data":data}) : helper)))
	    + "</span></div>\n</div>\n";
	},"useData":true});
     
	return templates['precomp']; 
})();