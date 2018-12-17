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
		
		splitModule.getFormValue();
		
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9nZW9fbWFwYm94X2NvcmUuanMiLCJqcy9qc19tb2R1bGVzL2NsZWFyX2ZpZWxkcy5qcyIsImpzL2pzX21vZHVsZXMvaW5zdHJ1Y3Rpb25aLmpzIiwianMvanNfbW9kdWxlcy9sb2FkX2V4YW1wbGUuanMiLCJqcy9qc19tb2R1bGVzL3NwbGl0X2Nvb3JkaW5hdGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxyXG5cclxudmFyIGluc3RydWN0X2ZpbGUgPSByZXF1aXJlKCcuL2pzX21vZHVsZXMvaW5zdHJ1Y3Rpb25aLmpzJyk7XHJcbnZhciBjbGVhcl9maWxlID0gcmVxdWlyZSgnLi9qc19tb2R1bGVzL2NsZWFyX2ZpZWxkcy5qcycpO1xyXG52YXIgbG9hZEV4YW1wbGVfZmlsZSA9IHJlcXVpcmUoJy4vanNfbW9kdWxlcy9sb2FkX2V4YW1wbGUuanMnKTtcclxudmFyIHNwbGl0X2ZpbGUgPSByZXF1aXJlKCcuL2pzX21vZHVsZXMvc3BsaXRfY29vcmRpbmF0ZXMuanMnKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vZmluZGluZyBjb29yZGluYXRlcyBieSBhZGRyZXNzIChHIEFQSSkuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICAgIFxyXG5cclxuLy9DbGljayBTUExJVCAgQnV0dG9uXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXHJcbiAgICAkKFwiI3NwbGl0QnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uKCl7ICAgICAgICAvLyAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsICcuY2lyY2xlJywgZnVuY3Rpb24oKSB7ICAgLy8gdGhpcyAgY2xpY2sgIGlzICB1c2VkICB0byAgIHJlYWN0ICB0byAgbmV3bHkgZ2VuZXJhdGVkIGNpY2xlcztcclxuICAgICAgICBcclxuXHRcdHZhciBzcGxpdE1vZHVsZSA9IG5ldyBzcGxpdF9maWxlKCk7XHJcblx0XHRcclxuXHRcdHNwbGl0TW9kdWxlLmdldEZvcm1WYWx1ZSgpO1xyXG5cdFx0XHJcblx0XHQvL1Byb21pc2VcclxuXHRcdCQud2hlbiggc3BsaXRNb2R1bGUuZ2V0QWpheENvb3JkaW5hdGVzKCkpXHJcblx0XHQgICAudGhlbihmdW5jdGlvbiggKSB7ICAgIFxyXG4gICAgICAgICAgICAgICAgc3BsaXRNb2R1bGUuZGlzcGxheVJlc3VsdHMoKTtcdFx0ICAgXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHNwbGl0TW9kdWxlLmRpc3BsYXlSZXN1bHRzLCAyMDAwKTsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICB9KTsgXHJcblx0XHRcclxuXHRcclxuICAgIH0pO1xyXG4vL0VORCBDbGljayBTUExJVCAgQnV0dG9uXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcclxuXHRcclxuXHJcbi8vQ2xpY2sgSW5zdHJ1Y3Rpb24gIEJ1dHRvblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4gICQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikuY2xpY2soZnVuY3Rpb24oKXtcclxuXHQgIHZhciBpbnN0ck1vZHVsZSA9IG5ldyBpbnN0cnVjdF9maWxlKCk7XHJcblx0ICBpbnN0ck1vZHVsZS5zZXRJbnN0cnVjdGlvbigpOyAgLy9Nb2R1bGVcclxuICAgICAgLy9pbnN0cnVjdGlvbi5sb2FkSW5zdHJ1Y3Rpb25zKCk7XHJcbiAgICB9KTtcclxuLy9FTkQgQ2xpY2sgSW5zdHJ1Y3Rpb25zICBCdXR0b25cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cclxuLy9DbGljayBFeGFtcGxlICBCdXR0b25cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcclxuICAgICQoXCIjZXhhbXBsZWJ1dHRvblwiKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0dmFyIGxvYWRFeGFtcGxlTW9kdWxlID0gbmV3IGxvYWRFeGFtcGxlX2ZpbGUoKTsgIC8vTW9kdWxlXHJcblx0XHRsb2FkRXhhbXBsZU1vZHVsZS5sb2FkRXhhbXBsZUNvb3JkaW5hdGVzKCk7XHJcbiAgICAgICAgLy9sb2FkX2V4YW1wbGUubG9hZEV4YW1wbGVDb29yZGluYXRlcygpO1xyXG4gICAgfSk7XHJcbi8vRU5EIENsaWNrIEV4YW1wbGUgIEJ1dHRvblxyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFxyXG5cdFxyXG5cclxuLy9DTEVBUiAgQnV0dG9uXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXHJcbiAgICAkKFwiI2NsZWFyQnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgY2xlYXJNb2R1bGUgPSBuZXcgY2xlYXJfZmlsZSgpO1xyXG5cdFx0Y2xlYXJNb2R1bGUuY2xlYXJGaWVsZHMoKTsgLy9Nb2R1bGVcclxuICAgICAgICAvL2NsZWFyX2ZpZWxkcy5jbGVhckZpZWxkcygpO1xyXG4gICAgfSk7XHJcbi8vRU5EIENMRUFSICBCdXR0b25cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gRU5EIFJFQURZXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJmdW5jdGlvbiBjbGVhcl9maWVsZHNzcygpe1xyXG5cdFxyXG4gIHRoaXMuY2xlYXJGaWVsZHMgPSBmdW5jdGlvbigpe1xyXG4gICAgICAkKFwiI2hpZGRlbkluc3RydWN0aW9uc1wiKS5oaWRlKDIwMDApO1xyXG4gICAgICAgICAgICAkKFwiI2Nvb3Jkc0lucHV0XCIpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICQoXCIjcmVzdWx0RmluYWxcIikuaGlkZSgxMDAwKTtcclxuICAgICAgICAgICAgLy9oaWRlICBpbnN0ciAgJiAgY2hhbmdlICBidXR0b25cclxuICAgICAgICAgICAgdGhpcy5oaWRlSW5zdHJ1Y3Rpb25zICgpO1xyXG4gICAgICAgICAgICAvL0VORCAgSGlkZSBJbnN0cnVjdGlvbnMgIGFuZCAgY2hhbmdlICBidXR0b25cclxuICAgfSxcclxuICAgXHJcbiAgIFxyXG4gICAgdGhpcy5oaWRlSW5zdHJ1Y3Rpb25zID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgaWYgKCQoJyNoaWRkZW5JbnN0cnVjdGlvbnMnKS5jc3MoJ2Rpc3BsYXknKSA9PSAnbm9uZScpIHsgXHJcblx0ICAgICAgICAgLy9kbyBub3RoaW5nXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNoaWRkZW5JbnN0cnVjdGlvbnNcIikuaGlkZSgyMDAwKTtcclxuICAgICAgICAgICAgICAgIGlmICgkKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLmF0dHIoXCJ2YWx1ZVwiKT09XCJpbnN0cnVjdGlvbnNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikudmFsKFwiQ2xvc2VcIik7JChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS5jc3MoXCJiYWNrZ3JvdW5kXCIsXCJyZWRcIik7XHJcblx0XHQgICAgICAgIH0gZWxzZSB7IFxyXG5cdFx0ICAgICAgICAgICAgJChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS52YWwoXCJpbnN0cnVjdGlvbnNcIik7JChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS5jc3MoXCJiYWNrZ3JvdW5kXCIsIFwiZ3JleVwiKTtcclxuXHRcdCAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgIH1cclxuICAgXHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNsZWFyX2ZpZWxkc3NzO1xyXG5cclxuXHJcblxyXG5cclxuLypcclxuXHJcblxyXG5cdHZhciBjbGVhcl9maWVsZHMgPSB7XHJcblx0XHRcclxuXHRcdGNsZWFyRmllbGRzIDogZnVuY3Rpb24oKSB7XHJcblx0ICAgICAgICAkKFwiI2hpZGRlbkluc3RydWN0aW9uc1wiKS5oaWRlKDIwMDApO1xyXG4gICAgICAgICAgICAkKFwiI2Nvb3Jkc0lucHV0XCIpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICQoXCIjcmVzdWx0RmluYWxcIikuaGlkZSgxMDAwKTtcclxuICAgICAgICAgICAgLy9oaWRlICBpbnN0ciAgJiAgY2hhbmdlICBidXR0b25cclxuICAgICAgICAgICAgdGhpcy5oaWRlSW5zdHJ1Y3Rpb25zICgpO1xyXG4gICAgICAgICAgICAvL0VORCAgSGlkZSBJbnN0cnVjdGlvbnMgIGFuZCAgY2hhbmdlICBidXR0b25cclxuICAgICAgICB9LFxyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0aGlkZUluc3RydWN0aW9uczogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYgKCQoJyNoaWRkZW5JbnN0cnVjdGlvbnMnKS5jc3MoJ2Rpc3BsYXknKSA9PSAnbm9uZScpIHsgXHJcblx0ICAgICAgICAgLy9kbyBub3RoaW5nXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNoaWRkZW5JbnN0cnVjdGlvbnNcIikuaGlkZSgyMDAwKTtcclxuICAgICAgICAgICAgICAgIGlmICgkKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLmF0dHIoXCJ2YWx1ZVwiKT09XCJpbnN0cnVjdGlvbnNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikudmFsKFwiQ2xvc2VcIik7JChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS5jc3MoXCJiYWNrZ3JvdW5kXCIsXCJyZWRcIik7XHJcblx0XHQgICAgICAgIH0gZWxzZSB7IFxyXG5cdFx0ICAgICAgICAgICAgJChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS52YWwoXCJpbnN0cnVjdGlvbnNcIik7JChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS5jc3MoXCJiYWNrZ3JvdW5kXCIsIFwiZ3JleVwiKTtcclxuXHRcdCAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHRcclxuXHQqLyIsIi8vICBPQkpFQ1Q6IGxvYWQgaW5zdHJ1Y3Rpb25zLCBleGFtcGxlcywgY2xlYXIgZmllbGRzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcbi8vdmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuLy92YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcclxuXHJcbmZ1bmN0aW9uIGluc3RydWN0aW9uWCgpe1xyXG5cdFxyXG4gIHRoaXMuc2V0SW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbigpe1xyXG4gICAgICAkKFwiI2hpZGRlbkluc3RydWN0aW9uc1wiKS50b2dnbGUoMTAwMCk7XHJcbiAgICAgICBpZiAoJChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS5hdHRyKFwidmFsdWVcIik9PVwiaW5zdHJ1Y3Rpb25zXCIpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikudmFsKFwiIF9DbG9zZV8gXCIpO1xyXG5cdFx0XHRcdCQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikuY3NzKFwiYmFja2dyb3VuZFwiLFwicmVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7IFxyXG5cdFx0ICAgICAgICAkKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLnZhbChcImluc3RydWN0aW9uc1wiKTtcclxuXHRcdFx0XHQvLyQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikuY3NzKFwiYmFja2dyb3VuZFwiLFwiZ3JleVwiKTtcclxuXHQgICAgfVx0XHJcbiAgIH1cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaW5zdHJ1Y3Rpb25YO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8qXHJcblx0XHJcblx0dmFyIGluc3RydWN0aW9uID0ge1xyXG5cdFx0bG9hZEluc3RydWN0aW9ucyA6IGZ1bmN0aW9uKCkge1xyXG5cdCAgICAgICAgJChcIiNoaWRkZW5JbnN0cnVjdGlvbnNcIikudG9nZ2xlKDEwMDApO1xyXG4gICAgICAgICAgICBpZiAoJChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS5hdHRyKFwidmFsdWVcIik9PVwiaW5zdHJ1Y3Rpb25zXCIpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjaW5zdHJ1Y3Rpb25CdXR0b25cIikudmFsKFwiQ2xvc2VcIik7XHJcblx0XHRcdFx0JChcIiNpbnN0cnVjdGlvbkJ1dHRvblwiKS5jc3MoXCJiYWNrZ3JvdW5kXCIsXCJyZWRcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7IFxyXG5cdFx0ICAgICAgICAkKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLnZhbChcImluc3RydWN0aW9uc1wiKTtcclxuXHRcdFx0XHQkKFwiI2luc3RydWN0aW9uQnV0dG9uXCIpLmNzcyhcImJhY2tncm91bmRcIixcImdyZXlcIik7XHJcblx0ICAgICAgICB9XHRcclxuICAgICAgICB9LFxyXG5cdH1cclxuXHQqLyIsImZ1bmN0aW9uIGxvYWRfZXhhbXBsZSgpe1xyXG5cdFxyXG4gIHRoaXMuY29vcmRpbmF0ZXNTZXQgPVx0XCIyMjgwMiBXRVNURVJOIEFWLCBUT1JSQU5DRSwgOTA1MDFcXG4xNjAxIEtpbmdzZGFsZSBBdmUsIFJlZG9uZG8gQmVhY2gsIENBIDkwMjdcXG4zNTI1IFcgQ2Fyc29uIFN0LCBUb3JyYW5jZSwgQ0EgOTA1MDNcXG4yMDQwMSBWaWN0b3IgU3QsIFRvcnJhbmNlLCBDQSA5MDUwM1xcbjIwMTUgVyBSZWRvbmRvIEJlYWNoIEJsdmQgQywgR2FyZGVuYSwgQ0EgOTAyNDdcIixcclxuXHJcblx0XHJcbiAgdGhpcy5sb2FkRXhhbXBsZUNvb3JkaW5hdGVzID0gZnVuY3Rpb24oKXtcclxuXHQgICQoXCIjY29vcmRzSW5wdXRcIikudmFsKHRoaXMuY29vcmRpbmF0ZXNTZXQpOyAvLyAgd2FzIFxcbiAgaW4gdGhlICBlbmQgXHJcbiAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBsb2FkX2V4YW1wbGU7XHJcblxyXG5cclxuXHJcblxyXG4iLCJmdW5jdGlvbiBzcGxpdF9jb29yZGluYXRlcygpe1xyXG5cdFxyXG4gIHRoaXMuZCA9IFwiXCIsXHJcbiAgdGhpcy5hcnJheVgyID0gXCJcIixcclxuICB0aGlzLmRhdGFYID0gXCJcIixcclxuICB0aGlzLmhGaW5hbCA9IFwiXCIsXHJcblx0XHJcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXHJcbiAgdGhpcy5nZXRGb3JtVmFsdWUgPSBmdW5jdGlvbigpe1xyXG5cdCAgIGlmICgkKFwiI2Nvb3Jkc0lucHV0XCIpLnZhbCgpLnRyaW0oKT09XCJcIil7XHJcblx0ICAgICBhbGVydChcIkVtcHR5XCIpO1xyXG4gICAgICAgICByZXR1cm4gZmFsc2U7XHRcdCBcclxuXHQgICB9XHJcblx0ICAgdGV4dGFyZWFYID0gJChcIiNjb29yZHNJbnB1dFwiKS52YWwoKTsgLy9hbGVydCh0ZXh0YXJlYSk7XHJcbiAgICAgICB0ZXh0YXJlYVggPSB0ZXh0YXJlYVgudHJpbSgpO1xyXG4gICAgICAgdGhpcy5hcnJheVgyID0gdGV4dGFyZWFYLnNwbGl0KCdcXG4nKTsvKi5qb2luKCcsJykuc3BsaXQoJywnKTsgKi9cclxuXHQgICAvL2FsZXJ0KHRoaXMuYXJyYXlYMik7XHJcblx0XHRcdFxyXG5cdCAgIHRoaXMuZCA9IHRoaXMuYXJyYXlYMi5sZW5ndGg7IC8vYWxlcnQoJ2FkZHJlc3MgYXJyYXkgY29udGFpbnMgLT4gJyArIHRoaXMuZCk7XHJcblx0ICAgc3BsaXRfY29vcmRpbmF0ZXMuaEZpbmFsPSc8YnI+PHAgc3R5bGU9XCJjb2xvcjpyZWQ7XCI+UkVTVUxUUyA9PiBmb3VuZCAnKyB0aGlzLmQgKyAgJzwvYnI+IDwvYnI+PGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkNvcHlcIiBpZD1cImNvcHlidXR0b25cIj48c3BhbiBpZD1cImZsYXNoTWVzc2FnZVwiPjwvc3Bhbj4gPC9icj48L2JyPjx0YWJsZSBpZD1cInRhYmxlUmVzdWx0c1wiPic7XHJcbiAgIH0sXHJcbiAgIC8vICoqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXHJcbiAgIC8vICoqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXHJcbiAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgIFxyXG4gICBcclxuICAgXHJcbiAgIFxyXG5cdFxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4gIHRoaXMuZ2V0QWpheENvb3JkaW5hdGVzID0gZnVuY3Rpb24oKXtcclxuXHQgICQoXCIjbG9hZGluZ1wiKS5mYWRlSW4oMjAwKTsgLy9zaG93IHByZWxvYWRlclxyXG4gICAgICAvL2FsZXJ0KFwidGhpcyBcIiArIHRoaXMuYXJyYXlYMik7XHJcblx0ICAvL05ldy1Bc3luYyBXT1JLU1NTU1MqKioqKioqKioqKioqKlx0XHJcbiAgICAgICBmb3IgKGogPSAwOyBqIDwgdGhpcy5kOyBqKyspIHsgIFxyXG4gICAgICAgICAgIC8vYWxlcnQodGhpcy5hcnJheVgyW2pdKTsgIFxyXG5cdFx0XHR2YXIgbnVtYmVyWCA9IHRoaXMuYXJyYXlYMltqXTtcclxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHQvLyBzZW5kICBkYXRhICB0byAgUEhQIGhhbmRsZXIgICoqKioqKioqKioqKiBcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIC8vdXJsOiAgJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/YWRkcmVzcz0nICsgdGhpcy5hcnJheVgyW2pdICsgJyZrZXk9QUl6YVN5QU5TZDVJTVlUQ2NNeDZIYXA0NEZYZDZfekRvMWRrbGg4JyxcclxuXHRcdFx0XHQvL3VybDogICdhamF4X3BocF9zY3JpcHQvYWpheF9hcGlfc2NyaXB0LnBocCcsICAvL3JlcXVlc3RpbmcgaW5uZXIgcGhwIHdoaWNoIHNlbmRzIGFqYXggdG8gTWFwQiBBUElcclxuXHRcdFx0ICAgIHVybDogJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20vZ2VvY29kaW5nL3Y1L21hcGJveC5wbGFjZXMvJyArIG51bWJlclggKyAnLmpzb24/Y291bnRyeT11cyZhY2Nlc3NfdG9rZW49cGsuZXlKMUlqb2lZV05qYjNWdWREa3pNU0lzSW1FaU9pSmphWGd3T1RWdU9URXdNR0Z4TW5Wc2N6UndPV3gwY3pobkluMC5Zalo1YnBuaDZqcVRFazdjQ0pmcnp3JyxcclxuXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnR0VUJywgLy8hISEhISEhISBOT1QgUE9TVFxyXG5cdFx0XHQgICAgZGF0YVR5cGU6ICdqc29uJywgLy8gd2l0aG91dCB0aGlzIGl0IHJldHVybmVkIHN0cmluZyh0aGF0IGNhbiBiZSBhbGVydGVkKSwgbm93IGl0IHJldHVybnMgb2JqZWN0XHJcblx0XHRcdCAgICAvL2FzeW5jOiBmYWxzZSxcclxuXHRcdFx0ICAgIC8vcGFzc2luZyB0aGUgZGF0YVxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBcclxuXHRcdFx0ICAgICAgICAvL3NlcnZlckFkZHJlc3M6bnVtYmVyWFxyXG5cdFx0XHQgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkgeyBjb25zb2xlLmxvZyhkYXRhKTsgLy9hbGVydChcInRoaXMuaEZpbmFsLTEgXCIgKyB0aGlzLmhGaW5hbCApO1xyXG5cdFx0XHRcdCAgICAgLy9NeSBhZGQtIGNvbnNpZGVyIHRoZSBjYXNlIHdoZW4gdGhlIGFkZHJlc3MgaXMgTm90IGZvdW5kLCAyMDE4LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdCAgICAgICAgICAgICAgICAgLy92YXIgc3RhdHVzID0gZGF0YS5zdGF0dXMgLy8ganNvbiByZXN1bHQgcmV0dXJucyBPS3x8WkVST19SRVNVTFRTIC8vR29vZ2xlIG1hcHMgVmFyaWFudFxyXG5cdFx0XHRcdFx0ICAgXHJcblx0XHRcdCAgICAgICAgIHZhciBzdGF0dXMgPSBkYXRhLnR5cGUgLy8ganNvbiByZXN1bHQgcmV0dXJucyBPS3x8WkVST19SRVNVTFRTIC8vTUFQQk9YXHJcblx0ICAgICAgICAgICAgICAgICAvL2lmKHN0YXR1cz09XCJPS1wiKXsgLy9hbGVydChcIk9LXCIpOyAvL0dvb2dsZSBtYXBzIFZhcmlhbnRcclxuXHRcdFx0XHQgICAgIGlmKHN0YXR1cz09XCJGZWF0dXJlQ29sbGVjdGlvblwiKXsgLy9hbGVydChcIk9LIEZlYXR1cmVDb2xsZWN0aW9uXCIpOyAgIC8vTWFwQm94IFZhcmlhbnRcclxuXHRcdFx0XHRcdCAgIFxyXG5cdFx0XHRcdCAgICAgICAgIC8vaWYgKGRhdGEuZmVhdHVyZXNbMF0uY2VudGVyWzFdPT0gbnVsbCkgeyBhbGVydChcIk9LXCIpOyAvL2lmIHZhciBkZWZpbmVkXHJcblx0ICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhWDIgPSAnPHRyPjx0ZD4nICsgICBkYXRhLmZlYXR1cmVzWzBdLmNlbnRlclsxXSArICAnPC90ZD48dGQ+JyArIGRhdGEuZmVhdHVyZXNbMF0uY2VudGVyWzBdICsgICAnPC90ZD48L3RyPic7ICAgICAvL01hcEJveCBWYXJpYW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvL2FsZXJ0KFwidGhpcy5kYXRhWDJcIiArIHRoaXMuZGF0YVgyKTtcclxuXHRcdFx0XHQgICAgIH0gZWxzZSB7IC8vYWxlcnQoXCJPSyBOT1RcIik7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhWDIgPSAnPHRyPjx0ZD4gTm90IEZvdW5kIDwvdGQ+PHRkPjwvdGQ+PC90cj4nOyAgLy9hbGVydChcInRoaXMuZGF0YVgyXCIgKyB0aGlzLmRhdGFYMik7XHJcblx0ICAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgICAvLyBFTkQgTXkgYWRkLSBjb25zaWRlciB0aGUgY2FzZSB3aGVuIHRoZSBhZGRyZXNzIGlzIE5vdCBmb3VuZCwgMjAxOC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQgICAgICAgICAgICAgICAgIC8vYWxlcnQoXCJubiBcIiArIHNwbGl0X2Nvb3JkaW5hdGVzLmhGaW5hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNwbGl0X2Nvb3JkaW5hdGVzLmhGaW5hbCA9IHNwbGl0X2Nvb3JkaW5hdGVzLmhGaW5hbCArIHRoaXMuZGF0YVgyOyAgLy9hbGVydChcInRoaXMuaEZpbmFsLTIgXCIgKyB0aGlzLmhGaW5hbCApO1xyXG5cdFx0XHRcdCAgICAgLy9hbGVydChcImFqYXggXCIgKyB0aGlzLmhGaW5hbCk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9LCAgLy9lbmQgc3VjY2Vzc1xyXG5cdFx0XHQgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7IC8vYWxlcnQoZGF0YSk7XHJcblx0XHRcdFx0ICAgICAgJChcIiNyZXN1bHRGaW5hbFwiKS5zdG9wKCkuZmFkZU91dChcInNsb3dcIixmdW5jdGlvbigpeyAkKHRoaXMpLmh0bWwoXCI8aDQgc3R5bGU9J2NvbG9yOnJlZDtwYWRkaW5nOjNlbTsnPkVSUk9SISEhIDxicj5DcmFzaGVkPC9oND5cIil9KS5mYWRlSW4oMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cdFxyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgLy9FTkQgQUpBWGVkICBwYXJ0IFxyXG5cdFx0XHQgICAvLy0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAgIFxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdCAgXHJcbiAgIH0sXHJcbiAgIC8vICoqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXHJcbiAgIC8vICoqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXHJcbiAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgIFxyXG4gICBcclxuICAgXHJcbiAgIFxyXG4gICBcclxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcclxuICAgIHRoaXMuZGlzcGxheVJlc3VsdHMgPSBmdW5jdGlvbigpe1xyXG5cdFx0JChcIiNsb2FkaW5nXCIpLmZhZGVPdXQoMTkwMCk7IC8vaGlkZSBwcmVsb2FkZXJcclxuXHRcdHNwbGl0X2Nvb3JkaW5hdGVzLmhGaW5hbCA9IHNwbGl0X2Nvb3JkaW5hdGVzLmhGaW5hbCArICc8L3RhYmxlPjwvYnI+PC9icj48L2JyPjwvYnI+PC9icj4nIDsgICAvL2FsZXJ0IChcIm5ld0hUTUw9IFwiK25ld0hUTUwpO1xyXG5cdFx0Ly9hbGVydChcImdkZ2ZkZyBGSU5BTCAgXCIgKyBzcGxpdF9jb29yZGluYXRlcy5oRmluYWwpO1xyXG5cdFx0XHRcdFxyXG4gICAgICAgIC8vIEhUTUwgIFJlc3VsdCBkaXYgIHdpdGggIGFuaW1hdGlvbjtcclxuICAgICAgICAkKFwiI3Jlc3VsdEZpbmFsXCIpLnN0b3AoKS5mYWRlT3V0KFwic2xvd1wiLGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgICAgICAkKHRoaXMpLmh0bWwoc3BsaXRfY29vcmRpbmF0ZXMuaEZpbmFsKVxyXG4gICAgICAgIH0pLmZhZGVJbigyMDAwKTtcclxuXHJcbiAgICAgICAgJChcIiNyZXN1bHRGaW5hbFwiKS5jc3MoXCJib3JkZXJcIixcIjFweCBzb2xpZCByZWRcIik7IC8vICBzZXQgIHJlZCAgYm9yZGVyICBmb3IgIHJlc3VsdCAgZGl2XHJcbiAgICAgICAgLy9IaWRlSW5zdHJ1Y3Rpb25zKCk7XHJcblx0ICBcclxuICAgfVxyXG4gICAvLyAqKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4gICAvLyAqKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4gICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNwbGl0X2Nvb3JkaW5hdGVzO1xyXG5cclxuXHJcbiJdfQ==
