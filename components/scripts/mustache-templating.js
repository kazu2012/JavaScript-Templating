
module.exports=(function(){
	var $ 			= require('jquery'),
		Mustache 	= require('mustache'),
		export_ 	= {};
 


	//Loading a simple external file ......
	export_.renderSimpleTemplate = function(e){ 
		$("document").ready(function() {
			//get template html
            var template = $("#tpl-mustache-simple").html(); 
            //feed json data to the template
            var result = Mustache.render(template, {
                "item" : "Whisper 4000 in-home heater and dog walker",
                "description" : "Walk your dog and heat your house at the same time? Now you can, with the Whisper 4000 Home Heating system / Dog Treadmill!",
                "price" : 895.99,
                "inStock" : true,
                "quantity" : 100
            } );
            //render the template html
            $("#container1").html(result);
        });
	};

	return export_;

 
})();