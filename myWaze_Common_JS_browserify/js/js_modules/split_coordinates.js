var error_file = require('./error_process.js');


function split_coordinates(){
	
  this.d = "",
  this.arrayX2 = "",
  this.dataX = "",
  this.hFinal = "",
	
  //gets addresses text from textarea	
  // **************************************************************************************
  // **************************************************************************************
  //                                                                                     **
  this.getFormValue = function(){
	   if ($("#coordsInput").val().trim()==""){
	     //alert("Empty");
		 //Display error
		 var errorModule = new error_file();
		 errorModule.showError();
		 
         return false;		 
	   }
	   textareaX = $("#coordsInput").val(); //alert(textarea);
       textareaX = textareaX.trim();
       this.arrayX2 = textareaX.split('\n');/*.join(',').split(','); */
	   //alert(this.arrayX2);
			
	   this.d = this.arrayX2.length; //alert('address array contains -> ' + this.d);
	   split_coordinates.hFinal='<br><p style="color:red;">RESULTS => found '+ this.d +  '</br> </br><input type="button" value="Copy" id="copybutton"><span id="flashMessage"></span> </br></br><table id="tableResults">';
       return true;
   },
   // **                                                                                  **
   // **                                                                                  **
   // **************************************************************************************
   // **************************************************************************************
   
   
   
   
  //sends ajax to API
  // **************************************************************************************
  // **************************************************************************************
  //                                                                                     **
  this.getAjaxCoordinates = function(){
	  $("#loading").fadeIn(200); //show preloader
      //alert("this " + this.arrayX2);
	  //New-Async WORKSSSSS**************	
       for (j = 0; j < this.d; j++) {  
           //alert(this.arrayX2[j]);  
			var numberX = this.arrayX2[j];
			//-----------------
			// send  data  to  PHP handler  ************ 
            $.ajax({
                //url:  'https://maps.googleapis.com/maps/api/geocode/json?address=' + this.arrayX2[j] + '&key=AIzaSyANSd5IMYTCcMx6Hap44FXd6_zDo1dklh8',
				//url:  'ajax_php_script/ajax_api_script.php',  //requesting inner php which sends ajax to MapB API
			    url: 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + numberX + '.json?country=us&access_token=pk.eyJ1IjoiYWNjb3VudDkzMSIsImEiOiJjaXgwOTVuOTEwMGFxMnVsczRwOWx0czhnIn0.YjZ5bpnh6jqTEk7cCJfrzw',

                type: 'GET', //!!!!!!!! NOT POST
			    dataType: 'json', // without this it returned string(that can be alerted), now it returns object
			    //async: false,
			    //passing the data
                data: { 
			        //serverAddress:numberX
			     },
                 success: function(data) { console.log(data); //alert("this.hFinal-1 " + this.hFinal );
				     //My add- consider the case when the address is Not found, 2018-------------------------
	                 //var status = data.status // json result returns OK||ZERO_RESULTS //Google maps Variant
					   
			         var status = data.type // json result returns OK||ZERO_RESULTS //MAPBOX
	                 //if(status=="OK"){ //alert("OK"); //Google maps Variant
				     if(status=="FeatureCollection"){ //alert("OK FeatureCollection");   //MapBox Variant
					   
				         //if (data.features[0].center[1]== null) { alert("OK"); //if var defined
	                     this.dataX2 = '<tr><td>' +   data.features[0].center[1] +  '</td><td>' + data.features[0].center[0] +   '</td></tr>';     //MapBox Variant
                         //alert("this.dataX2" + this.dataX2);
				     } else { //alert("OK NOT");
	                     this.dataX2 = '<tr><td> Not Found </td><td></td></tr>';  //alert("this.dataX2" + this.dataX2);
	                 }
	                 // END My add- consider the case when the address is Not found, 2018----------------------
	
	                 //alert("nn " + split_coordinates.hFinal);
                     split_coordinates.hFinal = split_coordinates.hFinal + this.dataX2;  //alert("this.hFinal-2 " + this.hFinal );
				     //alert("ajax " + this.hFinal);
               
                  },  //end success
			      error: function (error) { //alert(data);
				      $("#resultFinal").stop().fadeOut("slow",function(){ $(this).html("<h4 style='color:red;padding:3em;'>ERROR!!! <br>Crashed</h4>")}).fadeIn(2000);
                  }	
               });
                                               
               //END AJAXed  part 
			   //------------------
              
			}
			
	  
   },
   // **                                                                                  **
   // **                                                                                  **
   // **************************************************************************************
   // **************************************************************************************
   
   
   
   
   
    // **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
    this.displayResults = function(){
		$("#loading").fadeOut(1900); //hide preloader
		split_coordinates.hFinal = split_coordinates.hFinal + '</table></br></br></br></br></br>' ;   //alert ("newHTML= "+newHTML);
		//alert("gdgfdg FINAL  " + split_coordinates.hFinal);
				
        // HTML  Result div  with  animation;
        $("#resultFinal").stop().fadeOut("slow",function(){ 
            $(this).html(split_coordinates.hFinal)
        }).fadeIn(2000);

        $("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div
        //HideInstructions();
	  
   }
   // **                                                                                  **
   // **                                                                                  **
   // **************************************************************************************
   // **************************************************************************************
}

module.exports = split_coordinates;


