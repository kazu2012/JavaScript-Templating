
module.exports=(function(){
	var $ 			= require('jquery'),
		Handlebars 	= require('handlebars'),
		export_ 	= {};
 


	// ......     
	export_.renderSimpleTemplate = function(e){ 
 
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
 


	// ......     
	export_.renderConditionalTemplate = function(e){ 
		var template = $("#tpl-handlebars-conditions").html();
        // Handlebars compiles the template into a callable function
        var renderer = Handlebars.compile(template);
        // call the compiled function with the template data
        var result = renderer({
           "employees" : [{
              "name" : "Henry Handsome",
              "phone" : "+1-212-555-1234",
              "email" : "pensive@example.com",
              "title" : "Senior VP of Basketweaving",
              "fulltime" : true
           }, {
              "name" : "Penelope Persistent",
              "phone" : "+1-212-555-8000",
              "email" : "truthful@example.com",
              "title" : "Principal Understudy",
              "fulltime" : false
           }, {
              "name" : "Sam Serendipity",
              "phone" : "+1-212-555-9876",
              "email" : "helpful@example.com",
              "title" : "Chief Cook and Bottle Washer",
              "fulltime" : true
           }, {
              "name" : "Tom Terriffic",
              "phone" : "+1-212-555-0011",
              "email" : "grumpy@example.com",
              "title" : "Janitor",
              "fulltime" : false
           }]});

        //render the template html
        $("#container2").html(result);
	};







	return export_;

 
})();