$(document).ready(function(){




//1st  button  clicked -Waze to  Google
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 

 $("#wToG").click(function(){
 
 
 //check if  not  empty
    if($('#col1').val()=='' || $('#col2').val()=='' ){
                            $("#resultFinal").stop().fadeOut("slow",function(){  $(this).html("<h1 style='color:red;'>ERROR-> check  your  input-it is  empty</h1>") }).fadeIn(2000);
                            $("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div
							return  false; }
//  END check if  not  empty




 
 alert("col1  val=  "+$('#col1').val() +" col2 val= "+$('#col2').val());
//var Wvalue=$('#Wvalue').val();
       
	  //TextArea1 
      textareaX1 = $('#col1').val().trim();
      var textAreaArray1=textareaX1.split('\n');  alert('arr1-> '+textAreaArray1.length );
	  
	  //TextArea2 
      textareaX2 = $('#col2').val().trim();
      var textAreaArray2=textareaX2.split('\n');  alert('arr2-> '+textAreaArray2.length);



var hFinal='</br><p style="color:red;">RESULTS</br>Copy and paste separated  data  back to  your  spreadsheet.Dont forget to  place focus on the  first cell before pasting </p> <input type="button" value="copy to  clipboard" id="copybutton"><span id="flashMessage" style="color:red;"></span> </br></br><table id="tableResults"  style="border:solid 1px  black;">';
var dataX=''; var n; //??
     for(j=0;j<textAreaArray1.length; j++) {  
	 
	 
	 
	 //ReIndexOF---------------------------------------------------------------
	 //just oriiginal  snippet  copied  (to  use  with reIndexOf) 
	          if (typeof Array.prototype.reIndexOf === 'undefined') {
                  Array.prototype.reIndexOf = function (rx) {
                                          for (var i in this) {
                                             if (this[i].toString().match(rx)) {
                                                         return i;
                                                                                }
                                                               }
                                                 return -1;
                                                           };
                                                                         }
	 //End ReIndexOf-----------------------------------------------------------
	 
	 
	 
	 
	 
	       //RegExp 
		   var reg = new RegExp('[a-zA-Z0-9\s]*' + textAreaArray1[j]); //  create  Rex Exp+variable
		   //var reg = '/'  +    textAreaArray1[j]   +'/;';  alert('regg-> '+reg);  //var reg = '/^[a-z"]+ '+    textAreaArray1[j]   +'$/';
	       var n=textAreaArray2.reIndexOf(reg);  //alert('ReIndex= '+n); //reIdexOf  search(connected  with  block  above)
		   // END RegExp


           
		   
		   
		   
	      //var n = textAreaArray2.indexOf(textAreaArray1[j]); //works  but  only  for  identica match
           //alert('index-> '+n);
		   
		   
		   
		   var selected=$("#elementId").val();  //get  select option
                       if (selected=="v") { 
		                                    hFinal=hFinal+  "<tr><td>" +textAreaArray2[n] +  "</td><tr>";  }
						else if	 (selected=="g") { 
						                    hFinal=hFinal+  "<tr><td style='padding: 40px 40;' >" +textAreaArray1[j]+    "<td style='padding: 40px 40;'>" +textAreaArray2[n] +  "</td><tr>";  }	

          //START  if  select  "column+name"----
                        else if	 (selected=="c_name") {	
                     //extract  shops  name
                         if (n==-1){s="not  found"}  else{   //  prevent  from  crashin  substr  option if  n=undefined(i.e  not  found in sheet2  array)
                            var x=textAreaArray2[n];//  whole  text (name+addrs) sheet2
                            var y=textAreaArray1[j];//  sheet1
                            var s = x.substr(0,x.length-y.length);  //alert(s);
                            //var res = x.match(/ain/g);
                                                                 }//end   if(n==undefinied){s="not  found"}  else{  
		            //  END  extract  shops  name	
                   hFinal=hFinal+  "<tr><td style='padding: 40px 40;' >" +textAreaArray1[j]+    "<td style='padding: 40px 40;'>" +s +  "</td><tr>";  }	
         //END   if  select  "column+name"--------

      }//  end  for  ++
	  
	  
	  hFinal=hFinal+'</table>';
	  
	  
	  
	  
	  
	  
	  
	  
	  


	  
	  //  HTML  results
	  $("#resultFinal").stop().fadeOut("slow",function(){ 
                $(this).html(hFinal)
            }).fadeIn(2000);

$("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div




    }); //  end  click

// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//END 1st  button  clicked--Waze to  Google
















































// START RESET input - W to  G 1st field  reset
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 
 $("#WReset").click(function(){  

       $('#col1,#col2').val(''); //  your  input
	   $('#resultFinal').hide();
        
    }); //  end  click
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//END RESET input W to  G 1st field  reset














// START Load  example
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 
 $("#example1").click(function(){ 

       $('#col1,#col2').val('');

       $('#col1').val('2100 Burnhamthorpe Road W. Mississauga ON L5L3N1 \n995 Eglinton Ave. E. Mississauga ON L4W4H3 \n6536 Winston Churchill Blvd. Mississauga ON L5N3W4 \n4106 Cawthra Road Mississauga ON L4Z1A1 \n524 Rexdale Blvd. Etobicoke ON M9W7J9 \n695 Major Mackenzie Drive E. Richmond Hill ON L4C1J7 \n585 Dixon Road Etobicoke ON M9W1H7 \n581 Kipling Avenue Etobicoke ON M8Z5E7'); // 



	   $('#col2').val('Lotto 695 Major Mackenzie Drive E. Richmond Hill ON L4C1J7 \nTaco Bell 6536 Winston Churchill Blvd. Mississauga ON L5N3W4 \nTim Horton 995 Eglinton Ave. E. Mississauga ON L4W4H3 \nFargo 585 Dixon Road Etobicoke ON M9W1H7 \nShell 524 Rexdale Blvd. Etobicoke ON M9W7J9 \nKFC 2100 Burnhamthorpe Road W. Mississauga ON L5L3N1 \nPB 4106 Cawthra Road Mississauga ON L4Z1A1 \nKangoo Express 581 Kipling Avenue Etobicoke ON M8Z5E7'); //
	   //$('#resultFinal').hide();
        
    }); //  end  click
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//END load  example









//-------------------------------------------------------------------------------
//Copy Button
  $(document).on("click", '#copybutton', function() {   // this  click  is  used  to   react  to  newly generated cicles;
   // $("#copybutton").click(function(){
//tableResults

$('#flashMessage').html(' Copied!!!!!!!')/*.fadeOut(4500)*/;
//
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

//
//$('#flashMessage').html(' Copied!!!!!!!').fadeOut(4500);
//alert("COPIED to  clipboard");    

 });
//END Copy  Button
//**********************************************************************************













});// END READY























