/**
* Mustache template rendering module
*/
module.exports=(function(){
	var $ 			= require('jquery'),
		Mustache 	= require('mustache'),
		export_ 	= {};
 
	// ......
	export_.renderSimpleTemplate = function(e){  
		//get template html
        var template = $("#tpl-mustache-simple").html(); 
        //feed json data to the template
        var result = Mustache.render(template, {
            "item" : "Whisper 4000 in-home heater and dog walker",
            "description" : "Walk your dog and heat your house at the same time? Now you can, with the Whisper 4000 Home Heating system / Dog Treadmill!",
            "price" : 895.99,
            "inStock" : true,
            "quantity" : 100
        });//Mustache.render
        //render the template html
        $("#container1").html(result); 
	};//export_.renderSimpleTemplate
 


    // ......
	export_.renderSectionTemplate = function(e){  
		//get template html
        var template = $("#tpl-mustache-sections").html(); 
        //feed json data to the template
        var result = Mustache.render(template, {
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
            }]
        });//Mustache.render

        //render the template html
        $("#container2").html(result); 
	};//export_.renderSectionTemplate
 


    // ......
	export_.renderSection2Template = function(e){ 
        var template 	= $("#tpl-mustache-sections-conditions").html();
        var result 		= Mustache.render(template, {
                "item" : "Whisper 4000 in-home heater and dog walker",
                "description" : "Walk your dog and heat your house at the same time? Now you can, with the Whisper 4000 Home Heating system / Dog Treadmill!",
                "price" : 895.99,
                "inStock" : true,
                "quantity" : 100
            } );
        $("#container3").html(result); 
	};//export_.renderSection2Template
 


    // ......
	export_.renderFunctionsTemplate = function(e){ 
        var template = $("#tpl-mustache-functions").html();
        var prodData = {
            "items" : [
                { name: "product 1", price: 125.00 },
                { name: "product 2", price: 89.00 },
                { name: "product 3", price: 209.00 },
                { name: "product 4", price: 415.00 }
            ]
        };
        // define the function
        prodData.total = function() {
            return Math.round((this.price * 1.08) * 100) / 100;
        };
        //Apply a certain style to a particular section of the template
        prodData.decorate = function () {
            return function(text, render) {
            		return "<u>" + render(text) + "</u>";
            };
        };

        var result = Mustache.render(template, prodData );
        $("#container4").html(result);
	};//export_.renderFunctionsTemplate
 
    return export_; 
})();