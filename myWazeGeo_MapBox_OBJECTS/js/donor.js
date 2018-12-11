//finding coordinates by address (G API).

$(document).ready(function(){

    var newHTML = [];
    window.b='';
	
	
	
	
	
	
	//  OBJECT: load instructions, examples, clear fields---------------------------------------------------------------------------------------
	var coordinates = {
		
        
		
		
		
		
		
		
		
		
		
     };
	
	// END OBJECT: load instructions, examples, clear fields-----------------------------------------------------------------------


	
	
	
	
	
	
	
	//  OBJECT SPLIT COORDINATES---------------------------------------------------------------------------------------
	var core = {
		
        firstName: "",
		
        splitCoordinates : function() {
		   

            //INJECTED  CHECK1  (if  array is  even, like  contains 'not  found'  we  dispaly  ERROR )------------
            
            //END INJECTED CHECK2----------------------------------------------
      
            

           //CORE INSIDE
           // **************************************************************************************
           // **************************************************************************************
           // **                                                                                  **
           // ** 
           dataX='';
          
	
                //End  new  Async*******************************
                //alert(data.results[0].geometry.location.lat);// working lat
                //alert(data.results[0].formatted_address);//working
                //alert(data.results[0].address_components[0].long_name);  //working


	            
                //dataX=dataX+'<tr><td>'+     data.results[0].geometry.location.lat+   '</td><td>' +data.results[0].geometry.location.lng+   '</td></tr>';  //alert("screw -> "+dataX);

            } // END FOR
            // **                                                                                  **
            // **                                                                                  **
            // **************************************************************************************
            // **************************************************************************************


        



        //  end  CORE
        }, //end core.splitCoordinates();
		
		
		secondName: "", //just an empty property
		
		
		
     };
	
	// END OBJECT SPLIT COORDINATES-----------------------------------------------------------------------
	
	
	
	
	
	
	
	
	
	
	
	


































//-------------------------------------------------------------------------------
//Copy Button
  $(document).on("click", '#copybutton', function() {   // this  click  is  used  to   react  to  newly generated cicles;
      //$("#copybutton").click(function(){
      //tableResults

      $('#flashMessage').html(' Copied!!!!!!!').fadeOut(4500);

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

      //$('#flashMessage').html(' Copied!!!!!!!').fadeOut(4500);
      //alert("COPIED to  clipboard");    

 });
//END Copy  Button
//**********************************************************************************




//-----------------------------------------------------------

//---------------------------------------------------------------




//function dispalyError()
function  dispalyError(){
    $("#resultFinal").stop().fadeOut("slow",function(){  $(this).html("<h1 style='color:red;'>ERROR-> check  your  input</h1>") }).fadeIn(2000);
    $("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div
    HideInstructions ();
}
//end function dispalyError()









// END READY
});






