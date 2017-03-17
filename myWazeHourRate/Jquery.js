$(document).ready(function(){





/*Checking if AMOUNT is Numbers */
      $("#day").keypress(function (e)  // any argument name 
    { 
      
      if( e.which!=8 && e.which!=0 && (e.which<48 || e.which>57)&& e.which!=46)
      {
       
        $("#errmsg").html("Digits Only").show().fadeOut(1000); 
        return false; // forbid printing at all 
      }    
    });    

 /*alert('Numbers  ONLY');*/


   //});
/*END of Checking if Numbers */





//  END  DOCUMENT  READY function;
  });









// **************************************************************************************
// **************************************************************************************
// **                                                                                  ** 
//SHould  be  outlined   out  of  READY  fuction 
//  Button  click procedures (have  the similar  function in script.js (function translater()) )
function translaterJQ(){
       //var selected=$("#elementId").val();
  //alert(selected);
window.amount=$("#day").val();
var  result=amount/8;

   $('#resultUa').html("Hours  rate = "+result);
  //$('#resultRu').html(result) ;
  $('#dubb').val(result);

/*window.hours=$("#month").val();
if (selected=="g")  
                {Ge();}
else if(selected=="v") 
               {Ve();}*/

// End  function translaterJQ
}
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************




















//if  Ven  was  selected
// **************************************************************************************
// **************************************************************************************
// **                                                                                  ** 
function Ve(){
//alert("In V");
var requested=hours*44; //alert("Must  be"+requested);
var stage2=amount/requested;
var  result=stage2*100;  alert(result);
  $('#resultUa').html("Must  be done "+requested);
  $('#resultRu').html('You scored  '+result +' %') ;
  $('#dubb').val('You scored  '+ result +' %');
}

// **                                                                                  **
// **************************************************************************************
// **************************************************************************************










// **************************************************************************************
// **************************************************************************************
// **                                                                                  **
// reseting all  fields                                                                 
function resetME (){
//alert("res");
$('#day,#dubb').val('')
$('#resultUa,#resultRu').html('');
}

// **                                                                                  **
// **************************************************************************************
// **************************************************************************************

