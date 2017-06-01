$(document).ready(function(){

//dataX=''; //  gloabal  var
//window.dataX2;
//coordsInput
//var hFinal='';
var newHTML = [];
window.b='';


//----------------------------------------------------
//Click SPLIT  Button
    $("#splitButton").click(function(){        // $(document).on("click", '.circle', function() {   // this  click  is  used  to   react  to  newly generated cicles;


    trimWaze();


$("#resultFinal").stop().fadeOut("slow",function(){ 
                $(this).html(hFinal)
            }).fadeIn(2000);

$("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div
//



 });
//END Click SPLIT  Button
//*****************************************************************************************************************************************************







  
//----------------------------------------------------
//CR Footer
    $("#cr_footer").click(function(){
        //var textareaCR=$("#coordsInput").val();
          
//below  flaf  is  used  to  trigger in trimWaze()  an  option  weather  or  not  to  add a Footer  CR
          window.flagged="true";
		trimWaze();
          window.flagged="false";
		//var textareaCR=textareaCR+"";
           hFinal=hFinal;
 //hFinal=hFinal+"<p>Please let me know if you have any additional questions. Feel free to contact us</br>Waze support Team </p></br>";//used in Waze Trim
		 //$("#tableResults").append("<p>Please let me know if you have any additional questions. Feel free to contact us</br>Waze support Team </p>");
		 //$('<p>Text</p>').appendTo('#tableResults');
         
		
		$("#resultFinal").stop().fadeOut("slow",function(){ 
                $(this).html(hFinal)
            }).fadeIn(2000);

$("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div

    });
//END Click CR Footer
//***********************************************






//not  working
//----------------------------------------------------
//CR Header
    $("#cr_header").click(function(){
       	trimWaze();
		//var textareaCR=textareaCR+"<p>Hello Wazer</br>Thanks for contacting us. </p>";
		hFinal="<p>Hello Wazer</br>Thanks for contacting us </p>"+hFinal; //last
		 
		
		
		$("#resultFinal").stop().fadeOut("slow",function(){ 
                $(this).html(hFinal)
            }).fadeIn(2000);

$("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div

    });
//END Click CR Header
//***********************************************







//----------------------------------------------------
//Click Example  Button
    $("#examplebutton").click(function(){
    $("#coordsInput").val("Waze is a 100%       free turn-by-turn GPS navigation        application that provides real-time traffic updates\n plus all kinds             of cool social and geo-gaming elements       that actually make commuting fun."); //  was \n  in the  end

 });
//END Click Example  Button
//***********************************************







//----------------------------------------------------
//Click Instruction  Button
    $("#instructionButton").click(function(){
    $("#hiddenInstructions").toggle(1000);
if( $("#instructionButton").attr("value")=="instructions")
   { $("#instructionButton").val("Close");$("#instructionButton").css("background","red");} else { $("#instructionButton").val("instructions");$("#instructionButton").css("background","grey")}

 });
//END Click Instructions  Button
//***********************************************


//----------------------------------------------------
//Click Close Instruction  Button
/* $("#closeIt").click(function(){
    $("#hiddenInstructions").hide(2000);

 });*/
//END   Click Close Instruction  Button






//----------------------------------------------------
//CLEAR  Button
    $("#clearButton").click(function(){
    $("#hiddenInstructions").hide(2000);
    $("#coordsInput").val('');
    $("#resultFinal").hide(1000);
//hide  instr  &  change  button
    HideInstructions ();
//END  Hid e Instructuins  and  change  button
 });
//END CLEAR  Button
//***********************************************








//-------------------------------------------------------------------------------
//Copy Button
  $(document).on("click", '#copybutton', function() {   // this  click  is  used  to   react  to  newly generated cicles;
   // $("#copybutton").click(function(){
//tableResults

$('#flashMessage').html(' Copied!!!!!!!').fadeOut(4500);
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




//-----------------------------------------------------------
function HideInstructions (){
if ( $('#hiddenInstructions').css('display') == 'none' ){} else{

$("#hiddenInstructions").hide(2000);
        if( $("#instructionButton").attr("value")=="instructions")
       { $("#instructionButton").val("Close");$("#instructionButton").css("background","red");} else { $("#instructionButton").val("instructions");$("#instructionButton").css("background","grey")}
}
}
//---------------------------------------------------------------




//function dispalyError()
function  dispalyError(){
$("#resultFinal").stop().fadeOut("slow",function(){  $(this).html("<h1 style='color:red;'>ERROR-> check  your  input</h1>") }).fadeIn(2000);
              $("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div
              HideInstructions ();}
//end func




//---------------------------------------------------------------------------
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 
function trimWaze(){
// replace multiple spaces with a single space
var textarea=$("#coordsInput").val();



//count occurance double space---------------------
  //var regExp = new RegExp(\s\s+, "gi");
  var numb = (textarea.match(/  +/g) || []).length;
  //alert(numb);
//end  count occurance double space-----------------





//START  Highlight Double Spaces----------------------------------------------
var arrayX2HIGHLIGHT=textarea.split('\n');/*.join(',').split(','); */
var resHighlight='';
for(j=0;j<arrayX2HIGHLIGHT.length; j++)
 {  
    resHighlight+= arrayX2HIGHLIGHT[j].replace(/  +/g, "&nbsp;<span style='background:red;'> __ </span>&nbsp;")+"</br>";//replace all double spaces with red
 }
$("#highLight_errors").html(resHighlight);
//$("#coordsInput").val(resHighlight);
//END  Highlight Double Spaces --------------------------------------------------








var arrayX2=textarea.split('\n');/*.join(',').split(','); */
//alert(textarea);



/*var stringTrimmed =textarea.replace( /\s\s+/g, ' ' )
$("#coordsInput").val(stringTrimmed);*/
$("#loadAjax").fadeIn(2000).html("Processed").fadeOut(3000);
// END  replace multiple spaces with a single space




//
window.hFinal='</br><p style="color:red;">RESULTS => '+numb+'  </br> </br><input type="button" value="Copy" id="copybutton"><span id="flashMessage"></span> </br></br><p id="tableResults"></br>';


 

 dataX='';
 for(j=0;j<arrayX2.length; j++) {  
 dataX=arrayX2[j].replace( /\s\s+/g, ' ' )+'</br>';
 hFinal=hFinal+dataX;
 }
 //  should  we  or  not add  a  footer to  result
if (window.flagged=="true"){hFinal=hFinal+"</br><span id='footer'>Please let me know if you have any additional questions, feel free to contact us.</br>Waze support Team </span></p>";}
else{
hFinal=hFinal+"</p></br></br>";
    }    
//  END should  we  or  not add  a  footer to  result

//show details button
$("#highLight_errors_button").show();//show button
$("#highLight_errors").hide(); //hide content


}
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//------------------------------------------------------------------
// End trimWaze()








// SHOW DETAILS
//---------------------
$("#highLight_errors_button").click(function(){ 
 $("#highLight_errors").toggle(1000);
});
//-----------------------------------------------------
//END SHOW DETAILS







// END READY
});





/*
var newHTML = [];
for (var i = 0; i < vehicles.length; i++) {
    newHTML.push('<p class="resultArray"><span>' + vehicles[i] +'</span>  '+  '<span class="deleteItem" id="'+[i]+'">' + '<img src="images/delete2.png"/></span></p>');
}

$(".resultMy").html(newHTML.join(""));
*/
