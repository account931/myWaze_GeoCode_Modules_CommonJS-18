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
                //splitModule.displayResults();		   
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9nZW9fbWFwYm94X2NvcmUuanMiLCJqcy9qc19tb2R1bGVzL2NsZWFyX2ZpZWxkcy5qcyIsImpzL2pzX21vZHVsZXMvaW5zdHJ1Y3Rpb25aLmpzIiwianMvanNfbW9kdWxlcy9sb2FkX2V4YW1wbGUuanMiLCJqcy9qc19tb2R1bGVzL3NwbGl0X2Nvb3JkaW5hdGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXHJcblxyXG52YXIgaW5zdHJ1Y3RfZmlsZSA9IHJlcXVpcmUoJy4vanNfbW9kdWxlcy9pbnN0cnVjdGlvblouanMnKTtcclxudmFyIGNsZWFyX2ZpbGUgPSByZXF1aXJlKCcuL2pzX21vZHVsZXMvY2xlYXJfZmllbGRzLmpzJyk7XHJcbnZhciBsb2FkRXhhbXBsZV9maWxlID0gcmVxdWlyZSgnLi9qc19tb2R1bGVzL2xvYWRfZXhhbXBsZS5qcycpO1xyXG52YXIgc3BsaXRfZmlsZSA9IHJlcXVpcmUoJy4vanNfbW9kdWxlcy9zcGxpdF9jb29yZGluYXRlcy5qcycpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy9maW5kaW5nIGNvb3JkaW5hdGVzIGJ5IGFkZHJlc3MgKEcgQVBJKS5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgXHJcblxyXG4vL0NsaWNrIFNQTElUICBCdXR0b25cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcclxuICAgICQoXCIjc3BsaXRCdXR0b25cIikuY2xpY2soZnVuY3Rpb24oKXsgICAgICAgIC8vICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgJy5jaXJjbGUnLCBmdW5jdGlvbigpIHsgICAvLyB0aGlzICBjbGljayAgaXMgIHVzZWQgIHRvICAgcmVhY3QgIHRvICBuZXdseSBnZW5lcmF0ZWQgY2ljbGVzO1xyXG4gICAgICAgIFxyXG5cdFx0dmFyIHNwbGl0TW9kdWxlID0gbmV3IHNwbGl0X2ZpbGUoKTtcclxuXHRcdFxyXG5cdFx0Ly9pZiB0ZXh0YXJlYSBpcyBlbXB0eSwgc3RvcCBpdCBhbGxcclxuXHRcdGlmKCFzcGxpdE1vZHVsZS5nZXRGb3JtVmFsdWUoKSl7XHJcblx0XHRcdHJldHVybiBmYWxzZTsgXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vUHJvbWlzZVxyXG5cdFx0JC53aGVuKCBzcGxpdE1vZHVsZS5nZXRBamF4Q29vcmRpbmF0ZXMoKSlcclxuXHRcdCAgIC50aGVuKGZ1bmN0aW9uKCApIHsgICAgXHJcbiAgICAgICAgICAgICAgICAvL3NwbGl0TW9kdWxlLmRpc3BsYXlSZXN1bHRzKCk7XHRcdCAgIFxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChzcGxpdE1vZHVsZS5kaXNwbGF5UmVzdWx0cywgMjAwMCk7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgfSk7IFxyXG5cdFx0XHJcblx0XHJcbiAgICB9KTtcclxuLy9FTkQgQ2xpY2sgU1BMSVQgIEJ1dHRvblxyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHJcblx0XHJcblxyXG4vL0NsaWNrIEluc3RydWN0aW9uICBCdXR0b25cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcclxuICAkKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0ICB2YXIgaW5zdHJNb2R1bGUgPSBuZXcgaW5zdHJ1Y3RfZmlsZSgpO1xyXG5cdCAgaW5zdHJNb2R1bGUuc2V0SW5zdHJ1Y3Rpb24oKTsgIC8vTW9kdWxlXHJcbiAgICAgIC8vaW5zdHJ1Y3Rpb24ubG9hZEluc3RydWN0aW9ucygpO1xyXG4gICAgfSk7XHJcbi8vRU5EIENsaWNrIEluc3RydWN0aW9ucyAgQnV0dG9uXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcclxuXHRcclxuXHRcclxuXHJcbi8vQ2xpY2sgRXhhbXBsZSAgQnV0dG9uXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXHJcbiAgICAkKFwiI2V4YW1wbGVidXR0b25cIikuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdHZhciBsb2FkRXhhbXBsZU1vZHVsZSA9IG5ldyBsb2FkRXhhbXBsZV9maWxlKCk7ICAvL01vZHVsZVxyXG5cdFx0bG9hZEV4YW1wbGVNb2R1bGUubG9hZEV4YW1wbGVDb29yZGluYXRlcygpO1xyXG4gICAgICAgIC8vbG9hZF9leGFtcGxlLmxvYWRFeGFtcGxlQ29vcmRpbmF0ZXMoKTtcclxuICAgIH0pO1xyXG4vL0VORCBDbGljayBFeGFtcGxlICBCdXR0b25cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcclxuXHRcclxuXHJcbi8vQ0xFQVIgIEJ1dHRvblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4gICAgJChcIiNjbGVhckJ1dHRvblwiKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0dmFyIGNsZWFyTW9kdWxlID0gbmV3IGNsZWFyX2ZpbGUoKTtcclxuXHRcdGNsZWFyTW9kdWxlLmNsZWFyRmllbGRzKCk7IC8vTW9kdWxlXHJcbiAgICAgICAgLy9jbGVhcl9maWVsZHMuY2xlYXJGaWVsZHMoKTtcclxuICAgIH0pO1xyXG4vL0VORCBDTEVBUiAgQnV0dG9uXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIEVORCBSRUFEWVxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiZnVuY3Rpb24gY2xlYXJfZmllbGRzc3MoKXtcclxuXHRcclxuICB0aGlzLmNsZWFyRmllbGRzID0gZnVuY3Rpb24oKXtcclxuICAgICAgJChcIiNoaWRkZW5JbnN0cnVjdGlvbnNcIikuaGlkZSgyMDAwKTtcclxuICAgICAgICAgICAgJChcIiNjb29yZHNJbnB1dFwiKS52YWwoJycpO1xyXG4gICAgICAgICAgICAkKFwiI3Jlc3VsdEZpbmFsXCIpLmhpZGUoMTAwMCk7XHJcbiAgICAgICAgICAgIC8vaGlkZSAgaW5zdHIgICYgIGNoYW5nZSAgYnV0dG9uXHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUluc3RydWN0aW9ucyAoKTtcclxuICAgICAgICAgICAgLy9FTkQgIEhpZGUgSW5zdHJ1Y3Rpb25zICBhbmQgIGNoYW5nZSAgYnV0dG9uXHJcbiAgIH0sXHJcbiAgIFxyXG4gICBcclxuICAgIHRoaXMuaGlkZUluc3RydWN0aW9ucyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgIGlmICgkKCcjaGlkZGVuSW5zdHJ1Y3Rpb25zJykuY3NzKCdkaXNwbGF5JykgPT0gJ25vbmUnKSB7IFxyXG5cdCAgICAgICAgIC8vZG8gbm90aGluZ1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjaGlkZGVuSW5zdHJ1Y3Rpb25zXCIpLmhpZGUoMjAwMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS5hdHRyKFwidmFsdWVcIik9PVwiaW5zdHJ1Y3Rpb25zXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLnZhbChcIkNsb3NlXCIpOyQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikuY3NzKFwiYmFja2dyb3VuZFwiLFwicmVkXCIpO1xyXG5cdFx0ICAgICAgICB9IGVsc2UgeyBcclxuXHRcdCAgICAgICAgICAgICQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikudmFsKFwiaW5zdHJ1Y3Rpb25zXCIpOyQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikuY3NzKFwiYmFja2dyb3VuZFwiLCBcImdyZXlcIik7XHJcblx0XHQgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICB9XHJcbiAgIFxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjbGVhcl9maWVsZHNzcztcclxuXHJcblxyXG5cclxuXHJcbi8qXHJcblxyXG5cclxuXHR2YXIgY2xlYXJfZmllbGRzID0ge1xyXG5cdFx0XHJcblx0XHRjbGVhckZpZWxkcyA6IGZ1bmN0aW9uKCkge1xyXG5cdCAgICAgICAgJChcIiNoaWRkZW5JbnN0cnVjdGlvbnNcIikuaGlkZSgyMDAwKTtcclxuICAgICAgICAgICAgJChcIiNjb29yZHNJbnB1dFwiKS52YWwoJycpO1xyXG4gICAgICAgICAgICAkKFwiI3Jlc3VsdEZpbmFsXCIpLmhpZGUoMTAwMCk7XHJcbiAgICAgICAgICAgIC8vaGlkZSAgaW5zdHIgICYgIGNoYW5nZSAgYnV0dG9uXHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUluc3RydWN0aW9ucyAoKTtcclxuICAgICAgICAgICAgLy9FTkQgIEhpZGUgSW5zdHJ1Y3Rpb25zICBhbmQgIGNoYW5nZSAgYnV0dG9uXHJcbiAgICAgICAgfSxcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRcclxuXHRcdGhpZGVJbnN0cnVjdGlvbnM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmICgkKCcjaGlkZGVuSW5zdHJ1Y3Rpb25zJykuY3NzKCdkaXNwbGF5JykgPT0gJ25vbmUnKSB7IFxyXG5cdCAgICAgICAgIC8vZG8gbm90aGluZ1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjaGlkZGVuSW5zdHJ1Y3Rpb25zXCIpLmhpZGUoMjAwMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS5hdHRyKFwidmFsdWVcIik9PVwiaW5zdHJ1Y3Rpb25zXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLnZhbChcIkNsb3NlXCIpOyQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikuY3NzKFwiYmFja2dyb3VuZFwiLFwicmVkXCIpO1xyXG5cdFx0ICAgICAgICB9IGVsc2UgeyBcclxuXHRcdCAgICAgICAgICAgICQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikudmFsKFwiaW5zdHJ1Y3Rpb25zXCIpOyQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikuY3NzKFwiYmFja2dyb3VuZFwiLCBcImdyZXlcIik7XHJcblx0XHQgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblx0XHRcclxuXHR9XHJcblx0XHJcblx0XHJcblx0Ki8iLCIvLyAgT0JKRUNUOiBsb2FkIGluc3RydWN0aW9ucywgZXhhbXBsZXMsIGNsZWFyIGZpZWxkcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG4vL3ZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbi8vdmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XHJcblxyXG5mdW5jdGlvbiBpbnN0cnVjdGlvblgoKXtcclxuXHRcclxuICB0aGlzLnNldEluc3RydWN0aW9uID0gZnVuY3Rpb24oKXtcclxuICAgICAgJChcIiNoaWRkZW5JbnN0cnVjdGlvbnNcIikudG9nZ2xlKDEwMDApO1xyXG4gICAgICAgaWYgKCQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikuYXR0cihcInZhbHVlXCIpPT1cImluc3RydWN0aW9uc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLnZhbChcIiBfQ2xvc2VfIFwiKTtcclxuXHRcdFx0XHQkKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLmNzcyhcImJhY2tncm91bmRcIixcInJlZFwiKTtcclxuICAgICAgICB9IGVsc2UgeyBcclxuXHRcdCAgICAgICAgJChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS52YWwoXCJpbnN0cnVjdGlvbnNcIik7XHJcblx0XHRcdFx0Ly8kKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLmNzcyhcImJhY2tncm91bmRcIixcImdyZXlcIik7XHJcblx0ICAgIH1cdFxyXG4gICB9XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc3RydWN0aW9uWDtcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHQvKlxyXG5cdFxyXG5cdHZhciBpbnN0cnVjdGlvbiA9IHtcclxuXHRcdGxvYWRJbnN0cnVjdGlvbnMgOiBmdW5jdGlvbigpIHtcclxuXHQgICAgICAgICQoXCIjaGlkZGVuSW5zdHJ1Y3Rpb25zXCIpLnRvZ2dsZSgxMDAwKTtcclxuICAgICAgICAgICAgaWYgKCQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikuYXR0cihcInZhbHVlXCIpPT1cImluc3RydWN0aW9uc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLnZhbChcIkNsb3NlXCIpO1xyXG5cdFx0XHRcdCQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikuY3NzKFwiYmFja2dyb3VuZFwiLFwicmVkXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgeyBcclxuXHRcdCAgICAgICAgJChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS52YWwoXCJpbnN0cnVjdGlvbnNcIik7XHJcblx0XHRcdFx0JChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS5jc3MoXCJiYWNrZ3JvdW5kXCIsXCJncmV5XCIpO1xyXG5cdCAgICAgICAgfVx0XHJcbiAgICAgICAgfSxcclxuXHR9XHJcblx0Ki8iLCJmdW5jdGlvbiBsb2FkX2V4YW1wbGUoKXtcclxuXHRcclxuICB0aGlzLmNvb3JkaW5hdGVzU2V0ID1cdFwiMjI4MDIgV0VTVEVSTiBBViwgVE9SUkFOQ0UsIDkwNTAxXFxuMTYwMSBLaW5nc2RhbGUgQXZlLCBSZWRvbmRvIEJlYWNoLCBDQSA5MDI3XFxuMzUyNSBXIENhcnNvbiBTdCwgVG9ycmFuY2UsIENBIDkwNTAzXFxuMjA0MDEgVmljdG9yIFN0LCBUb3JyYW5jZSwgQ0EgOTA1MDNcXG4yMDE1IFcgUmVkb25kbyBCZWFjaCBCbHZkIEMsIEdhcmRlbmEsIENBIDkwMjQ3XCIsXHJcblxyXG5cdFxyXG4gIHRoaXMubG9hZEV4YW1wbGVDb29yZGluYXRlcyA9IGZ1bmN0aW9uKCl7XHJcblx0ICAkKFwiI2Nvb3Jkc0lucHV0XCIpLnZhbCh0aGlzLmNvb3JkaW5hdGVzU2V0KTsgLy8gIHdhcyBcXG4gIGluIHRoZSAgZW5kIFxyXG4gICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbG9hZF9leGFtcGxlO1xyXG5cclxuXHJcblxyXG5cclxuIiwiZnVuY3Rpb24gc3BsaXRfY29vcmRpbmF0ZXMoKXtcclxuXHRcclxuICB0aGlzLmQgPSBcIlwiLFxyXG4gIHRoaXMuYXJyYXlYMiA9IFwiXCIsXHJcbiAgdGhpcy5kYXRhWCA9IFwiXCIsXHJcbiAgdGhpcy5oRmluYWwgPSBcIlwiLFxyXG5cdFxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4gIHRoaXMuZ2V0Rm9ybVZhbHVlID0gZnVuY3Rpb24oKXtcclxuXHQgICBpZiAoJChcIiNjb29yZHNJbnB1dFwiKS52YWwoKS50cmltKCk9PVwiXCIpe1xyXG5cdCAgICAgYWxlcnQoXCJFbXB0eVwiKTtcclxuICAgICAgICAgcmV0dXJuIGZhbHNlO1x0XHQgXHJcblx0ICAgfVxyXG5cdCAgIHRleHRhcmVhWCA9ICQoXCIjY29vcmRzSW5wdXRcIikudmFsKCk7IC8vYWxlcnQodGV4dGFyZWEpO1xyXG4gICAgICAgdGV4dGFyZWFYID0gdGV4dGFyZWFYLnRyaW0oKTtcclxuICAgICAgIHRoaXMuYXJyYXlYMiA9IHRleHRhcmVhWC5zcGxpdCgnXFxuJyk7Lyouam9pbignLCcpLnNwbGl0KCcsJyk7ICovXHJcblx0ICAgLy9hbGVydCh0aGlzLmFycmF5WDIpO1xyXG5cdFx0XHRcclxuXHQgICB0aGlzLmQgPSB0aGlzLmFycmF5WDIubGVuZ3RoOyAvL2FsZXJ0KCdhZGRyZXNzIGFycmF5IGNvbnRhaW5zIC0+ICcgKyB0aGlzLmQpO1xyXG5cdCAgIHNwbGl0X2Nvb3JkaW5hdGVzLmhGaW5hbD0nPGJyPjxwIHN0eWxlPVwiY29sb3I6cmVkO1wiPlJFU1VMVFMgPT4gZm91bmQgJysgdGhpcy5kICsgICc8L2JyPiA8L2JyPjxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJDb3B5XCIgaWQ9XCJjb3B5YnV0dG9uXCI+PHNwYW4gaWQ9XCJmbGFzaE1lc3NhZ2VcIj48L3NwYW4+IDwvYnI+PC9icj48dGFibGUgaWQ9XCJ0YWJsZVJlc3VsdHNcIj4nO1xyXG4gICAgICAgcmV0dXJuIHRydWU7XHJcbiAgIH0sXHJcbiAgIC8vICoqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXHJcbiAgIC8vICoqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXHJcbiAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgIFxyXG4gICBcclxuICAgXHJcbiAgIFxyXG5cdFxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4gIHRoaXMuZ2V0QWpheENvb3JkaW5hdGVzID0gZnVuY3Rpb24oKXtcclxuXHQgICQoXCIjbG9hZGluZ1wiKS5mYWRlSW4oMjAwKTsgLy9zaG93IHByZWxvYWRlclxyXG4gICAgICAvL2FsZXJ0KFwidGhpcyBcIiArIHRoaXMuYXJyYXlYMik7XHJcblx0ICAvL05ldy1Bc3luYyBXT1JLU1NTU1MqKioqKioqKioqKioqKlx0XHJcbiAgICAgICBmb3IgKGogPSAwOyBqIDwgdGhpcy5kOyBqKyspIHsgIFxyXG4gICAgICAgICAgIC8vYWxlcnQodGhpcy5hcnJheVgyW2pdKTsgIFxyXG5cdFx0XHR2YXIgbnVtYmVyWCA9IHRoaXMuYXJyYXlYMltqXTtcclxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHQvLyBzZW5kICBkYXRhICB0byAgUEhQIGhhbmRsZXIgICoqKioqKioqKioqKiBcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIC8vdXJsOiAgJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/YWRkcmVzcz0nICsgdGhpcy5hcnJheVgyW2pdICsgJyZrZXk9QUl6YVN5QU5TZDVJTVlUQ2NNeDZIYXA0NEZYZDZfekRvMWRrbGg4JyxcclxuXHRcdFx0XHQvL3VybDogICdhamF4X3BocF9zY3JpcHQvYWpheF9hcGlfc2NyaXB0LnBocCcsICAvL3JlcXVlc3RpbmcgaW5uZXIgcGhwIHdoaWNoIHNlbmRzIGFqYXggdG8gTWFwQiBBUElcclxuXHRcdFx0ICAgIHVybDogJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20vZ2VvY29kaW5nL3Y1L21hcGJveC5wbGFjZXMvJyArIG51bWJlclggKyAnLmpzb24/Y291bnRyeT11cyZhY2Nlc3NfdG9rZW49cGsuZXlKMUlqb2lZV05qYjNWdWREa3pNU0lzSW1FaU9pSmphWGd3T1RWdU9URXdNR0Z4TW5Wc2N6UndPV3gwY3pobkluMC5Zalo1YnBuaDZqcVRFazdjQ0pmcnp3JyxcclxuXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnR0VUJywgLy8hISEhISEhISBOT1QgUE9TVFxyXG5cdFx0XHQgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gd2l0aG91dCB0aGlzIGl0IHJldHVybmVkIHN0cmluZyh0aGF0IGNhbiBiZSBhbGVydGVkKSwgbm93IGl0IHJldHVybnMgb2JqZWN0XHJcblx0XHRcdCAgICAvL2FzeW5jOiBmYWxzZSxcclxuXHRcdFx0ICAgIC8vcGFzc2luZyB0aGUgZGF0YVxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBcclxuXHRcdFx0ICAgICAgICAvL3NlcnZlckFkZHJlc3M6bnVtYmVyWFxyXG5cdFx0XHQgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkgeyBjb25zb2xlLmxvZyhkYXRhKTsgLy9hbGVydChcInRoaXMuaEZpbmFsLTEgXCIgKyB0aGlzLmhGaW5hbCApO1xyXG5cdFx0XHRcdCAgICAgLy9NeSBhZGQtIGNvbnNpZGVyIHRoZSBjYXNlIHdoZW4gdGhlIGFkZHJlc3MgaXMgTm90IGZvdW5kLCAyMDE4LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdCAgICAgICAgICAgICAgICAgLy92YXIgc3RhdHVzID0gZGF0YS5zdGF0dXMgLy8ganNvbiByZXN1bHQgcmV0dXJucyBPS3x8WkVST19SRVNVTFRTIC8vR29vZ2xlIG1hcHMgVmFyaWFudFxyXG5cdFx0XHRcdFx0ICAgXHJcblx0XHRcdCAgICAgICAgIHZhciBzdGF0dXMgPSBkYXRhLnR5cGUgLy8ganNvbiByZXN1bHQgcmV0dXJucyBPS3x8WkVST19SRVNVTFRTIC8vTUFQQk9YXHJcblx0ICAgICAgICAgICAgICAgICAvL2lmKHN0YXR1cz09XCJPS1wiKXsgLy9hbGVydChcIk9LXCIpOyAvL0dvb2dsZSBtYXBzIFZhcmlhbnRcclxuXHRcdFx0XHQgICAgIGlmKHN0YXR1cz09XCJGZWF0dXJlQ29sbGVjdGlvblwiKXsgLy9hbGVydChcIk9LIEZlYXR1cmVDb2xsZWN0aW9uXCIpOyAgIC8vTWFwQm94IFZhcmlhbnRcclxuXHRcdFx0XHRcdCAgIFxyXG5cdFx0XHRcdCAgICAgICAgIC8vaWYgKGRhdGEuZmVhdHVyZXNbMF0uY2VudGVyWzFdPT0gbnVsbCkgeyBhbGVydChcIk9LXCIpOyAvL2lmIHZhciBkZWZpbmVkXHJcblx0ICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhWDIgPSAnPHRyPjx0ZD4nICsgICBkYXRhLmZlYXR1cmVzWzBdLmNlbnRlclsxXSArICAnPC90ZD48dGQ+JyArIGRhdGEuZmVhdHVyZXNbMF0uY2VudGVyWzBdICsgICAnPC90ZD48L3RyPic7ICAgICAvL01hcEJveCBWYXJpYW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvL2FsZXJ0KFwidGhpcy5kYXRhWDJcIiArIHRoaXMuZGF0YVgyKTtcclxuXHRcdFx0XHQgICAgIH0gZWxzZSB7IC8vYWxlcnQoXCJPSyBOT1RcIik7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhWDIgPSAnPHRyPjx0ZD4gTm90IEZvdW5kIDwvdGQ+PHRkPjwvdGQ+PC90cj4nOyAgLy9hbGVydChcInRoaXMuZGF0YVgyXCIgKyB0aGlzLmRhdGFYMik7XHJcblx0ICAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgICAvLyBFTkQgTXkgYWRkLSBjb25zaWRlciB0aGUgY2FzZSB3aGVuIHRoZSBhZGRyZXNzIGlzIE5vdCBmb3VuZCwgMjAxOC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQgICAgICAgICAgICAgICAgIC8vYWxlcnQoXCJubiBcIiArIHNwbGl0X2Nvb3JkaW5hdGVzLmhGaW5hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNwbGl0X2Nvb3JkaW5hdGVzLmhGaW5hbCA9IHNwbGl0X2Nvb3JkaW5hdGVzLmhGaW5hbCArIHRoaXMuZGF0YVgyOyAgLy9hbGVydChcInRoaXMuaEZpbmFsLTIgXCIgKyB0aGlzLmhGaW5hbCApO1xyXG5cdFx0XHRcdCAgICAgLy9hbGVydChcImFqYXggXCIgKyB0aGlzLmhGaW5hbCk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9LCAgLy9lbmQgc3VjY2Vzc1xyXG5cdFx0XHQgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7IC8vYWxlcnQoZGF0YSk7XHJcblx0XHRcdFx0ICAgICAgJChcIiNyZXN1bHRGaW5hbFwiKS5zdG9wKCkuZmFkZU91dChcInNsb3dcIixmdW5jdGlvbigpeyAkKHRoaXMpLmh0bWwoXCI8aDQgc3R5bGU9J2NvbG9yOnJlZDtwYWRkaW5nOjNlbTsnPkVSUk9SISEhIDxicj5DcmFzaGVkPC9oND5cIil9KS5mYWRlSW4oMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cdFxyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgLy9FTkQgQUpBWGVkICBwYXJ0IFxyXG5cdFx0XHQgICAvLy0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAgIFxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdCAgXHJcbiAgIH0sXHJcbiAgIC8vICoqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXHJcbiAgIC8vICoqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXHJcbiAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgIFxyXG4gICBcclxuICAgXHJcbiAgIFxyXG4gICBcclxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcclxuICAgIHRoaXMuZGlzcGxheVJlc3VsdHMgPSBmdW5jdGlvbigpe1xyXG5cdFx0JChcIiNsb2FkaW5nXCIpLmZhZGVPdXQoMTkwMCk7IC8vaGlkZSBwcmVsb2FkZXJcclxuXHRcdHNwbGl0X2Nvb3JkaW5hdGVzLmhGaW5hbCA9IHNwbGl0X2Nvb3JkaW5hdGVzLmhGaW5hbCArICc8L3RhYmxlPjwvYnI+PC9icj48L2JyPjwvYnI+PC9icj4nIDsgICAvL2FsZXJ0IChcIm5ld0hUTUw9IFwiK25ld0hUTUwpO1xyXG5cdFx0Ly9hbGVydChcImdkZ2ZkZyBGSU5BTCAgXCIgKyBzcGxpdF9jb29yZGluYXRlcy5oRmluYWwpO1xyXG5cdFx0XHRcdFxyXG4gICAgICAgIC8vIEhUTUwgIFJlc3VsdCBkaXYgIHdpdGggIGFuaW1hdGlvbjtcclxuICAgICAgICAkKFwiI3Jlc3VsdEZpbmFsXCIpLnN0b3AoKS5mYWRlT3V0KFwic2xvd1wiLGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgICAgICAkKHRoaXMpLmh0bWwoc3BsaXRfY29vcmRpbmF0ZXMuaEZpbmFsKVxyXG4gICAgICAgIH0pLmZhZGVJbigyMDAwKTtcclxuXHJcbiAgICAgICAgJChcIiNyZXN1bHRGaW5hbFwiKS5jc3MoXCJib3JkZXJcIixcIjFweCBzb2xpZCByZWRcIik7IC8vICBzZXQgIHJlZCAgYm9yZGVyICBmb3IgIHJlc3VsdCAgZGl2XHJcbiAgICAgICAgLy9IaWRlSW5zdHJ1Y3Rpb25zKCk7XHJcblx0ICBcclxuICAgfVxyXG4gICAvLyAqKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4gICAvLyAqKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4gICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNwbGl0X2Nvb3JkaW5hdGVzO1xyXG5cclxuXHJcbiJdfQ==
