
//"bluemold": "^0.6.3",//Template engine based on jQuery template syntax
module.exports =(function(){
	var export_ 	= {},
		$ 			= require('jquery'); 
 


	//Loading a simple external file ......
	export_.renderSimpleTemplate = function(e){ 
		$("#container1").loadTemplate( "template.html" , [{
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
	};






	//Loading an external file with formater ......
	export_.renderFormatterTemplate = function(e){
 		$.addTemplateFormatter("UpperCaseFormatter", function(value, options) {
           return value.toUpperCase();
        });

        // load the template from the external file
        $("#container2").loadTemplate("templateFormat.html", [{
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
        }]);
	};





	//Render template with pagination ......
	export_.renderPagingTemplate = function (e) {
        var curPage = 1;
        var templateData = null;

        //....  
		function getData_() {
            $.getJSON("js/templateData.json", function(data) {
            	console.log('data = ', data);
                templateData = data;
                renderTemplates_(templateData, curPage);
            });
        } 

        function renderTemplates_(data, pageNo) {
            $("#container3").loadTemplate($("#tpl-paged"), data["employees"], 
                    {paged: true, pageNo: pageNo, elemPerPage: 1});
        }

        window.addEventListener("load", function(e) {
            $.addTemplateFormatter("EmailLink", function(value, options) {
                 return "mailto:" + value;
            });
             
            document.querySelector("#prevPage").addEventListener("click", function (evt) {
                 if (curPage > 1) {
                    renderTemplates_(templateData, --curPage);
                 }
            });
            document.querySelector("#nextPage").addEventListener("click", function (evt) {
                 if (curPage < 4) {
                    renderTemplates_(templateData, ++curPage);
                 }
            });

            getData_();
        });

	};





	// Render template with binding options ......
	// When making multiple calls to loadTemplate(), using the append or prepend options
    // can add content to the template container instead of completely replacing it
	export_.renderBindingTemplates = function (e) {

         
        function renderTemplates_() {
         	var containerID = '#container4';
            $(containerID).loadTemplate($("#tpl-binding"), {
                "name" : "John Doe",
                "hometown" : "Anywhere, US"
            }, 
            //binding options ...
            {append: true, beforeInsert: onBefore, afterInsert: onAfter, complete: onComplete});

            $(containerID).loadTemplate($("#tpl-binding"), {
                "name" : "Jane Doe",
                "hometown" : "Anytown, US"
            }, 
            //binding options ...
            {append: true, beforeInsert: onBefore, afterInsert: onAfter, complete: onComplete});

            $(containerID).loadTemplate($("#tpl-binding"), {
                "name" : "John Q Public",
                "hometown" : "Pleasantville, US"
            }, 
            //binding options ...
            {append: true, beforeInsert: onBefore, afterInsert: onAfter, complete: onComplete}); 
        }


        //callback functions (just to let us know what happened)
        function onBefore(data) {
          console.log("Content about to be inserted: " + data);
        }
        function onAfter(data) {
          console.log("Content has been inserted: " + data);
        }
        function onComplete() {
          console.log("Operation complete");
        }



        window.addEventListener("load", function(e) {
             renderTemplates_();
        }); 
    }; 




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

 





 

