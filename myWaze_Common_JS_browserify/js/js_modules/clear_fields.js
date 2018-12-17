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