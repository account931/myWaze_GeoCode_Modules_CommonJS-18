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



//Start  img
/*
$("#loading").fadeIn(1000); 
setTimeout(function(){ $("#loading").fadeOut(2000);  }, 100);*/

//$('#addressQuantity').html(arrayX2.length+'  addresses has been  processed');
//End  img




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
      var arrayX2=textareaX.split('\n');/*.join(',').split(','); */
       	//alert('el1-> '+arrayX2[0]); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 






//INJECTED  CHECK1  (if  array is  even, like  contains 'not  found'  we  dispaly  ERROR )------------
var d=arrayX2.length; //alert('address array contains -> '+d);
//$('#addressQuantity').html(arrayX2.length+'  addresses has been  processed');  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//Last  deact-Mine  new
/*if(d%2!=0){   $("#resultFinal").stop().fadeOut("slow",function(){  $(this).html("<h1 style='color:red;'>ERROR-> check  your  input</h1>") }).fadeIn(2000);
              $("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div
              HideInstructions ();  } */  //else {
//END INJECTED CHECK2----------------------------------------------








//check2 ,comma????????????????????????? WORKSSSSSSS

    /*else*/   

	//  Mine  new
	/*if(  textareaX.indexOf(',')== -1     ){  //must check input not array
                                                    dispalyError();
}   
else {*/
// end check 2 comma ??????????????????
//






      //arrayX2.pop(); // delete  last array element  !!!!!!!!!!!!!!!!!!!
     //alert('screw '+JSON.stringify(arrayX2));  WORKING;
//
//alert('arrayX2.length= '+arrayX2.length );
var hFinal='</br><p style="color:red;">RESULTS => found '+d+  '</br> </br><input type="button" value="Copy" id="copybutton"><span id="flashMessage"></span> </br></br><table id="tableResults">';




//NEW  FOR 
//var dataX;
//for(j=0;j<arrayX2.length; j++){
//NEW-------------------------------------------------------------------------------------------------


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
dataX=dataX+'<tr><td>'+     data.results[0].geometry.location.lat+   '</td><td>' +data.results[0].geometry.location.lng+   '</td></tr>';  //alert("screw -> "+dataX);

} // END FOR
// **                                                                                  **
// ** 
// **************************************************************************************
// **************************************************************************************







//$(function(){
    //RETURN   $.getJSON('https://api.mapbox.com/geocoding/v5/mapbox.places/'+arrayX2[0]+'.json?country=us&access_token=pk.eyJ1IjoiYWNjb3VudDkzMSIsImEiOiJjaXgwOTVuOTEwMGFxMnVsczRwOWx0czhnIn0.YjZ5bpnh6jqTEk7cCJfrzw', function(data) {





          // for(var i=0;i<data.weather.length;i++){
          //Adding   rowa  with info  to table
		  //var dataX='';
		 // newHTML.push('<tr><td>'+     data.features[0].center[1]+   '</td><td>' +data.features[0].center[0]+   '</td></tr>');
//RETURN  dataX='<tr><td>'+     data.features[0].center[1]+   '</td><td>' +data.features[0].center[0]+   '</td></tr>';  alert("screw -> "+dataX);
		  
		      //window.dataX1=data.features[0].center[1];// they  use  reversed  coords
              //window.dataX2=data.features[0].center[0];  alert(dataX1);  //data.features[0].text; 
          // Adding info  about  Sky  condition to  a  specific  div  //It DOES  ADD but  in  1  sec  is  substituted  by JS  script (Fetching)
                //$('#messnumb111').append('<span>'+data.weather[i].main+'</span>');   

//


//
   
                   
          //RETURN   });   //});  //  END $(function(){
//END NEW---------------------------------------------------------------------------------------
//} //  END  FOR



/*var newHTML = [];    
*/

//Mine  new
/*var dataX=''; var n;
for(j=0;j<arrayX2.length; j++) {  //j+=2

         if( j%2===0) { //0
          dataX=dataX+ "<tr><td>"  +arrayX2[j]+  "</td><td>"  +arrayX2[j+1]+   "</td></tr>"; 
          
                       }             
      }
	  
	  
hFinal=hFinal+dataX+'</table></br></br></br></br></br>' ;
*/
hFinal=hFinal+dataX+'</table></br></br></br></br></br>' ;   //alert ("newHTML= "+newHTML);



//$("#resultFinal").hide().html(hFinal).show(3000); 
   // HTML  Result div  with  animation;
  $("#resultFinal").stop().fadeOut("slow",function(){ 
                $(this).html(hFinal)
            }).fadeIn(2000);

$("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div
HideInstructions ();


///  end  CORE

//Mine  new
//}// END INJECTED CHECK 2 if(d%2!=0){ } 

 });
//END Click SPLIT  Button
//*****************************************************************************************************************************************************











//----------------------------------------------------
//Click Example  Button
    $("#examplebutton").click(function(){
    $("#coordsInput").val("22802 WESTERN AV, TORRANCE, 90501\n1601 Kingsdale Ave, Redondo Beach, CA 9027\n3525 W Carson St, Torrance, CA 90503\n20401 Victor St, Torrance, CA 90503\n2015 W Redondo Beach Blvd C, Gardena, CA 90247"); //  was \n  in the  end

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









// END READY
});





/*
var newHTML = [];
for (var i = 0; i < vehicles.length; i++) {
    newHTML.push('<p class="resultArray"><span>' + vehicles[i] +'</span>  '+  '<span class="deleteItem" id="'+[i]+'">' + '<img src="images/delete2.png"/></span></p>');
}

$(".resultMy").html(newHTML.join(""));
*/
