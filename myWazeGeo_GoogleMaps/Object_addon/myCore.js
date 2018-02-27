//finding coordinates by address (G API).

$(document).ready(function(){

    var newHTML = [];
    window.b='';
	
	
	
	
	
	
	//  OBJECT: load instructions, examples, clear fields---------------------------------------------------------------------------------------
	var coordinates = {
		
        firstName: "22802 WESTERN AV, TORRANCE, 90501\n1601 Kingsdale Ave, Redondo Beach, CA 9027\n3525 W Carson St, Torrance, CA 90503\n20401 Victor St, Torrance, CA 90503\n2015 W Redondo Beach Blvd C, Gardena, CA 90247",
		
        loadExampleCoordinates : function() {
	        $("#coordsInput").val(this.firstName); //  was \n  in the  end
        },
		
		
		loadInstructions : function() {
	        $("#hiddenInstructions").toggle(1000);
            if ($("#instructionButton").attr("value")=="instructions") {
                $("#instructionButton").val("Close");
				$("#instructionButton").css("background","red");
            } else { 
		    $("#instructionButton").val("instructions");$("#instructionButton").css("background","grey")
	        }	
        },
		
		
		
		clearFields : function() {
	        $("#hiddenInstructions").hide(2000);
            $("#coordsInput").val('');
            $("#resultFinal").hide(1000);
            //hide  instr  &  change  button
             HideInstructions ();
            //END  Hide Instructions  and  change  button
        },
		
		
		
     };
	
	// END OBJECT: load instructions, examples, clear fields-----------------------------------------------------------------------


	
	
	
	
	
	
	
	//  OBJECT SPLIT COORDINATES---------------------------------------------------------------------------------------
	var core = {
        firstName: "",
		
        splitCoordinates : function() {
		    var textareaX=$("#coordsInput").val(); //alert(textarea);
            textareaX = textareaX.trim();
            var arrayX2=textareaX.split('\n');/*.join(',').split(','); */
       	    //alert('el1-> '+arrayX2[0]); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 

            //INJECTED  CHECK1  (if  array is  even, like  contains 'not  found'  we  dispaly  ERROR )------------
            var d=arrayX2.length; //alert('address array contains -> '+d);
            //END INJECTED CHECK2----------------------------------------------
      
            var hFinal='</br><p style="color:red;">RESULTS => found '+d+  '</br> </br><input type="button" value="Copy" id="copybutton"><span id="flashMessage"></span> </br></br><table id="tableResults">';

           //CORE INSIDE
           // **************************************************************************************
           // **************************************************************************************
           // **                                                                                  **
           // ** 
           dataX='';
          //New-Async WORKSSSSS*********************************
           for(j=0;j<arrayX2.length; j++) {  //j+=2

               var data = $.parseJSON($.ajax({
               url:  'https://maps.googleapis.com/maps/api/geocode/json?address='+arrayX2[j]+'&key=AIzaSyANSd5IMYTCcMx6Hap44FXd6_zDo1dklh8',
               dataType: "json", 
               //------------ Adding  LOAD image
               beforeSend: function()
               {
                   $('#loadAjax').show(); 
                   $('#loadAjax').html('<img  src="images/loading2.gif" style="width:6%;">');
                   $('#loadAjax').fadeOut(5000);
               }, 
               /*success: function(data)
               {
                   $('#loadAjax').html('done');
                },*/
                error: function()
                {
                    $('#loadAjax').html('error');
                },
                //----------------------------- END  LOAD  IMAGE
                async: false
                }).responseText); 
	
                //End  new  Async*******************************
                //alert(data.results[0].geometry.location.lat);// working lat
                //alert(data.results[0].formatted_address);//working
                //alert(data.results[0].address_components[0].long_name);  //working


	            //My add- consider the case when the address is Not found, 2018---------------------------------------------------
	            var status=data.status // json result returns OK||ZERO_RESULTS
	            if(status=="OK") {
	                dataX2='<tr><td>'+     data.results[0].geometry.location.lat+   '</td><td>' +data.results[0].geometry.location.lng+   '</td></tr>'; 
	            } else {
	                dataX2='<tr><td> Not Found </td><td></td></tr>'; 
	            }
	            // END My add- consider the case when the address is Not found, 2018--------------------------------------------------
	
	

                dataX=dataX+dataX2; // final data
                //dataX=dataX+'<tr><td>'+     data.results[0].geometry.location.lat+   '</td><td>' +data.results[0].geometry.location.lng+   '</td></tr>';  //alert("screw -> "+dataX);

            } // END FOR
            // **                                                                                  **
            // **                                                                                  **
            // **************************************************************************************
            // **************************************************************************************


        hFinal=hFinal+dataX+'</table></br></br></br></br></br>' ;   //alert ("newHTML= "+newHTML);



        // HTML  Result div  with  animation;
        $("#resultFinal").stop().fadeOut("slow",function(){ 
           $(this).html(hFinal)
        }).fadeIn(2000);

        $("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div
        HideInstructions ();

        //  end  CORE
        },
		//end core.splitCoordinates();
		
		
		secondName: "", //just an empty property
		
		
		
     };
	
	// END OBJECT SPLIT COORDINATES-----------------------------------------------------------------------
	
	
	
	
	
	
	
	
	
	
	
	
//----------------------------------------------------
//Click SPLIT  Button
    $("#splitButton").click(function(){        // $(document).on("click", '.circle', function() {   // this  click  is  used  to   react  to  newly generated cicles;
        core.splitCoordinates();     
    });
//END Click SPLIT  Button
//*****************************************************************************************************************************************************











//----------------------------------------------------
//Click Example  Button
    $("#examplebutton").click(function(){
        coordinates.loadExampleCoordinates();
    });
//END Click Example  Button
//***************************************************







//----------------------------------------------------
//Click Instruction  Button
    $("#instructionButton").click(function(){
        coordinates.loadInstructions();
    });
//END Click Instructions  Button
//***********************************************





//----------------------------------------------------
//CLEAR  Button
    $("#clearButton").click(function(){
        coordinates.clearFields();
    });
//END CLEAR  Button
//***********************************************








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
function HideInstructions (){
    if ($('#hiddenInstructions').css('display') == 'none') { 
	    //do nothing
    } else {

        $("#hiddenInstructions").hide(2000);
            if ($("#instructionButton").attr("value")=="instructions") {
                $("#instructionButton").val("Close");$("#instructionButton").css("background","red");
		    } else { 
		        $("#instructionButton").val("instructions");$("#instructionButton").css("background", "#ebebe0");
		    }
    }
}
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






