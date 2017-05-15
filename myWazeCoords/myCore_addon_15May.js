
//Added  RegExp  which  checks  if  it  100%  coordinates  with ","
$(document).ready(function(){


//coordsInput


//----------------------------------------------------
//Click SPLIT  Button
    $("#splitButton").click(function(){


//Just for  testing
     /* var textarea=$("#coordsInput").val(); //alert(textarea);
      var arrayX=textarea.split('\n').join(',').split(',');  
      arrayX.pop(); // delete  last array element  
alert("X=>"+arrayX); alert(JSON.stringify(arrayX));

var h='';
for(i=0;i<arrayX.length; i++)
{
h=h+arrayX[i]+'</br>'
}
alert(h);      
$("#result").html(h).fadeIn(3000); */  
// END Just for  testing



//ResultFinal!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  CORE IS HERE
//
var textareaX=$("#coordsInput").val(); //alert(textarea);
     textareaX = textareaX.trim();
      var arrayX2=textareaX.split('\n')   /*.join(',').split(',')*/;      //  NOTE!!!! ->  this  was  changed  and  proceeded  later 





//the  line  above  is  changed  as  well-  we  don't  preceed at  once with {.join(',').split(',')}  we  do later  and below
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
//New  RegExp  Check  dispalyError()------------------------------
//NEw-  to make  sure  only  coordin  with ", "are  passed      
 var pattCoordsRegExp  = /\d+\.*\d+\,+[\s]*\d+\.*\d+/i;   //works
for(j=0;j<arrayX2.length; j++)
 { 
  var found = arrayX2[j].match(pattCoordsRegExp );
  if (found==null){dispalyError();return false;}
 }

arrayX2=arrayX2.join(',').split(',')

//New  RegExp  Check  dispalyError()-------------------------------
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=




//INJECTED  CHECK1  (if  array is  even, like  contains 'not  found'  we  dispaly  ERROR )------------
var d=arrayX2.length;;
if(d%2!=0){   $("#resultFinal").stop().fadeOut("slow",function(){  $(this).html("<h1 style='color:red;'>ERROR-> check  your  input</h1>") }).fadeIn(2000);
              $("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div
              HideInstructions ();  }  //else {
//END INJECTED CHECK2----------------------------------------------








//check2 ,comma????????????????????????? WORKSSSSSSS

    /*else*/ if(  textareaX.indexOf(',')== -1     ){  //must check input not array
                                                    dispalyError();
}   
else {
// end check 2 comma ??????????????????
//






      //arrayX2.pop(); // delete  last array element  !!!!!!!!!!!!!!!!!!!
     //alert('screw '+JSON.stringify(arrayX2));  WORKING;
//
//alert('arrayX2.length= '+arrayX2.length );
var hFinal='</br><p style="color:red;">RESULTS</br>Copy and paste separated  coordinates  back to  your  spreadsheet.Dont forget to  place focus on the  first cell before pasting </p> <input type="button" value="copy to  clipboard" id="copybutton"><span id="flashMessage"></span> </br></br><table id="tableResults">';
var dataX=''; var n;
for(j=0;j<arrayX2.length; j++) {  //j+=2

         if( j%2===0) { //0
          dataX=dataX+ "<tr><td>"  +arrayX2[j]+  "</td><td>"  +arrayX2[j+1]+   "</td></tr>"; 
         //dataX= "<tr><td>"  +arrayX2[j]+  "</td><td>"  +arrayX2[j+1]+"</td></tr>";  
                       }       // else{ }         
      }
hFinal=hFinal+dataX+'</table></br></br></br></br></br>' ;
//alert(hFinal);

//$("#resultFinal").hide().html(hFinal).show(3000); 
   // HTML  Result div  with  animation;
  $("#resultFinal").stop().fadeOut("slow",function(){ 
                $(this).html(hFinal)
            }).fadeIn(2000);

$("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div
HideInstructions ();
///  end  CORE

}// END INJECTED CHECK 2 if(d%2!=0){ } 

 });
//END Click SPLIT  Button
//***********************************************











//----------------------------------------------------
//Click Example  Button
    $("#examplebutton").click(function(){
    $("#coordsInput").val("40.264120, 18.679017\n50.264120, 28.679017\n60.264120, 38.679017\n70.264120, 48.679017"); //  was \n  in the  end

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
              HideInstructions (); return false;}
//end func









// END READY
});
