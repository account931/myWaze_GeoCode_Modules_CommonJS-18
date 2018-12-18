
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






