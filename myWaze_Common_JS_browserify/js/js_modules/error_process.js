	
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
	
	
	
	
	
