//finding coordinates by address (G API).

$(document).ready(function(){

    
//----------------------------------------------------
//Click SPLIT  Button
    $("#splitButton").click(function(){        // $(document).on("click", '.circle', function() {   // this  click  is  used  to   react  to  newly generated cicles;
        split_coordinates.getFormValue(); 
      	
        



$.when( split_coordinates.getAjaxCoordinates() ).then(function( ) {     //checks if LS exists, if not create it
        setTimeout(split_coordinates.displayResults	, 2000);               //counts quantity of  tickets in LocalStorage
    });
	
    });
//END Click SPLIT  Button
//*****************************************************************************************************************************************************
	
	
	
//----------------------------------------------------
//Click Instruction  Button
  $("#instructionButton").click(function(){
        instruction.loadInstructions();
    });
//END Click Instructions  Button
//***********************************************
	
	
	
	
//----------------------------------------------------
//Click Example  Button
    $("#examplebutton").click(function(){
        load_example.loadExampleCoordinates();
    });
//END Click Example  Button
//***************************************************
	
	

	
//----------------------------------------------------
//CLEAR  Button
    $("#clearButton").click(function(){
        clear_fields.clearFields();
    });
//END CLEAR  Button
//***********************************************



// END READY
});






