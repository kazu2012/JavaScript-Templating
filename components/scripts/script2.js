

(function(){
	var $ 			= require('jquery'),
		//Mustache 	= require('mustache'),
		jquery_templating 	= require('./jquery-templating.js'),
		mustache_templating = require('./mustache-templating.js');


	//window.addEventListener("load", function(){
	$('document').ready(function(){
		if($('body').hasClass('jquery-templating')){
			jquery_templating.renderSimpleTemplate();
			jquery_templating.renderFormatterTemplate();
			jquery_templating.renderPagingTemplate();
			jquery_templating.renderBindingTemplates(); 
		}else if($('body').hasClass('mustache-templating')){


			mustache_templating.renderSimpleTemplate();
		}

	});

		// jquery_templating.alfa();
		// console.log('---- jquery_templating : ', jquery_templating);
		// console.log('------ loading templates ----------------');
	//});

$('#')
 
	
})();