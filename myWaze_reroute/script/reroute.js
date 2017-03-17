$(document).ready(function(){




//1st  button  clicked -Waze to  Google
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 

 $("#wToG").click(function(){

//var Wvalue=$('#Wvalue').val();



if(   $('#Wvalue').val().search("https://www.waze.com/editor")!=-1    ){   // check  if  not  empty  &  contain  right URl

        var Wvalue=$('#Wvalue').val(); //  your  input
        //alert(Wvalue);



     var $_GET = {};
     var GETby = Wvalue.substring(29).split("&"); //alert("obj-> "+GETby);
     for(var i=0; i<GETby.length; i++) {
                                    var getVar = GETby[i].split("="); 
                                    $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1];
                                 } 
      //alert($_GET["lon"]+" : "+$_GET["lat"]);
      var a=$_GET["lon"];// confirm  erase???????
     if (confirm("Navigate to Google Maps?")==true) { window.open("https://www.google.com.ua/maps/@"+$_GET["lat"]+"," +$_GET["lon"] +",19z?hl=eng"); }

} //End if( $('#Wvalue').val()!='' )

else {alert('Wrong  Input');}



    }); //  end  click

// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//END 1st  button  clicked--Waze to  Google



















//2st  button  clicked-  Google  to  Waze
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 

 $("#GtoW").click(function(){

//var Gvalue=$('#Gvalue').val();
if(   $('#Gvalue').val().search("https://www.google")!=-1    ){   // check  if  not  empty  &  contain  right URl   //search("https://www.google.com.ua/maps")!=-1


           var Gvalue=$('#Gvalue').val(); //  your  input
           var Gvalue=Gvalue.split("@");  //alert (Gvalue[1]); 
           var finalArray = Gvalue.slice(1, 2);//delete  1 item in array (all  that  comes  up to "@"=https://www.google.com.ua/maps/@ );
                //alert ("final=>  "+finalArray); //  secon  array item
           var c=finalArray.toString();  var latLong=c.split(','); //alert(latLong[0] + ' - '+latLong[1]);
               
  window.open("https://www.waze.com/editor/?env=row&lon="  +latLong[1]+ "&lat="  +latLong[0] +"&layers=3109&zoom=5");  


} //End if( $('#Gvalue').val()!='' )

else {alert('Wrong  Input G');}      

        
    }); //END  click

// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//End 2st  button  clicked- Google  to  Waze




























// START RESET input - W to  G 1st field  reset
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 
 $("#WReset").click(function(){

       $('#Wvalue').val(''); //  your  input
        
    }); //  end  click
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//END RESET input W to  G 1st field  reset






// START RESET input - Goog to  W - 2st field  reset
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 
 $("#GReset").click(function(){

       $('#Gvalue').val(''); //  your  input
        
    }); //  end  click
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//END RESET input Goog to  W 2st field  reset















});// END READY
