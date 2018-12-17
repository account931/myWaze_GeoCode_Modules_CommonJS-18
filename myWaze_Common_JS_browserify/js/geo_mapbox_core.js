

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






