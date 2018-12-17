(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


var instruct_file = require('./js_modules/instructionZ.js');
var clear_file = require('./js_modules/clear_fields.js');
var loadExample_file = require('./js_modules/load_example.js');
var split_file = require('./js_modules/split_coordinates.js');







//finding coordinates by address (G API).

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
                splitModule.displayResults();		   
                setTimeout(splitModule.displayResults, 2000);               
           }); 
		
	
    });
//END Click SPLIT  Button
//*****************************************************************************************************************************************************
	
	

//Click Instruction  Button
// **************************************************************************************
// **************************************************************************************
//                                                                                     **
  $("#instructionButton").click(function(){
	  var instrModule = new instruct_file();
	  instrModule.setInstruction();  //Module
      //instruction.loadInstructions();
    });
//END Click Instructions  Button
//***********************************************
	
	
	

//Click Example  Button
// **************************************************************************************
// **************************************************************************************
//                                                                                     **
    $("#examplebutton").click(function(){
		var loadExampleModule = new loadExample_file();  //Module
		loadExampleModule.loadExampleCoordinates();
        //load_example.loadExampleCoordinates();
    });
//END Click Example  Button
//***************************************************
	
	

//CLEAR  Button
// **************************************************************************************
// **************************************************************************************
//                                                                                     **
    $("#clearButton").click(function(){
		var clearModule = new clear_file();
		clearModule.clearFields(); //Module
        //clear_fields.clearFields();
    });
//END CLEAR  Button
//***********************************************















 








// END READY
});







},{"./js_modules/clear_fields.js":2,"./js_modules/instructionZ.js":3,"./js_modules/load_example.js":4,"./js_modules/split_coordinates.js":5}],2:[function(require,module,exports){
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
//  OBJECT: load instructions, examples, clear fields---------------------------------------------------------------------------------------
	
//var $ = require('jquery');
//var _ = require('underscore');

function instructionX(){
	
  this.setInstruction = function(){
      $("#hiddenInstructions").toggle(1000);
       if ($("#instructionButton").attr("value")=="instructions") {
                $("#instructionButton").val(" _Close_ ");
				$("#instructionButton").css("background","red");
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
},{}],4:[function(require,module,exports){
function load_example(){
	
  this.coordinatesSet =	"22802 WESTERN AV, TORRANCE, 90501\n1601 Kingsdale Ave, Redondo Beach, CA 9027\n3525 W Carson St, Torrance, CA 90503\n20401 Victor St, Torrance, CA 90503\n2015 W Redondo Beach Blvd C, Gardena, CA 90247",

	
  this.loadExampleCoordinates = function(){
	  $("#coordsInput").val(this.coordinatesSet); //  was \n  in the  end 
   }
}

module.exports = load_example;





},{}],5:[function(require,module,exports){
function split_coordinates(){
	
  this.d = "",
  this.arrayX2 = "",
  this.dataX = "",
  this.hFinal = "",
	
  // **************************************************************************************
  // **************************************************************************************
  //                                                                                     **
  this.getFormValue = function(){
	   if ($("#coordsInput").val().trim()==""){
	     alert("Empty");
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



},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9nZW9fbWFwYm94X2NvcmUuanMiLCJqcy9qc19tb2R1bGVzL2NsZWFyX2ZpZWxkcy5qcyIsImpzL2pzX21vZHVsZXMvaW5zdHJ1Y3Rpb25aLmpzIiwianMvanNfbW9kdWxlcy9sb2FkX2V4YW1wbGUuanMiLCJqcy9qc19tb2R1bGVzL3NwbGl0X2Nvb3JkaW5hdGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXHJcblxyXG52YXIgaW5zdHJ1Y3RfZmlsZSA9IHJlcXVpcmUoJy4vanNfbW9kdWxlcy9pbnN0cnVjdGlvblouanMnKTtcclxudmFyIGNsZWFyX2ZpbGUgPSByZXF1aXJlKCcuL2pzX21vZHVsZXMvY2xlYXJfZmllbGRzLmpzJyk7XHJcbnZhciBsb2FkRXhhbXBsZV9maWxlID0gcmVxdWlyZSgnLi9qc19tb2R1bGVzL2xvYWRfZXhhbXBsZS5qcycpO1xyXG52YXIgc3BsaXRfZmlsZSA9IHJlcXVpcmUoJy4vanNfbW9kdWxlcy9zcGxpdF9jb29yZGluYXRlcy5qcycpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy9maW5kaW5nIGNvb3JkaW5hdGVzIGJ5IGFkZHJlc3MgKEcgQVBJKS5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgXHJcblxyXG4vL0NsaWNrIFNQTElUICBCdXR0b25cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcclxuICAgICQoXCIjc3BsaXRCdXR0b25cIikuY2xpY2soZnVuY3Rpb24oKXsgICAgICAgIC8vICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgJy5jaXJjbGUnLCBmdW5jdGlvbigpIHsgICAvLyB0aGlzICBjbGljayAgaXMgIHVzZWQgIHRvICAgcmVhY3QgIHRvICBuZXdseSBnZW5lcmF0ZWQgY2ljbGVzO1xyXG4gICAgICAgIFxyXG5cdFx0dmFyIHNwbGl0TW9kdWxlID0gbmV3IHNwbGl0X2ZpbGUoKTtcclxuXHRcdFxyXG5cdFx0Ly9pZiB0ZXh0YXJlYSBpcyBlbXB0eSwgc3RvcCBpdCBhbGxcclxuXHRcdGlmKCFzcGxpdE1vZHVsZS5nZXRGb3JtVmFsdWUoKSl7XHJcblx0XHRcdHJldHVybiBmYWxzZTsgXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vUHJvbWlzZVxyXG5cdFx0JC53aGVuKCBzcGxpdE1vZHVsZS5nZXRBamF4Q29vcmRpbmF0ZXMoKSlcclxuXHRcdCAgIC50aGVuKGZ1bmN0aW9uKCApIHsgICAgXHJcbiAgICAgICAgICAgICAgICBzcGxpdE1vZHVsZS5kaXNwbGF5UmVzdWx0cygpO1x0XHQgICBcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoc3BsaXRNb2R1bGUuZGlzcGxheVJlc3VsdHMsIDIwMDApOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIH0pOyBcclxuXHRcdFxyXG5cdFxyXG4gICAgfSk7XHJcbi8vRU5EIENsaWNrIFNQTElUICBCdXR0b25cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFxyXG5cdFxyXG5cclxuLy9DbGljayBJbnN0cnVjdGlvbiAgQnV0dG9uXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXHJcbiAgJChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdCAgdmFyIGluc3RyTW9kdWxlID0gbmV3IGluc3RydWN0X2ZpbGUoKTtcclxuXHQgIGluc3RyTW9kdWxlLnNldEluc3RydWN0aW9uKCk7ICAvL01vZHVsZVxyXG4gICAgICAvL2luc3RydWN0aW9uLmxvYWRJbnN0cnVjdGlvbnMoKTtcclxuICAgIH0pO1xyXG4vL0VORCBDbGljayBJbnN0cnVjdGlvbnMgIEJ1dHRvblxyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHJcblx0XHJcblx0XHJcblxyXG4vL0NsaWNrIEV4YW1wbGUgIEJ1dHRvblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4gICAgJChcIiNleGFtcGxlYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgbG9hZEV4YW1wbGVNb2R1bGUgPSBuZXcgbG9hZEV4YW1wbGVfZmlsZSgpOyAgLy9Nb2R1bGVcclxuXHRcdGxvYWRFeGFtcGxlTW9kdWxlLmxvYWRFeGFtcGxlQ29vcmRpbmF0ZXMoKTtcclxuICAgICAgICAvL2xvYWRfZXhhbXBsZS5sb2FkRXhhbXBsZUNvb3JkaW5hdGVzKCk7XHJcbiAgICB9KTtcclxuLy9FTkQgQ2xpY2sgRXhhbXBsZSAgQnV0dG9uXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHJcblx0XHJcblxyXG4vL0NMRUFSICBCdXR0b25cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcclxuICAgICQoXCIjY2xlYXJCdXR0b25cIikuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdHZhciBjbGVhck1vZHVsZSA9IG5ldyBjbGVhcl9maWxlKCk7XHJcblx0XHRjbGVhck1vZHVsZS5jbGVhckZpZWxkcygpOyAvL01vZHVsZVxyXG4gICAgICAgIC8vY2xlYXJfZmllbGRzLmNsZWFyRmllbGRzKCk7XHJcbiAgICB9KTtcclxuLy9FTkQgQ0xFQVIgIEJ1dHRvblxyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBFTkQgUkVBRFlcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImZ1bmN0aW9uIGNsZWFyX2ZpZWxkc3NzKCl7XHJcblx0XHJcbiAgdGhpcy5jbGVhckZpZWxkcyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoXCIjaGlkZGVuSW5zdHJ1Y3Rpb25zXCIpLmhpZGUoMjAwMCk7XHJcbiAgICAgICAgICAgICQoXCIjY29vcmRzSW5wdXRcIikudmFsKCcnKTtcclxuICAgICAgICAgICAgJChcIiNyZXN1bHRGaW5hbFwiKS5oaWRlKDEwMDApO1xyXG4gICAgICAgICAgICAvL2hpZGUgIGluc3RyICAmICBjaGFuZ2UgIGJ1dHRvblxyXG4gICAgICAgICAgICB0aGlzLmhpZGVJbnN0cnVjdGlvbnMgKCk7XHJcbiAgICAgICAgICAgIC8vRU5EICBIaWRlIEluc3RydWN0aW9ucyAgYW5kICBjaGFuZ2UgIGJ1dHRvblxyXG4gICB9LFxyXG4gICBcclxuICAgXHJcbiAgICB0aGlzLmhpZGVJbnN0cnVjdGlvbnMgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICBpZiAoJCgnI2hpZGRlbkluc3RydWN0aW9ucycpLmNzcygnZGlzcGxheScpID09ICdub25lJykgeyBcclxuXHQgICAgICAgICAvL2RvIG5vdGhpbmdcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI2hpZGRlbkluc3RydWN0aW9uc1wiKS5oaWRlKDIwMDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikuYXR0cihcInZhbHVlXCIpPT1cImluc3RydWN0aW9uc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS52YWwoXCJDbG9zZVwiKTskKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLmNzcyhcImJhY2tncm91bmRcIixcInJlZFwiKTtcclxuXHRcdCAgICAgICAgfSBlbHNlIHsgXHJcblx0XHQgICAgICAgICAgICAkKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLnZhbChcImluc3RydWN0aW9uc1wiKTskKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLmNzcyhcImJhY2tncm91bmRcIiwgXCJncmV5XCIpO1xyXG5cdFx0ICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgfVxyXG4gICBcclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY2xlYXJfZmllbGRzc3M7XHJcblxyXG5cclxuXHJcblxyXG4vKlxyXG5cclxuXHJcblx0dmFyIGNsZWFyX2ZpZWxkcyA9IHtcclxuXHRcdFxyXG5cdFx0Y2xlYXJGaWVsZHMgOiBmdW5jdGlvbigpIHtcclxuXHQgICAgICAgICQoXCIjaGlkZGVuSW5zdHJ1Y3Rpb25zXCIpLmhpZGUoMjAwMCk7XHJcbiAgICAgICAgICAgICQoXCIjY29vcmRzSW5wdXRcIikudmFsKCcnKTtcclxuICAgICAgICAgICAgJChcIiNyZXN1bHRGaW5hbFwiKS5oaWRlKDEwMDApO1xyXG4gICAgICAgICAgICAvL2hpZGUgIGluc3RyICAmICBjaGFuZ2UgIGJ1dHRvblxyXG4gICAgICAgICAgICB0aGlzLmhpZGVJbnN0cnVjdGlvbnMgKCk7XHJcbiAgICAgICAgICAgIC8vRU5EICBIaWRlIEluc3RydWN0aW9ucyAgYW5kICBjaGFuZ2UgIGJ1dHRvblxyXG4gICAgICAgIH0sXHJcblx0XHRcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRoaWRlSW5zdHJ1Y3Rpb25zOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZiAoJCgnI2hpZGRlbkluc3RydWN0aW9ucycpLmNzcygnZGlzcGxheScpID09ICdub25lJykgeyBcclxuXHQgICAgICAgICAvL2RvIG5vdGhpbmdcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI2hpZGRlbkluc3RydWN0aW9uc1wiKS5oaWRlKDIwMDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikuYXR0cihcInZhbHVlXCIpPT1cImluc3RydWN0aW9uc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS52YWwoXCJDbG9zZVwiKTskKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLmNzcyhcImJhY2tncm91bmRcIixcInJlZFwiKTtcclxuXHRcdCAgICAgICAgfSBlbHNlIHsgXHJcblx0XHQgICAgICAgICAgICAkKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLnZhbChcImluc3RydWN0aW9uc1wiKTskKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLmNzcyhcImJhY2tncm91bmRcIiwgXCJncmV5XCIpO1xyXG5cdFx0ICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdCovIiwiLy8gIE9CSkVDVDogbG9hZCBpbnN0cnVjdGlvbnMsIGV4YW1wbGVzLCBjbGVhciBmaWVsZHMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuLy92YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG4vL3ZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xyXG5cclxuZnVuY3Rpb24gaW5zdHJ1Y3Rpb25YKCl7XHJcblx0XHJcbiAgdGhpcy5zZXRJbnN0cnVjdGlvbiA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoXCIjaGlkZGVuSW5zdHJ1Y3Rpb25zXCIpLnRvZ2dsZSgxMDAwKTtcclxuICAgICAgIGlmICgkKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLmF0dHIoXCJ2YWx1ZVwiKT09XCJpbnN0cnVjdGlvbnNcIikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS52YWwoXCIgX0Nsb3NlXyBcIik7XHJcblx0XHRcdFx0JChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS5jc3MoXCJiYWNrZ3JvdW5kXCIsXCJyZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHsgXHJcblx0XHQgICAgICAgICQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikudmFsKFwiaW5zdHJ1Y3Rpb25zXCIpO1xyXG5cdFx0XHRcdC8vJChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS5jc3MoXCJiYWNrZ3JvdW5kXCIsXCJncmV5XCIpO1xyXG5cdCAgICB9XHRcclxuICAgfVxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbnN0cnVjdGlvblg7XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0LypcclxuXHRcclxuXHR2YXIgaW5zdHJ1Y3Rpb24gPSB7XHJcblx0XHRsb2FkSW5zdHJ1Y3Rpb25zIDogZnVuY3Rpb24oKSB7XHJcblx0ICAgICAgICAkKFwiI2hpZGRlbkluc3RydWN0aW9uc1wiKS50b2dnbGUoMTAwMCk7XHJcbiAgICAgICAgICAgIGlmICgkKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLmF0dHIoXCJ2YWx1ZVwiKT09XCJpbnN0cnVjdGlvbnNcIikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS52YWwoXCJDbG9zZVwiKTtcclxuXHRcdFx0XHQkKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLmNzcyhcImJhY2tncm91bmRcIixcInJlZFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHsgXHJcblx0XHQgICAgICAgICQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikudmFsKFwiaW5zdHJ1Y3Rpb25zXCIpO1xyXG5cdFx0XHRcdCQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikuY3NzKFwiYmFja2dyb3VuZFwiLFwiZ3JleVwiKTtcclxuXHQgICAgICAgIH1cdFxyXG4gICAgICAgIH0sXHJcblx0fVxyXG5cdCovIiwiZnVuY3Rpb24gbG9hZF9leGFtcGxlKCl7XHJcblx0XHJcbiAgdGhpcy5jb29yZGluYXRlc1NldCA9XHRcIjIyODAyIFdFU1RFUk4gQVYsIFRPUlJBTkNFLCA5MDUwMVxcbjE2MDEgS2luZ3NkYWxlIEF2ZSwgUmVkb25kbyBCZWFjaCwgQ0EgOTAyN1xcbjM1MjUgVyBDYXJzb24gU3QsIFRvcnJhbmNlLCBDQSA5MDUwM1xcbjIwNDAxIFZpY3RvciBTdCwgVG9ycmFuY2UsIENBIDkwNTAzXFxuMjAxNSBXIFJlZG9uZG8gQmVhY2ggQmx2ZCBDLCBHYXJkZW5hLCBDQSA5MDI0N1wiLFxyXG5cclxuXHRcclxuICB0aGlzLmxvYWRFeGFtcGxlQ29vcmRpbmF0ZXMgPSBmdW5jdGlvbigpe1xyXG5cdCAgJChcIiNjb29yZHNJbnB1dFwiKS52YWwodGhpcy5jb29yZGluYXRlc1NldCk7IC8vICB3YXMgXFxuICBpbiB0aGUgIGVuZCBcclxuICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGxvYWRfZXhhbXBsZTtcclxuXHJcblxyXG5cclxuXHJcbiIsImZ1bmN0aW9uIHNwbGl0X2Nvb3JkaW5hdGVzKCl7XHJcblx0XHJcbiAgdGhpcy5kID0gXCJcIixcclxuICB0aGlzLmFycmF5WDIgPSBcIlwiLFxyXG4gIHRoaXMuZGF0YVggPSBcIlwiLFxyXG4gIHRoaXMuaEZpbmFsID0gXCJcIixcclxuXHRcclxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcclxuICB0aGlzLmdldEZvcm1WYWx1ZSA9IGZ1bmN0aW9uKCl7XHJcblx0ICAgaWYgKCQoXCIjY29vcmRzSW5wdXRcIikudmFsKCkudHJpbSgpPT1cIlwiKXtcclxuXHQgICAgIGFsZXJ0KFwiRW1wdHlcIik7XHJcbiAgICAgICAgIHJldHVybiBmYWxzZTtcdFx0IFxyXG5cdCAgIH1cclxuXHQgICB0ZXh0YXJlYVggPSAkKFwiI2Nvb3Jkc0lucHV0XCIpLnZhbCgpOyAvL2FsZXJ0KHRleHRhcmVhKTtcclxuICAgICAgIHRleHRhcmVhWCA9IHRleHRhcmVhWC50cmltKCk7XHJcbiAgICAgICB0aGlzLmFycmF5WDIgPSB0ZXh0YXJlYVguc3BsaXQoJ1xcbicpOy8qLmpvaW4oJywnKS5zcGxpdCgnLCcpOyAqL1xyXG5cdCAgIC8vYWxlcnQodGhpcy5hcnJheVgyKTtcclxuXHRcdFx0XHJcblx0ICAgdGhpcy5kID0gdGhpcy5hcnJheVgyLmxlbmd0aDsgLy9hbGVydCgnYWRkcmVzcyBhcnJheSBjb250YWlucyAtPiAnICsgdGhpcy5kKTtcclxuXHQgICBzcGxpdF9jb29yZGluYXRlcy5oRmluYWw9Jzxicj48cCBzdHlsZT1cImNvbG9yOnJlZDtcIj5SRVNVTFRTID0+IGZvdW5kICcrIHRoaXMuZCArICAnPC9icj4gPC9icj48aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQ29weVwiIGlkPVwiY29weWJ1dHRvblwiPjxzcGFuIGlkPVwiZmxhc2hNZXNzYWdlXCI+PC9zcGFuPiA8L2JyPjwvYnI+PHRhYmxlIGlkPVwidGFibGVSZXN1bHRzXCI+JztcclxuICAgICAgIHJldHVybiB0cnVlO1xyXG4gICB9LFxyXG4gICAvLyAqKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4gICAvLyAqKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4gICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICBcclxuICAgXHJcbiAgIFxyXG4gICBcclxuXHRcclxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcclxuICB0aGlzLmdldEFqYXhDb29yZGluYXRlcyA9IGZ1bmN0aW9uKCl7XHJcblx0ICAkKFwiI2xvYWRpbmdcIikuZmFkZUluKDIwMCk7IC8vc2hvdyBwcmVsb2FkZXJcclxuICAgICAgLy9hbGVydChcInRoaXMgXCIgKyB0aGlzLmFycmF5WDIpO1xyXG5cdCAgLy9OZXctQXN5bmMgV09SS1NTU1NTKioqKioqKioqKioqKipcdFxyXG4gICAgICAgZm9yIChqID0gMDsgaiA8IHRoaXMuZDsgaisrKSB7ICBcclxuICAgICAgICAgICAvL2FsZXJ0KHRoaXMuYXJyYXlYMltqXSk7ICBcclxuXHRcdFx0dmFyIG51bWJlclggPSB0aGlzLmFycmF5WDJbal07XHJcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFx0Ly8gc2VuZCAgZGF0YSAgdG8gIFBIUCBoYW5kbGVyICAqKioqKioqKioqKiogXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAvL3VybDogICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2FkZHJlc3M9JyArIHRoaXMuYXJyYXlYMltqXSArICcma2V5PUFJemFTeUFOU2Q1SU1ZVENjTXg2SGFwNDRGWGQ2X3pEbzFka2xoOCcsXHJcblx0XHRcdFx0Ly91cmw6ICAnYWpheF9waHBfc2NyaXB0L2FqYXhfYXBpX3NjcmlwdC5waHAnLCAgLy9yZXF1ZXN0aW5nIGlubmVyIHBocCB3aGljaCBzZW5kcyBhamF4IHRvIE1hcEIgQVBJXHJcblx0XHRcdCAgICB1cmw6ICdodHRwczovL2FwaS5tYXBib3guY29tL2dlb2NvZGluZy92NS9tYXBib3gucGxhY2VzLycgKyBudW1iZXJYICsgJy5qc29uP2NvdW50cnk9dXMmYWNjZXNzX3Rva2VuPXBrLmV5SjFJam9pWVdOamIzVnVkRGt6TVNJc0ltRWlPaUpqYVhnd09UVnVPVEV3TUdGeE1uVnNjelJ3T1d4MGN6aG5JbjAuWWpaNWJwbmg2anFURWs3Y0NKZnJ6dycsXHJcblxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0dFVCcsIC8vISEhISEhISEgTk9UIFBPU1RcclxuXHRcdFx0ICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIHdpdGhvdXQgdGhpcyBpdCByZXR1cm5lZCBzdHJpbmcodGhhdCBjYW4gYmUgYWxlcnRlZCksIG5vdyBpdCByZXR1cm5zIG9iamVjdFxyXG5cdFx0XHQgICAgLy9hc3luYzogZmFsc2UsXHJcblx0XHRcdCAgICAvL3Bhc3NpbmcgdGhlIGRhdGFcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgXHJcblx0XHRcdCAgICAgICAgLy9zZXJ2ZXJBZGRyZXNzOm51bWJlclhcclxuXHRcdFx0ICAgICB9LFxyXG4gICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHsgY29uc29sZS5sb2coZGF0YSk7IC8vYWxlcnQoXCJ0aGlzLmhGaW5hbC0xIFwiICsgdGhpcy5oRmluYWwgKTtcclxuXHRcdFx0XHQgICAgIC8vTXkgYWRkLSBjb25zaWRlciB0aGUgY2FzZSB3aGVuIHRoZSBhZGRyZXNzIGlzIE5vdCBmb3VuZCwgMjAxOC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQgICAgICAgICAgICAgICAgIC8vdmFyIHN0YXR1cyA9IGRhdGEuc3RhdHVzIC8vIGpzb24gcmVzdWx0IHJldHVybnMgT0t8fFpFUk9fUkVTVUxUUyAvL0dvb2dsZSBtYXBzIFZhcmlhbnRcclxuXHRcdFx0XHRcdCAgIFxyXG5cdFx0XHQgICAgICAgICB2YXIgc3RhdHVzID0gZGF0YS50eXBlIC8vIGpzb24gcmVzdWx0IHJldHVybnMgT0t8fFpFUk9fUkVTVUxUUyAvL01BUEJPWFxyXG5cdCAgICAgICAgICAgICAgICAgLy9pZihzdGF0dXM9PVwiT0tcIil7IC8vYWxlcnQoXCJPS1wiKTsgLy9Hb29nbGUgbWFwcyBWYXJpYW50XHJcblx0XHRcdFx0ICAgICBpZihzdGF0dXM9PVwiRmVhdHVyZUNvbGxlY3Rpb25cIil7IC8vYWxlcnQoXCJPSyBGZWF0dXJlQ29sbGVjdGlvblwiKTsgICAvL01hcEJveCBWYXJpYW50XHJcblx0XHRcdFx0XHQgICBcclxuXHRcdFx0XHQgICAgICAgICAvL2lmIChkYXRhLmZlYXR1cmVzWzBdLmNlbnRlclsxXT09IG51bGwpIHsgYWxlcnQoXCJPS1wiKTsgLy9pZiB2YXIgZGVmaW5lZFxyXG5cdCAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVgyID0gJzx0cj48dGQ+JyArICAgZGF0YS5mZWF0dXJlc1swXS5jZW50ZXJbMV0gKyAgJzwvdGQ+PHRkPicgKyBkYXRhLmZlYXR1cmVzWzBdLmNlbnRlclswXSArICAgJzwvdGQ+PC90cj4nOyAgICAgLy9NYXBCb3ggVmFyaWFudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLy9hbGVydChcInRoaXMuZGF0YVgyXCIgKyB0aGlzLmRhdGFYMik7XHJcblx0XHRcdFx0ICAgICB9IGVsc2UgeyAvL2FsZXJ0KFwiT0sgTk9UXCIpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVgyID0gJzx0cj48dGQ+IE5vdCBGb3VuZCA8L3RkPjx0ZD48L3RkPjwvdHI+JzsgIC8vYWxlcnQoXCJ0aGlzLmRhdGFYMlwiICsgdGhpcy5kYXRhWDIpO1xyXG5cdCAgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgICAgICAgLy8gRU5EIE15IGFkZC0gY29uc2lkZXIgdGhlIGNhc2Ugd2hlbiB0aGUgYWRkcmVzcyBpcyBOb3QgZm91bmQsIDIwMTgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0ICAgICAgICAgICAgICAgICAvL2FsZXJ0KFwibm4gXCIgKyBzcGxpdF9jb29yZGluYXRlcy5oRmluYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICBzcGxpdF9jb29yZGluYXRlcy5oRmluYWwgPSBzcGxpdF9jb29yZGluYXRlcy5oRmluYWwgKyB0aGlzLmRhdGFYMjsgIC8vYWxlcnQoXCJ0aGlzLmhGaW5hbC0yIFwiICsgdGhpcy5oRmluYWwgKTtcclxuXHRcdFx0XHQgICAgIC8vYWxlcnQoXCJhamF4IFwiICsgdGhpcy5oRmluYWwpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfSwgIC8vZW5kIHN1Y2Nlc3NcclxuXHRcdFx0ICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikgeyAvL2FsZXJ0KGRhdGEpO1xyXG5cdFx0XHRcdCAgICAgICQoXCIjcmVzdWx0RmluYWxcIikuc3RvcCgpLmZhZGVPdXQoXCJzbG93XCIsZnVuY3Rpb24oKXsgJCh0aGlzKS5odG1sKFwiPGg0IHN0eWxlPSdjb2xvcjpyZWQ7cGFkZGluZzozZW07Jz5FUlJPUiEhISA8YnI+Q3Jhc2hlZDwvaDQ+XCIpfSkuZmFkZUluKDIwMDApO1xyXG4gICAgICAgICAgICAgICAgICB9XHRcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIC8vRU5EIEFKQVhlZCAgcGFydCBcclxuXHRcdFx0ICAgLy8tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgICBcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHQgIFxyXG4gICB9LFxyXG4gICAvLyAqKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4gICAvLyAqKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4gICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICBcclxuICAgXHJcbiAgIFxyXG4gICBcclxuICAgXHJcbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXHJcbiAgICB0aGlzLmRpc3BsYXlSZXN1bHRzID0gZnVuY3Rpb24oKXtcclxuXHRcdCQoXCIjbG9hZGluZ1wiKS5mYWRlT3V0KDE5MDApOyAvL2hpZGUgcHJlbG9hZGVyXHJcblx0XHRzcGxpdF9jb29yZGluYXRlcy5oRmluYWwgPSBzcGxpdF9jb29yZGluYXRlcy5oRmluYWwgKyAnPC90YWJsZT48L2JyPjwvYnI+PC9icj48L2JyPjwvYnI+JyA7ICAgLy9hbGVydCAoXCJuZXdIVE1MPSBcIituZXdIVE1MKTtcclxuXHRcdC8vYWxlcnQoXCJnZGdmZGcgRklOQUwgIFwiICsgc3BsaXRfY29vcmRpbmF0ZXMuaEZpbmFsKTtcclxuXHRcdFx0XHRcclxuICAgICAgICAvLyBIVE1MICBSZXN1bHQgZGl2ICB3aXRoICBhbmltYXRpb247XHJcbiAgICAgICAgJChcIiNyZXN1bHRGaW5hbFwiKS5zdG9wKCkuZmFkZU91dChcInNsb3dcIixmdW5jdGlvbigpeyBcclxuICAgICAgICAgICAgJCh0aGlzKS5odG1sKHNwbGl0X2Nvb3JkaW5hdGVzLmhGaW5hbClcclxuICAgICAgICB9KS5mYWRlSW4oMjAwMCk7XHJcblxyXG4gICAgICAgICQoXCIjcmVzdWx0RmluYWxcIikuY3NzKFwiYm9yZGVyXCIsXCIxcHggc29saWQgcmVkXCIpOyAvLyAgc2V0ICByZWQgIGJvcmRlciAgZm9yICByZXN1bHQgIGRpdlxyXG4gICAgICAgIC8vSGlkZUluc3RydWN0aW9ucygpO1xyXG5cdCAgXHJcbiAgIH1cclxuICAgLy8gKiogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcclxuICAgLy8gKiogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcclxuICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzcGxpdF9jb29yZGluYXRlcztcclxuXHJcblxyXG4iXX0=
