

(function(){
	var $ 			= require('jquery'),
		//Mustache 	= require('mustache'),
		jquery_templating 		= require('./jquery-templating.js'),
		mustache_templating 	= require('./mustache-templating.js'),
		handlebars_templating 	= require('./handlebars-templating.js'),
		dust_templating 		= require('./dust-templating.js');


	//window.addEventListener("load", function(){
	$('document').ready(function(){
		switch( $('body').attr('class') ){
			case 'jquery-templating' :
				jquery_templating.renderSimpleTemplate();
				jquery_templating.renderFormatterTemplate();
				jquery_templating.renderPagingTemplate();
				jquery_templating.renderBindingTemplates(); 
			break;

			case 'mustache-templating' :
				mustache_templating.renderSimpleTemplate();
				mustache_templating.renderSectionTemplate();
				//render sections templates with conditions
				mustache_templating.renderSection2Template();
				mustache_templating.renderFunctionsTemplate();
			break;

			case 'handlebars_templating' :
				handlebars_templating.renderSimpleTemplate();
				handlebars_templating.renderConditionalTemplate();
				handlebars_templating.renderHelpersTemplate();
			break;

			case 'dust_templating' :
			break;
		}
		


	});

		 
 
	
})();