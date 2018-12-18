(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

var instruct_file = require('./js_modules/instructionZ.js');
var clear_file = require('./js_modules/clear_fields.js');
var loadExample_file = require('./js_modules/load_example.js');
var split_file = require('./js_modules/split_coordinates.js');
var copy_file = require('./js_modules/copy_process.js');
var error_file = require('./js_modules/error_process.js');








//finding coordinates by address (G API)

$(document).ready(function(){

    

//Click SPLIT  Button
// **************************************************************************************
// **************************************************************************************
//                                                                                     **
    $("#splitButton").click(function(){        // $(document).on("click", '.circle', function() {   // this  click  is  used  to   react  to  newly generated cicles;
        
		var splitModule = new split_file();
		
		//if textarea is empty, stop it all
		if(!splitModule.getFormValue()){
			return false; 
		}
		
		//Promise
		$.when( splitModule.getAjaxCoordinates())
		   .then(function( ) {    
                //splitModule.displayResults();		   
                setTimeout(splitModule.displayResults, 2000);               
           }); 
		
	
    });
//END Click SPLIT  Button
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************

	
	

//Click Instruction  Button
// **************************************************************************************
// **************************************************************************************
//                                                                                     **
  $("#instructionButton").click(function(){ 
	  var instrModule = new instruct_file();
	  instrModule.setInstruction();  //Module
      //instruction.loadInstructions();
    });
	
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************

	
	
	

//Click Example  Button
// **************************************************************************************
// **************************************************************************************
//                                                                                     **
    $("#examplebutton").click(function(){
		var loadExampleModule = new loadExample_file();  //Module
		loadExampleModule.loadExampleCoordinates();
        //load_example.loadExampleCoordinates();
    });
	
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************


	
	

//CLEAR  Button
// **************************************************************************************
// **************************************************************************************
//                                                                                     **
    $("#clearButton").click(function(){
		var clearModule = new clear_file();
		clearModule.clearFields(); //Module
        //clear_fields.clearFields();
    });
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************








//Copy Button
// **************************************************************************************
// **************************************************************************************
//                                                                                     **
    $(document).on("click", '#copybutton', function() {   // this  click  is  used  to   react  to  newly generated cicles;
	    var copyModule = new copy_file();
		copyModule.copy_to_clipboard(); //Module
	});
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************









 








// END READY
});







},{"./js_modules/clear_fields.js":2,"./js_modules/copy_process.js":3,"./js_modules/error_process.js":4,"./js_modules/instructionZ.js":5,"./js_modules/load_example.js":6,"./js_modules/split_coordinates.js":7}],2:[function(require,module,exports){
function clear_fieldsss(){
	
  this.clearFields = function(){
      $("#hiddenInstructions").hide(2000);
            $("#coordsInput").val('');
            $("#resultFinal").hide(1000);
            //hide  instr  &  change  button
            this.hideInstructions ();
            //END  Hide Instructions  and  change  button
   },
   
   
    this.hideInstructions = function(){
         if ($('#hiddenInstructions').css('display') == 'none') { 
	         //do nothing
            } else {

                $("#hiddenInstructions").hide(2000);
                if ($("#instructionButton").attr("value")=="instructions") {
                    $("#instructionButton").val("Close");$("#instructionButton").css("background","red");
		        } else { 
		            $("#instructionButton").val("instructions");$("#instructionButton").css("background", "grey");
		        }
            }
   }
   

}

module.exports = clear_fieldsss;




/*


	var clear_fields = {
		
		clearFields : function() {
	        $("#hiddenInstructions").hide(2000);
            $("#coordsInput").val('');
            $("#resultFinal").hide(1000);
            //hide  instr  &  change  button
            this.hideInstructions ();
            //END  Hide Instructions  and  change  button
        },
		
		
		
		hideInstructions: function(){
            if ($('#hiddenInstructions').css('display') == 'none') { 
	         //do nothing
            } else {

                $("#hiddenInstructions").hide(2000);
                if ($("#instructionButton").attr("value")=="instructions") {
                    $("#instructionButton").val("Close");$("#instructionButton").css("background","red");
		        } else { 
		            $("#instructionButton").val("instructions");$("#instructionButton").css("background", "grey");
		        }
            }
        },
		
	}
	
	
	*/
},{}],3:[function(require,module,exports){
function copy_process(){
	
  this.copy_to_clipboard = function(){
    
      // creating new textarea element and giveing it id 't'
      var t = document.createElement('textarea');
      t.id = 't';
      // Optional step to make less noise in the page, if any!
      t.style.height = 0;
      // You have to append it to your page somewhere, I chose <body>
      document.body.appendChild(t);
     // Copy whatever is in your div to our new textarea
     t.value = document.getElementById('tableResults').innerText;
     // Now copy whatever inside the textarea to clipboard;
     var selector = document.querySelector('#t');
     selector.select();
     document.execCommand('copy');
     // Remove the textarea;
    document.body.removeChild(t);
	
	$('#flashMessage').html(' Copied!!!!!!!').fadeOut(4500);
      
   }

}

module.exports = copy_process;




/*


	
	
	
	*/
},{}],4:[function(require,module,exports){
	
//var $ = require('jquery');
var clear_file = require('./clear_fields.js');


function error_process(){
	
	
  this.showError = function(){
      $("#resultFinal").stop().fadeOut("slow",function(){ $(this).html("<h2 class='red-color'>ERROR-> check  your  input</h2>") }).fadeIn(2000);
      $("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div
	  
      //HideInstructions ();
	  var clearModule = new clear_file();
	  clearModule.hideInstructions(); //Module
   }

}

module.exports = error_process;
	
	
	
	
	

},{"./clear_fields.js":2}],5:[function(require,module,exports){
//  OBJECT: load instructions, examples, clear fields---------------------------------------------------------------------------------------
	
//var $ = require('jquery');
//var _ = require('underscore');

function instructionX(){ 
	
  this.setInstruction = function(){
      $("#hiddenInstructions").toggle(1000);
       if ($("#instructionButton").attr("value")=="instructions") {
                $("#instructionButton").val(" _Close_ ");
				//$("#instructionButton").css("background","red");
        } else { 
		        $("#instructionButton").val("instructions");
				//$("#instructionButton").css("background","grey");
	    }	
   }

}

module.exports = instructionX;
	
	
	
	
	
	/*
	
	var instruction = {
		loadInstructions : function() {
	        $("#hiddenInstructions").toggle(1000);
            if ($("#instructionButton").attr("value")=="instructions") {
                $("#instructionButton").val("Close");
				$("#instructionButton").css("background","red");
            } else { 
		        $("#instructionButton").val("instructions");
				$("#instructionButton").css("background","grey");
	        }	
        },
	}
	*/
},{}],6:[function(require,module,exports){
function load_example(){
	
  this.coordinatesSet =	"22802 WESTERN AV, TORRANCE, 90501\n1601 Kingsdale Ave, Redondo Beach, CA 9027\n3525 W Carson St, Torrance, CA 90503\n20401 Victor St, Torrance, CA 90503\n2015 W Redondo Beach Blvd C, Gardena, CA 90247",

	
  this.loadExampleCoordinates = function(){
	  $("#coordsInput").val(this.coordinatesSet); //  was \n  in the  end 
   }
}

module.exports = load_example;





},{}],7:[function(require,module,exports){
var error_file = require('./error_process.js');


function split_coordinates(){
	
  this.d = "",
  this.arrayX2 = "",
  this.dataX = "",
  this.hFinal = "",
	
  //gets addresses text from textarea	
  // **************************************************************************************
  // **************************************************************************************
  //                                                                                     **
  this.getFormValue = function(){
	   if ($("#coordsInput").val().trim()==""){
	     //alert("Empty");
		 //Display error
		 var errorModule = new error_file();
		 errorModule.showError();
		 
         return false;		 
	   }
	   textareaX = $("#coordsInput").val(); //alert(textarea);
       textareaX = textareaX.trim();
       this.arrayX2 = textareaX.split('\n');/*.join(',').split(','); */
	   //alert(this.arrayX2);
			
	   this.d = this.arrayX2.length; //alert('address array contains -> ' + this.d);
	   split_coordinates.hFinal='<br><p style="color:red;">RESULTS => found '+ this.d +  '</br> </br><input type="button" value="Copy" id="copybutton"><span id="flashMessage"></span> </br></br><table id="tableResults">';
       return true;
   },
   // **                                                                                  **
   // **                                                                                  **
   // **************************************************************************************
   // **************************************************************************************
   
   
   
   
  //sends ajax to API
  // **************************************************************************************
  // **************************************************************************************
  //                                                                                     **
  this.getAjaxCoordinates = function(){
	  $("#loading").fadeIn(200); //show preloader
      //alert("this " + this.arrayX2);
	  //New-Async WORKSSSSS**************	
       for (j = 0; j < this.d; j++) {  
           //alert(this.arrayX2[j]);  
			var numberX = this.arrayX2[j];
			//-----------------
			// send  data  to  PHP handler  ************ 
            $.ajax({
                //url:  'https://maps.googleapis.com/maps/api/geocode/json?address=' + this.arrayX2[j] + '&key=AIzaSyANSd5IMYTCcMx6Hap44FXd6_zDo1dklh8',
				//url:  'ajax_php_script/ajax_api_script.php',  //requesting inner php which sends ajax to MapB API
			    url: 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + numberX + '.json?country=us&access_token=pk.eyJ1IjoiYWNjb3VudDkzMSIsImEiOiJjaXgwOTVuOTEwMGFxMnVsczRwOWx0czhnIn0.YjZ5bpnh6jqTEk7cCJfrzw',

                type: 'GET', //!!!!!!!! NOT POST
			    dataType: 'json', // without this it returned string(that can be alerted), now it returns object
			    //async: false,
			    //passing the data
                data: { 
			        //serverAddress:numberX
			     },
                 success: function(data) { console.log(data); //alert("this.hFinal-1 " + this.hFinal );
				     //My add- consider the case when the address is Not found, 2018-------------------------
	                 //var status = data.status // json result returns OK||ZERO_RESULTS //Google maps Variant
					   
			         var status = data.type // json result returns OK||ZERO_RESULTS //MAPBOX
	                 //if(status=="OK"){ //alert("OK"); //Google maps Variant
				     if(status=="FeatureCollection"){ //alert("OK FeatureCollection");   //MapBox Variant
					   
				         //if (data.features[0].center[1]== null) { alert("OK"); //if var defined
	                     this.dataX2 = '<tr><td>' +   data.features[0].center[1] +  '</td><td>' + data.features[0].center[0] +   '</td></tr>';     //MapBox Variant
                         //alert("this.dataX2" + this.dataX2);
				     } else { //alert("OK NOT");
	                     this.dataX2 = '<tr><td> Not Found </td><td></td></tr>';  //alert("this.dataX2" + this.dataX2);
	                 }
	                 // END My add- consider the case when the address is Not found, 2018----------------------
	
	                 //alert("nn " + split_coordinates.hFinal);
                     split_coordinates.hFinal = split_coordinates.hFinal + this.dataX2;  //alert("this.hFinal-2 " + this.hFinal );
				     //alert("ajax " + this.hFinal);
               
                  },  //end success
			      error: function (error) { //alert(data);
				      $("#resultFinal").stop().fadeOut("slow",function(){ $(this).html("<h4 style='color:red;padding:3em;'>ERROR!!! <br>Crashed</h4>")}).fadeIn(2000);
                  }	
               });
                                               
               //END AJAXed  part 
			   //------------------
              
			}
			
	  
   },
   // **                                                                                  **
   // **                                                                                  **
   // **************************************************************************************
   // **************************************************************************************
   
   
   
   
   
    // **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
    this.displayResults = function(){
		$("#loading").fadeOut(1900); //hide preloader
		split_coordinates.hFinal = split_coordinates.hFinal + '</table></br></br></br></br></br>' ;   //alert ("newHTML= "+newHTML);
		//alert("gdgfdg FINAL  " + split_coordinates.hFinal);
				
        // HTML  Result div  with  animation;
        $("#resultFinal").stop().fadeOut("slow",function(){ 
            $(this).html(split_coordinates.hFinal)
        }).fadeIn(2000);

        $("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div
        //HideInstructions();
	  
   }
   // **                                                                                  **
   // **                                                                                  **
   // **************************************************************************************
   // **************************************************************************************
}

module.exports = split_coordinates;



},{"./error_process.js":4}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9nZW9fbWFwYm94X2NvcmUuanMiLCJqcy9qc19tb2R1bGVzL2NsZWFyX2ZpZWxkcy5qcyIsImpzL2pzX21vZHVsZXMvY29weV9wcm9jZXNzLmpzIiwianMvanNfbW9kdWxlcy9lcnJvcl9wcm9jZXNzLmpzIiwianMvanNfbW9kdWxlcy9pbnN0cnVjdGlvblouanMiLCJqcy9qc19tb2R1bGVzL2xvYWRfZXhhbXBsZS5qcyIsImpzL2pzX21vZHVsZXMvc3BsaXRfY29vcmRpbmF0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcclxudmFyIGluc3RydWN0X2ZpbGUgPSByZXF1aXJlKCcuL2pzX21vZHVsZXMvaW5zdHJ1Y3Rpb25aLmpzJyk7XHJcbnZhciBjbGVhcl9maWxlID0gcmVxdWlyZSgnLi9qc19tb2R1bGVzL2NsZWFyX2ZpZWxkcy5qcycpO1xyXG52YXIgbG9hZEV4YW1wbGVfZmlsZSA9IHJlcXVpcmUoJy4vanNfbW9kdWxlcy9sb2FkX2V4YW1wbGUuanMnKTtcclxudmFyIHNwbGl0X2ZpbGUgPSByZXF1aXJlKCcuL2pzX21vZHVsZXMvc3BsaXRfY29vcmRpbmF0ZXMuanMnKTtcclxudmFyIGNvcHlfZmlsZSA9IHJlcXVpcmUoJy4vanNfbW9kdWxlcy9jb3B5X3Byb2Nlc3MuanMnKTtcclxudmFyIGVycm9yX2ZpbGUgPSByZXF1aXJlKCcuL2pzX21vZHVsZXMvZXJyb3JfcHJvY2Vzcy5qcycpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vZmluZGluZyBjb29yZGluYXRlcyBieSBhZGRyZXNzIChHIEFQSSlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgXHJcblxyXG4vL0NsaWNrIFNQTElUICBCdXR0b25cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcclxuICAgICQoXCIjc3BsaXRCdXR0b25cIikuY2xpY2soZnVuY3Rpb24oKXsgICAgICAgIC8vICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgJy5jaXJjbGUnLCBmdW5jdGlvbigpIHsgICAvLyB0aGlzICBjbGljayAgaXMgIHVzZWQgIHRvICAgcmVhY3QgIHRvICBuZXdseSBnZW5lcmF0ZWQgY2ljbGVzO1xyXG4gICAgICAgIFxyXG5cdFx0dmFyIHNwbGl0TW9kdWxlID0gbmV3IHNwbGl0X2ZpbGUoKTtcclxuXHRcdFxyXG5cdFx0Ly9pZiB0ZXh0YXJlYSBpcyBlbXB0eSwgc3RvcCBpdCBhbGxcclxuXHRcdGlmKCFzcGxpdE1vZHVsZS5nZXRGb3JtVmFsdWUoKSl7XHJcblx0XHRcdHJldHVybiBmYWxzZTsgXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vUHJvbWlzZVxyXG5cdFx0JC53aGVuKCBzcGxpdE1vZHVsZS5nZXRBamF4Q29vcmRpbmF0ZXMoKSlcclxuXHRcdCAgIC50aGVuKGZ1bmN0aW9uKCApIHsgICAgXHJcbiAgICAgICAgICAgICAgICAvL3NwbGl0TW9kdWxlLmRpc3BsYXlSZXN1bHRzKCk7XHRcdCAgIFxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChzcGxpdE1vZHVsZS5kaXNwbGF5UmVzdWx0cywgMjAwMCk7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgfSk7IFxyXG5cdFx0XHJcblx0XHJcbiAgICB9KTtcclxuLy9FTkQgQ2xpY2sgU1BMSVQgIEJ1dHRvblxyXG4vLyAqKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4vLyAqKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuXHRcclxuXHRcclxuXHJcbi8vQ2xpY2sgSW5zdHJ1Y3Rpb24gIEJ1dHRvblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4gICQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikuY2xpY2soZnVuY3Rpb24oKXsgXHJcblx0ICB2YXIgaW5zdHJNb2R1bGUgPSBuZXcgaW5zdHJ1Y3RfZmlsZSgpO1xyXG5cdCAgaW5zdHJNb2R1bGUuc2V0SW5zdHJ1Y3Rpb24oKTsgIC8vTW9kdWxlXHJcbiAgICAgIC8vaW5zdHJ1Y3Rpb24ubG9hZEluc3RydWN0aW9ucygpO1xyXG4gICAgfSk7XHJcblx0XHJcbi8vICoqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXHJcbi8vICoqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cclxuLy9DbGljayBFeGFtcGxlICBCdXR0b25cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcclxuICAgICQoXCIjZXhhbXBsZWJ1dHRvblwiKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0dmFyIGxvYWRFeGFtcGxlTW9kdWxlID0gbmV3IGxvYWRFeGFtcGxlX2ZpbGUoKTsgIC8vTW9kdWxlXHJcblx0XHRsb2FkRXhhbXBsZU1vZHVsZS5sb2FkRXhhbXBsZUNvb3JkaW5hdGVzKCk7XHJcbiAgICAgICAgLy9sb2FkX2V4YW1wbGUubG9hZEV4YW1wbGVDb29yZGluYXRlcygpO1xyXG4gICAgfSk7XHJcblx0XHJcbi8vICoqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXHJcbi8vICoqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5cclxuXHRcclxuXHRcclxuXHJcbi8vQ0xFQVIgIEJ1dHRvblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4gICAgJChcIiNjbGVhckJ1dHRvblwiKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0dmFyIGNsZWFyTW9kdWxlID0gbmV3IGNsZWFyX2ZpbGUoKTtcclxuXHRcdGNsZWFyTW9kdWxlLmNsZWFyRmllbGRzKCk7IC8vTW9kdWxlXHJcbiAgICAgICAgLy9jbGVhcl9maWVsZHMuY2xlYXJGaWVsZHMoKTtcclxuICAgIH0pO1xyXG4vLyAqKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4vLyAqKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vQ29weSBCdXR0b25cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcclxuICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgJyNjb3B5YnV0dG9uJywgZnVuY3Rpb24oKSB7ICAgLy8gdGhpcyAgY2xpY2sgIGlzICB1c2VkICB0byAgIHJlYWN0ICB0byAgbmV3bHkgZ2VuZXJhdGVkIGNpY2xlcztcclxuXHQgICAgdmFyIGNvcHlNb2R1bGUgPSBuZXcgY29weV9maWxlKCk7XHJcblx0XHRjb3B5TW9kdWxlLmNvcHlfdG9fY2xpcGJvYXJkKCk7IC8vTW9kdWxlXHJcblx0fSk7XHJcbi8vICoqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXHJcbi8vICoqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBFTkQgUkVBRFlcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImZ1bmN0aW9uIGNsZWFyX2ZpZWxkc3NzKCl7XHJcblx0XHJcbiAgdGhpcy5jbGVhckZpZWxkcyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoXCIjaGlkZGVuSW5zdHJ1Y3Rpb25zXCIpLmhpZGUoMjAwMCk7XHJcbiAgICAgICAgICAgICQoXCIjY29vcmRzSW5wdXRcIikudmFsKCcnKTtcclxuICAgICAgICAgICAgJChcIiNyZXN1bHRGaW5hbFwiKS5oaWRlKDEwMDApO1xyXG4gICAgICAgICAgICAvL2hpZGUgIGluc3RyICAmICBjaGFuZ2UgIGJ1dHRvblxyXG4gICAgICAgICAgICB0aGlzLmhpZGVJbnN0cnVjdGlvbnMgKCk7XHJcbiAgICAgICAgICAgIC8vRU5EICBIaWRlIEluc3RydWN0aW9ucyAgYW5kICBjaGFuZ2UgIGJ1dHRvblxyXG4gICB9LFxyXG4gICBcclxuICAgXHJcbiAgICB0aGlzLmhpZGVJbnN0cnVjdGlvbnMgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICBpZiAoJCgnI2hpZGRlbkluc3RydWN0aW9ucycpLmNzcygnZGlzcGxheScpID09ICdub25lJykgeyBcclxuXHQgICAgICAgICAvL2RvIG5vdGhpbmdcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI2hpZGRlbkluc3RydWN0aW9uc1wiKS5oaWRlKDIwMDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikuYXR0cihcInZhbHVlXCIpPT1cImluc3RydWN0aW9uc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS52YWwoXCJDbG9zZVwiKTskKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLmNzcyhcImJhY2tncm91bmRcIixcInJlZFwiKTtcclxuXHRcdCAgICAgICAgfSBlbHNlIHsgXHJcblx0XHQgICAgICAgICAgICAkKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLnZhbChcImluc3RydWN0aW9uc1wiKTskKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLmNzcyhcImJhY2tncm91bmRcIiwgXCJncmV5XCIpO1xyXG5cdFx0ICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgfVxyXG4gICBcclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY2xlYXJfZmllbGRzc3M7XHJcblxyXG5cclxuXHJcblxyXG4vKlxyXG5cclxuXHJcblx0dmFyIGNsZWFyX2ZpZWxkcyA9IHtcclxuXHRcdFxyXG5cdFx0Y2xlYXJGaWVsZHMgOiBmdW5jdGlvbigpIHtcclxuXHQgICAgICAgICQoXCIjaGlkZGVuSW5zdHJ1Y3Rpb25zXCIpLmhpZGUoMjAwMCk7XHJcbiAgICAgICAgICAgICQoXCIjY29vcmRzSW5wdXRcIikudmFsKCcnKTtcclxuICAgICAgICAgICAgJChcIiNyZXN1bHRGaW5hbFwiKS5oaWRlKDEwMDApO1xyXG4gICAgICAgICAgICAvL2hpZGUgIGluc3RyICAmICBjaGFuZ2UgIGJ1dHRvblxyXG4gICAgICAgICAgICB0aGlzLmhpZGVJbnN0cnVjdGlvbnMgKCk7XHJcbiAgICAgICAgICAgIC8vRU5EICBIaWRlIEluc3RydWN0aW9ucyAgYW5kICBjaGFuZ2UgIGJ1dHRvblxyXG4gICAgICAgIH0sXHJcblx0XHRcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRoaWRlSW5zdHJ1Y3Rpb25zOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZiAoJCgnI2hpZGRlbkluc3RydWN0aW9ucycpLmNzcygnZGlzcGxheScpID09ICdub25lJykgeyBcclxuXHQgICAgICAgICAvL2RvIG5vdGhpbmdcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI2hpZGRlbkluc3RydWN0aW9uc1wiKS5oaWRlKDIwMDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikuYXR0cihcInZhbHVlXCIpPT1cImluc3RydWN0aW9uc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS52YWwoXCJDbG9zZVwiKTskKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLmNzcyhcImJhY2tncm91bmRcIixcInJlZFwiKTtcclxuXHRcdCAgICAgICAgfSBlbHNlIHsgXHJcblx0XHQgICAgICAgICAgICAkKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLnZhbChcImluc3RydWN0aW9uc1wiKTskKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLmNzcyhcImJhY2tncm91bmRcIiwgXCJncmV5XCIpO1xyXG5cdFx0ICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdCovIiwiZnVuY3Rpb24gY29weV9wcm9jZXNzKCl7XHJcblx0XHJcbiAgdGhpcy5jb3B5X3RvX2NsaXBib2FyZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICAgICAgLy8gY3JlYXRpbmcgbmV3IHRleHRhcmVhIGVsZW1lbnQgYW5kIGdpdmVpbmcgaXQgaWQgJ3QnXHJcbiAgICAgIHZhciB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgdC5pZCA9ICd0JztcclxuICAgICAgLy8gT3B0aW9uYWwgc3RlcCB0byBtYWtlIGxlc3Mgbm9pc2UgaW4gdGhlIHBhZ2UsIGlmIGFueSFcclxuICAgICAgdC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gICAgICAvLyBZb3UgaGF2ZSB0byBhcHBlbmQgaXQgdG8geW91ciBwYWdlIHNvbWV3aGVyZSwgSSBjaG9zZSA8Ym9keT5cclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0KTtcclxuICAgICAvLyBDb3B5IHdoYXRldmVyIGlzIGluIHlvdXIgZGl2IHRvIG91ciBuZXcgdGV4dGFyZWFcclxuICAgICB0LnZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlUmVzdWx0cycpLmlubmVyVGV4dDtcclxuICAgICAvLyBOb3cgY29weSB3aGF0ZXZlciBpbnNpZGUgdGhlIHRleHRhcmVhIHRvIGNsaXBib2FyZDtcclxuICAgICB2YXIgc2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdCcpO1xyXG4gICAgIHNlbGVjdG9yLnNlbGVjdCgpO1xyXG4gICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICAgLy8gUmVtb3ZlIHRoZSB0ZXh0YXJlYTtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodCk7XHJcblx0XHJcblx0JCgnI2ZsYXNoTWVzc2FnZScpLmh0bWwoJyBDb3BpZWQhISEhISEhJykuZmFkZU91dCg0NTAwKTtcclxuICAgICAgXHJcbiAgIH1cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY29weV9wcm9jZXNzO1xyXG5cclxuXHJcblxyXG5cclxuLypcclxuXHJcblxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdCovIiwiXHRcclxuLy92YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG52YXIgY2xlYXJfZmlsZSA9IHJlcXVpcmUoJy4vY2xlYXJfZmllbGRzLmpzJyk7XHJcblxyXG5cclxuZnVuY3Rpb24gZXJyb3JfcHJvY2Vzcygpe1xyXG5cdFxyXG5cdFxyXG4gIHRoaXMuc2hvd0Vycm9yID0gZnVuY3Rpb24oKXtcclxuICAgICAgJChcIiNyZXN1bHRGaW5hbFwiKS5zdG9wKCkuZmFkZU91dChcInNsb3dcIixmdW5jdGlvbigpeyAkKHRoaXMpLmh0bWwoXCI8aDIgY2xhc3M9J3JlZC1jb2xvcic+RVJST1ItPiBjaGVjayAgeW91ciAgaW5wdXQ8L2gyPlwiKSB9KS5mYWRlSW4oMjAwMCk7XHJcbiAgICAgICQoXCIjcmVzdWx0RmluYWxcIikuY3NzKFwiYm9yZGVyXCIsXCIxcHggc29saWQgcmVkXCIpOyAvLyAgc2V0ICByZWQgIGJvcmRlciAgZm9yICByZXN1bHQgIGRpdlxyXG5cdCAgXHJcbiAgICAgIC8vSGlkZUluc3RydWN0aW9ucyAoKTtcclxuXHQgIHZhciBjbGVhck1vZHVsZSA9IG5ldyBjbGVhcl9maWxlKCk7XHJcblx0ICBjbGVhck1vZHVsZS5oaWRlSW5zdHJ1Y3Rpb25zKCk7IC8vTW9kdWxlXHJcbiAgIH1cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZXJyb3JfcHJvY2VzcztcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuIiwiLy8gIE9CSkVDVDogbG9hZCBpbnN0cnVjdGlvbnMsIGV4YW1wbGVzLCBjbGVhciBmaWVsZHMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuLy92YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG4vL3ZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xyXG5cclxuZnVuY3Rpb24gaW5zdHJ1Y3Rpb25YKCl7IFxyXG5cdFxyXG4gIHRoaXMuc2V0SW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbigpe1xyXG4gICAgICAkKFwiI2hpZGRlbkluc3RydWN0aW9uc1wiKS50b2dnbGUoMTAwMCk7XHJcbiAgICAgICBpZiAoJChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS5hdHRyKFwidmFsdWVcIik9PVwiaW5zdHJ1Y3Rpb25zXCIpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikudmFsKFwiIF9DbG9zZV8gXCIpO1xyXG5cdFx0XHRcdC8vJChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS5jc3MoXCJiYWNrZ3JvdW5kXCIsXCJyZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHsgXHJcblx0XHQgICAgICAgICQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikudmFsKFwiaW5zdHJ1Y3Rpb25zXCIpO1xyXG5cdFx0XHRcdC8vJChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS5jc3MoXCJiYWNrZ3JvdW5kXCIsXCJncmV5XCIpO1xyXG5cdCAgICB9XHRcclxuICAgfVxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbnN0cnVjdGlvblg7XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0LypcclxuXHRcclxuXHR2YXIgaW5zdHJ1Y3Rpb24gPSB7XHJcblx0XHRsb2FkSW5zdHJ1Y3Rpb25zIDogZnVuY3Rpb24oKSB7XHJcblx0ICAgICAgICAkKFwiI2hpZGRlbkluc3RydWN0aW9uc1wiKS50b2dnbGUoMTAwMCk7XHJcbiAgICAgICAgICAgIGlmICgkKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLmF0dHIoXCJ2YWx1ZVwiKT09XCJpbnN0cnVjdGlvbnNcIikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS52YWwoXCJDbG9zZVwiKTtcclxuXHRcdFx0XHQkKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLmNzcyhcImJhY2tncm91bmRcIixcInJlZFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHsgXHJcblx0XHQgICAgICAgICQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikudmFsKFwiaW5zdHJ1Y3Rpb25zXCIpO1xyXG5cdFx0XHRcdCQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikuY3NzKFwiYmFja2dyb3VuZFwiLFwiZ3JleVwiKTtcclxuXHQgICAgICAgIH1cdFxyXG4gICAgICAgIH0sXHJcblx0fVxyXG5cdCovIiwiZnVuY3Rpb24gbG9hZF9leGFtcGxlKCl7XHJcblx0XHJcbiAgdGhpcy5jb29yZGluYXRlc1NldCA9XHRcIjIyODAyIFdFU1RFUk4gQVYsIFRPUlJBTkNFLCA5MDUwMVxcbjE2MDEgS2luZ3NkYWxlIEF2ZSwgUmVkb25kbyBCZWFjaCwgQ0EgOTAyN1xcbjM1MjUgVyBDYXJzb24gU3QsIFRvcnJhbmNlLCBDQSA5MDUwM1xcbjIwNDAxIFZpY3RvciBTdCwgVG9ycmFuY2UsIENBIDkwNTAzXFxuMjAxNSBXIFJlZG9uZG8gQmVhY2ggQmx2ZCBDLCBHYXJkZW5hLCBDQSA5MDI0N1wiLFxyXG5cclxuXHRcclxuICB0aGlzLmxvYWRFeGFtcGxlQ29vcmRpbmF0ZXMgPSBmdW5jdGlvbigpe1xyXG5cdCAgJChcIiNjb29yZHNJbnB1dFwiKS52YWwodGhpcy5jb29yZGluYXRlc1NldCk7IC8vICB3YXMgXFxuICBpbiB0aGUgIGVuZCBcclxuICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGxvYWRfZXhhbXBsZTtcclxuXHJcblxyXG5cclxuXHJcbiIsInZhciBlcnJvcl9maWxlID0gcmVxdWlyZSgnLi9lcnJvcl9wcm9jZXNzLmpzJyk7XHJcblxyXG5cclxuZnVuY3Rpb24gc3BsaXRfY29vcmRpbmF0ZXMoKXtcclxuXHRcclxuICB0aGlzLmQgPSBcIlwiLFxyXG4gIHRoaXMuYXJyYXlYMiA9IFwiXCIsXHJcbiAgdGhpcy5kYXRhWCA9IFwiXCIsXHJcbiAgdGhpcy5oRmluYWwgPSBcIlwiLFxyXG5cdFxyXG4gIC8vZ2V0cyBhZGRyZXNzZXMgdGV4dCBmcm9tIHRleHRhcmVhXHRcclxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcclxuICB0aGlzLmdldEZvcm1WYWx1ZSA9IGZ1bmN0aW9uKCl7XHJcblx0ICAgaWYgKCQoXCIjY29vcmRzSW5wdXRcIikudmFsKCkudHJpbSgpPT1cIlwiKXtcclxuXHQgICAgIC8vYWxlcnQoXCJFbXB0eVwiKTtcclxuXHRcdCAvL0Rpc3BsYXkgZXJyb3JcclxuXHRcdCB2YXIgZXJyb3JNb2R1bGUgPSBuZXcgZXJyb3JfZmlsZSgpO1xyXG5cdFx0IGVycm9yTW9kdWxlLnNob3dFcnJvcigpO1xyXG5cdFx0IFxyXG4gICAgICAgICByZXR1cm4gZmFsc2U7XHRcdCBcclxuXHQgICB9XHJcblx0ICAgdGV4dGFyZWFYID0gJChcIiNjb29yZHNJbnB1dFwiKS52YWwoKTsgLy9hbGVydCh0ZXh0YXJlYSk7XHJcbiAgICAgICB0ZXh0YXJlYVggPSB0ZXh0YXJlYVgudHJpbSgpO1xyXG4gICAgICAgdGhpcy5hcnJheVgyID0gdGV4dGFyZWFYLnNwbGl0KCdcXG4nKTsvKi5qb2luKCcsJykuc3BsaXQoJywnKTsgKi9cclxuXHQgICAvL2FsZXJ0KHRoaXMuYXJyYXlYMik7XHJcblx0XHRcdFxyXG5cdCAgIHRoaXMuZCA9IHRoaXMuYXJyYXlYMi5sZW5ndGg7IC8vYWxlcnQoJ2FkZHJlc3MgYXJyYXkgY29udGFpbnMgLT4gJyArIHRoaXMuZCk7XHJcblx0ICAgc3BsaXRfY29vcmRpbmF0ZXMuaEZpbmFsPSc8YnI+PHAgc3R5bGU9XCJjb2xvcjpyZWQ7XCI+UkVTVUxUUyA9PiBmb3VuZCAnKyB0aGlzLmQgKyAgJzwvYnI+IDwvYnI+PGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkNvcHlcIiBpZD1cImNvcHlidXR0b25cIj48c3BhbiBpZD1cImZsYXNoTWVzc2FnZVwiPjwvc3Bhbj4gPC9icj48L2JyPjx0YWJsZSBpZD1cInRhYmxlUmVzdWx0c1wiPic7XHJcbiAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgfSxcclxuICAgLy8gKiogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcclxuICAgLy8gKiogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcclxuICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgXHJcbiAgIFxyXG4gICBcclxuICAgXHJcbiAgLy9zZW5kcyBhamF4IHRvIEFQSVxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4gIHRoaXMuZ2V0QWpheENvb3JkaW5hdGVzID0gZnVuY3Rpb24oKXtcclxuXHQgICQoXCIjbG9hZGluZ1wiKS5mYWRlSW4oMjAwKTsgLy9zaG93IHByZWxvYWRlclxyXG4gICAgICAvL2FsZXJ0KFwidGhpcyBcIiArIHRoaXMuYXJyYXlYMik7XHJcblx0ICAvL05ldy1Bc3luYyBXT1JLU1NTU1MqKioqKioqKioqKioqKlx0XHJcbiAgICAgICBmb3IgKGogPSAwOyBqIDwgdGhpcy5kOyBqKyspIHsgIFxyXG4gICAgICAgICAgIC8vYWxlcnQodGhpcy5hcnJheVgyW2pdKTsgIFxyXG5cdFx0XHR2YXIgbnVtYmVyWCA9IHRoaXMuYXJyYXlYMltqXTtcclxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHQvLyBzZW5kICBkYXRhICB0byAgUEhQIGhhbmRsZXIgICoqKioqKioqKioqKiBcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIC8vdXJsOiAgJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/YWRkcmVzcz0nICsgdGhpcy5hcnJheVgyW2pdICsgJyZrZXk9QUl6YVN5QU5TZDVJTVlUQ2NNeDZIYXA0NEZYZDZfekRvMWRrbGg4JyxcclxuXHRcdFx0XHQvL3VybDogICdhamF4X3BocF9zY3JpcHQvYWpheF9hcGlfc2NyaXB0LnBocCcsICAvL3JlcXVlc3RpbmcgaW5uZXIgcGhwIHdoaWNoIHNlbmRzIGFqYXggdG8gTWFwQiBBUElcclxuXHRcdFx0ICAgIHVybDogJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20vZ2VvY29kaW5nL3Y1L21hcGJveC5wbGFjZXMvJyArIG51bWJlclggKyAnLmpzb24/Y291bnRyeT11cyZhY2Nlc3NfdG9rZW49cGsuZXlKMUlqb2lZV05qYjNWdWREa3pNU0lzSW1FaU9pSmphWGd3T1RWdU9URXdNR0Z4TW5Wc2N6UndPV3gwY3pobkluMC5Zalo1YnBuaDZqcVRFazdjQ0pmcnp3JyxcclxuXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnR0VUJywgLy8hISEhISEhISBOT1QgUE9TVFxyXG5cdFx0XHQgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gd2l0aG91dCB0aGlzIGl0IHJldHVybmVkIHN0cmluZyh0aGF0IGNhbiBiZSBhbGVydGVkKSwgbm93IGl0IHJldHVybnMgb2JqZWN0XHJcblx0XHRcdCAgICAvL2FzeW5jOiBmYWxzZSxcclxuXHRcdFx0ICAgIC8vcGFzc2luZyB0aGUgZGF0YVxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBcclxuXHRcdFx0ICAgICAgICAvL3NlcnZlckFkZHJlc3M6bnVtYmVyWFxyXG5cdFx0XHQgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkgeyBjb25zb2xlLmxvZyhkYXRhKTsgLy9hbGVydChcInRoaXMuaEZpbmFsLTEgXCIgKyB0aGlzLmhGaW5hbCApO1xyXG5cdFx0XHRcdCAgICAgLy9NeSBhZGQtIGNvbnNpZGVyIHRoZSBjYXNlIHdoZW4gdGhlIGFkZHJlc3MgaXMgTm90IGZvdW5kLCAyMDE4LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdCAgICAgICAgICAgICAgICAgLy92YXIgc3RhdHVzID0gZGF0YS5zdGF0dXMgLy8ganNvbiByZXN1bHQgcmV0dXJucyBPS3x8WkVST19SRVNVTFRTIC8vR29vZ2xlIG1hcHMgVmFyaWFudFxyXG5cdFx0XHRcdFx0ICAgXHJcblx0XHRcdCAgICAgICAgIHZhciBzdGF0dXMgPSBkYXRhLnR5cGUgLy8ganNvbiByZXN1bHQgcmV0dXJucyBPS3x8WkVST19SRVNVTFRTIC8vTUFQQk9YXHJcblx0ICAgICAgICAgICAgICAgICAvL2lmKHN0YXR1cz09XCJPS1wiKXsgLy9hbGVydChcIk9LXCIpOyAvL0dvb2dsZSBtYXBzIFZhcmlhbnRcclxuXHRcdFx0XHQgICAgIGlmKHN0YXR1cz09XCJGZWF0dXJlQ29sbGVjdGlvblwiKXsgLy9hbGVydChcIk9LIEZlYXR1cmVDb2xsZWN0aW9uXCIpOyAgIC8vTWFwQm94IFZhcmlhbnRcclxuXHRcdFx0XHRcdCAgIFxyXG5cdFx0XHRcdCAgICAgICAgIC8vaWYgKGRhdGEuZmVhdHVyZXNbMF0uY2VudGVyWzFdPT0gbnVsbCkgeyBhbGVydChcIk9LXCIpOyAvL2lmIHZhciBkZWZpbmVkXHJcblx0ICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhWDIgPSAnPHRyPjx0ZD4nICsgICBkYXRhLmZlYXR1cmVzWzBdLmNlbnRlclsxXSArICAnPC90ZD48dGQ+JyArIGRhdGEuZmVhdHVyZXNbMF0uY2VudGVyWzBdICsgICAnPC90ZD48L3RyPic7ICAgICAvL01hcEJveCBWYXJpYW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvL2FsZXJ0KFwidGhpcy5kYXRhWDJcIiArIHRoaXMuZGF0YVgyKTtcclxuXHRcdFx0XHQgICAgIH0gZWxzZSB7IC8vYWxlcnQoXCJPSyBOT1RcIik7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhWDIgPSAnPHRyPjx0ZD4gTm90IEZvdW5kIDwvdGQ+PHRkPjwvdGQ+PC90cj4nOyAgLy9hbGVydChcInRoaXMuZGF0YVgyXCIgKyB0aGlzLmRhdGFYMik7XHJcblx0ICAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgICAvLyBFTkQgTXkgYWRkLSBjb25zaWRlciB0aGUgY2FzZSB3aGVuIHRoZSBhZGRyZXNzIGlzIE5vdCBmb3VuZCwgMjAxOC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQgICAgICAgICAgICAgICAgIC8vYWxlcnQoXCJubiBcIiArIHNwbGl0X2Nvb3JkaW5hdGVzLmhGaW5hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNwbGl0X2Nvb3JkaW5hdGVzLmhGaW5hbCA9IHNwbGl0X2Nvb3JkaW5hdGVzLmhGaW5hbCArIHRoaXMuZGF0YVgyOyAgLy9hbGVydChcInRoaXMuaEZpbmFsLTIgXCIgKyB0aGlzLmhGaW5hbCApO1xyXG5cdFx0XHRcdCAgICAgLy9hbGVydChcImFqYXggXCIgKyB0aGlzLmhGaW5hbCk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9LCAgLy9lbmQgc3VjY2Vzc1xyXG5cdFx0XHQgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7IC8vYWxlcnQoZGF0YSk7XHJcblx0XHRcdFx0ICAgICAgJChcIiNyZXN1bHRGaW5hbFwiKS5zdG9wKCkuZmFkZU91dChcInNsb3dcIixmdW5jdGlvbigpeyAkKHRoaXMpLmh0bWwoXCI8aDQgc3R5bGU9J2NvbG9yOnJlZDtwYWRkaW5nOjNlbTsnPkVSUk9SISEhIDxicj5DcmFzaGVkPC9oND5cIil9KS5mYWRlSW4oMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cdFxyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgLy9FTkQgQUpBWGVkICBwYXJ0IFxyXG5cdFx0XHQgICAvLy0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAgIFxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdCAgXHJcbiAgIH0sXHJcbiAgIC8vICoqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXHJcbiAgIC8vICoqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXHJcbiAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgIFxyXG4gICBcclxuICAgXHJcbiAgIFxyXG4gICBcclxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcclxuICAgIHRoaXMuZGlzcGxheVJlc3VsdHMgPSBmdW5jdGlvbigpe1xyXG5cdFx0JChcIiNsb2FkaW5nXCIpLmZhZGVPdXQoMTkwMCk7IC8vaGlkZSBwcmVsb2FkZXJcclxuXHRcdHNwbGl0X2Nvb3JkaW5hdGVzLmhGaW5hbCA9IHNwbGl0X2Nvb3JkaW5hdGVzLmhGaW5hbCArICc8L3RhYmxlPjwvYnI+PC9icj48L2JyPjwvYnI+PC9icj4nIDsgICAvL2FsZXJ0IChcIm5ld0hUTUw9IFwiK25ld0hUTUwpO1xyXG5cdFx0Ly9hbGVydChcImdkZ2ZkZyBGSU5BTCAgXCIgKyBzcGxpdF9jb29yZGluYXRlcy5oRmluYWwpO1xyXG5cdFx0XHRcdFxyXG4gICAgICAgIC8vIEhUTUwgIFJlc3VsdCBkaXYgIHdpdGggIGFuaW1hdGlvbjtcclxuICAgICAgICAkKFwiI3Jlc3VsdEZpbmFsXCIpLnN0b3AoKS5mYWRlT3V0KFwic2xvd1wiLGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgICAgICAkKHRoaXMpLmh0bWwoc3BsaXRfY29vcmRpbmF0ZXMuaEZpbmFsKVxyXG4gICAgICAgIH0pLmZhZGVJbigyMDAwKTtcclxuXHJcbiAgICAgICAgJChcIiNyZXN1bHRGaW5hbFwiKS5jc3MoXCJib3JkZXJcIixcIjFweCBzb2xpZCByZWRcIik7IC8vICBzZXQgIHJlZCAgYm9yZGVyICBmb3IgIHJlc3VsdCAgZGl2XHJcbiAgICAgICAgLy9IaWRlSW5zdHJ1Y3Rpb25zKCk7XHJcblx0ICBcclxuICAgfVxyXG4gICAvLyAqKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4gICAvLyAqKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4gICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNwbGl0X2Nvb3JkaW5hdGVzO1xyXG5cclxuXHJcbiJdfQ==
