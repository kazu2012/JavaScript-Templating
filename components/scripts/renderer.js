
//"bluemold": "^0.6.3",//Template engine based on jQuery template syntax
module.exports =(function(){
	var export_ 	= {},
		$ 			= require('jquery');
		//Mustache 	= require('mustache');


	


	export_.renderTemplates = function (e) {

		console.log('----------- export_.renderTemplates = function (e) { -----------' );



        $("#container").loadTemplate( "template.html" , [{
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
        }], { isFile : true } );    

		console.log( $("template.html").length );




    };


    export_.test = function(){
    	console.log('this is just a test .......');
    }

    export_.alfa = function(){
    	console.log('this is just a alfa .......');
    }




	return export_;
})();



// module.exports = {
// 	alert:function(){
// 		console.log('Alert......');
// 	},
// 	delta:function(){
// 		alert('delta...............');
// 	}
// };

 





 

