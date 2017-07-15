$(document).ready(function(){




//1st  button  clicked -Waze to  Google
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 

 $("#wToG").click(function(){

//var Wvalue=$('#Wvalue').val();


//if Link from Waze Editor-------------
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
     if (confirm("Navigate to Google Maps?")==true) { window.open("https://www.google.com.ua/maps/@"+$_GET["lat"]+"," +$_GET["lon"] +",18z?hl=eng"); }

} //End if( $('#Wvalue').val()!='' )
//END if Link from Waze Editor--------------





//if Link from Live Map-------------
else if(   $('#Wvalue').val().search(/https:\/\/www.waze.com\/[\w]*\/*livemap?/i)!=-1    ){   // check  if  not  empty  &  contain  right URl

        var LiveMapValue=$('#Wvalue').val(); //  your  input
        //alert(Wvalue);

 	   
           var LvMpArray=LiveMapValue.split("?");  //split URL into 2-el array
           var finalArray = LvMpArray.slice(1, 2);//delete  1 item in array (all  that  comes  up to "?"  = > ?zoom=17&lat=50.25464&lon=28.65925 );
                //alert ("final=>  "+finalArray); //  secon  array item
           var c=finalArray.toString(); //Convert an array to a string(just like join() method)
		   var latLong=c.split('&'); //alert(latLong);  //alert(latLong[0] + ' - '+latLong[1]); //now contains 3 el array[zoom=17, lat=50.25464, lon=28.65925]
		   var latLong=latLong.slice(1, 3);// we delete 1st array element(zoom), and save two next elem 
		   //alert(latLong);//alert(latLong[0] + ' - '+latLong[1]);
		   //var c=latLong.toString();  var latLong=c.split('='); alert(latLong[1]);alert(latLong[3]);
		   var Lat=latLong[0].split('='); //alert(Lat[1]); //we take 1st latLong array el(lat=50.25464),split into new array Lat[lat,50.25464] & take its 1st element
		   var Lon=latLong[1].split('='); //alert(Lon[1]); //same as above
		   
		   
     /*if (confirm("Navigate to Google Maps?")==true) {*/ window.open("https://www.google.com.ua/maps/@"+Lat[1]+"," +Lon[1] +",18z?hl=eng"); //} //18z->zoom
 
} //End if( $('#Wvalue').val()!='' )
//END if Link from Live Map--------------





else {alert('Incorrect  Waze URL');}



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

else {alert('Incorrect  Google Maps URL');}      

        
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
