
module.exports=(function(){
	var $ 			= require('jquery'),
		Handlebars 	= require('handlebars'),
		export_ 	= {};
 


	// ......     
	export_.renderSimpleTemplate = function(e){ 

		console.log('11111111');
		$("document").ready(function() {
			//get template html
            var template = $("#tpl-handlebars-simple").html(); 
			//compiles template into scallable function
            var renderer = Handlebars.compile(template);
            //call the compiled function with the template data
            var result = renderer({
                "item" : "Whisper 4000 in-home heater and dog walker",
                "description" : "Walk your dog and heat your house at the same time? Now you can, with the Whisper 4000 Home Heating system / Dog Treadmill!",
                "price" : 895.99,
                "inStock" : true,
                "quantity" : 100
            });
            //render the template html
            $("#container1").html(result);
        });
	};







	return export_;

 
})();