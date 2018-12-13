
	var split_coordinates = {
		 
		d: "",
		arrayX2: "",
		dataX: "",
		hFinal: "D",
		
		getFormValue : function() {
			//var textareaX, arrayX2, d, hFinal;
			
	        textareaX = $("#coordsInput").val(); //alert(textarea);
            textareaX = textareaX.trim();
            this.arrayX2 = textareaX.split('\n');/*.join(',').split(','); */
			//alert(this.arrayX2);
			
			this.d = this.arrayX2.length; //alert('address array contains -> ' + this.d);
			this.hFinal='</br><p style="color:red;">RESULTS => found '+ this.d +  '</br> </br><input type="button" value="Copy" id="copybutton"><span id="flashMessage"></span> </br></br><table id="tableResults">';
            
		},
		
		
		
		
		
		//--------------------------------------------------------
		getAjaxCoordinates: function(){
			 $("#loading").fadeIn(200); //show preloader
            //var dataX = ''; 	//alert("this " + this.arrayX2);
			//New-Async WORKSSSSS*********************************
			
            for (j = 0; j < this.d; j++) {  //j+=2
               //alert(split_coordinates.arrayX2[j]);
			   
			    var numberX = split_coordinates.arrayX2[j];
			   //-----------------
			   // send  data  to  PHP handler  ************ 
               $.ajax({
                     //url:  'https://maps.googleapis.com/maps/api/geocode/json?address=' + this.arrayX2[j] + '&key=AIzaSyANSd5IMYTCcMx6Hap44FXd6_zDo1dklh8',
				     //url:  'ajax_php_script/ajax_api_script.php',  //requesting inner php which sends ajax to MapB API
					 url: 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + numberX + '.json?country=us&access_token=pk.eyJ1IjoiYWNjb3VudDkzMSIsImEiOiJjaXgwOTVuOTEwMGFxMnVsczRwOWx0czhnIn0.YjZ5bpnh6jqTEk7cCJfrzw',

                   type: 'GET', //!!!!!!!! NOT POST
			       dataType: 'json', // without this it returned string(that can be alerted), now it returns object
			       //async: false,
			       //passing the city
                   data: { 
			          serverAddress:numberX
			       },
                   success: function(data) { console.log(data); //alert("this.hFinal-1 " + split_coordinates.hFinal );
				       //My add- consider the case when the address is Not found, 2018---------------------------------------------------
	                   //var status = data.status // json result returns OK||ZERO_RESULTS //Google maps Variant
					   
					   var status = data.type // json result returns OK||ZERO_RESULTS //MAPBOX
	                   //if(status=="OK"){ //alert("OK"); //Google maps Variant
					   if(status=="FeatureCollection"){ //alert("OK FeatureCollection");   //MapBox Variant
					   
					   //if (data.features[0].center[1]== null) { alert("OK"); //if var defined
	                       //this.dataX2 = '<tr><td>' +   data.results[0].geometry.location.lat +   '</td><td>' + data.results[0].geometry.location.lng +   '</td></tr>';   //Google maps Variant
	                       
						   this.dataX2 = '<tr><td>' +   data.features[0].center[1] +  '</td><td>' + data.features[0].center[0] +   '</td></tr>';     //MapBox Variant
                          
					   } else { //alert("OK NOT");
	                       this.dataX2 = '<tr><td> Not Found </td><td></td></tr>';  //alert("this.dataX2" + this.dataX2);
	                   }
	                   // END My add- consider the case when the address is Not found, 2018--------------------------------------------------
	
	
                       split_coordinates.hFinal = split_coordinates.hFinal + this.dataX2;  //alert("this.hFinal-2 " + split_coordinates.hFinal );
                       //this.dataX = this.dataX + dataX2; // final data
				       //alert(this.dataX);
               
                  },  //end success
			      error: function (error) { //alert(data);
				      $("#resultFinal").stop().fadeOut("slow",function(){ $(this).html("<h4 style='color:red;padding:3em;'>ERROR!!! <br>Crashed</h4>")}).fadeIn(2000);
                  }	
               });
                                               
               //END AJAXed  part 
			   //------------------
              
			}
				//this.hFinal = this.hFinal + '</table></br></br></br></br></br>' ;   //alert ("newHTML= "+newHTML);
				//alert("gdgfdg FINAL  " + this.hFinal);
			    
        },
		
		
		
		
		
		//-----------------------------------------------------
		displayResults: function(){
			$("#loading").fadeOut(1900); //hide preloader
			split_coordinates.hFinal = split_coordinates.hFinal + '</table></br></br></br></br></br>' ;   //alert ("newHTML= "+newHTML);
			//alert("gdgfdg/ FINAL  " + split_coordinates.hFinal);
				
            // HTML  Result div  with  animation;
            $("#resultFinal").stop().fadeOut("slow",function(){ 
                $(this).html(split_coordinates.hFinal)
            }).fadeIn(2000);

            $("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div
            //HideInstructions();
        },
		
		
	}