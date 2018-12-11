
	var split_coordinates = {
		 
		d: "",
		arrayX2: "",
		dataX: "",
		hFinal: "",
		
		getFormValue : function() {
			//var textareaX, arrayX2, d, hFinal;
			
	        textareaX = $("#coordsInput").val(); //alert(textarea);
            textareaX = textareaX.trim();
            this.arrayX2 = textareaX.split('\n');/*.join(',').split(','); */
			//alert(this.arrayX2);
			
			this.d = this.arrayX2.length; //alert('address array contains -> '+d);
			split_coordinates.hFinal='</br><p style="color:red;">RESULTS => found '+ split_coordinates.d +  '</br> </br><input type="button" value="Copy" id="copybutton"><span id="flashMessage"></span> </br></br><table id="tableResults">';
            
		},
		
		
		
		
		
		//--------------------------------------------------------
		getAjaxCoordinates: function(){
            var dataX = ''; 	alert(split_coordinates.arrayX2);
			//New-Async WORKSSSSS*********************************
            for (j = 0; j < split_coordinates.d; j++) {  //j+=2
               //alert(split_coordinates.arrayX2[j]);
			   
			   
			   
			   
			   //-----------------
			   // send  data  to  PHP handler  ************ 
        $.ajax({
            url:  'https://maps.googleapis.com/maps/api/geocode/json?address=' + split_coordinates.arrayX2[j] + '&key=AIzaSyANSd5IMYTCcMx6Hap44FXd6_zDo1dklh8',
            type: 'POST',
			dataType: 'JSON', // without this it returned string(that can be alerted), now it returns object
			 //async: false,
			//passing the city
            data: { 
			    //serverCity:window.cityX
			},
            success: function(data) {
				//My add- consider the case when the address is Not found, 2018---------------------------------------------------
	            var status = data.status // json result returns OK||ZERO_RESULTS
	            if(status=="OK"){
	                dataX2 = '<tr><td>' +     data.results[0].geometry.location.lat +   '</td><td>' + data.results[0].geometry.location.lng +   '</td></tr>'; 
	            } else {
	                dataX2 = '<tr><td> Not Found </td><td></td></tr>'; 
	            }
	            // END My add- consider the case when the address is Not found, 2018--------------------------------------------------
	
	

                dataX = dataX + dataX2; // final data
				alert(dataX);
               
            },  //end success
			error: function (error) {
				$("#resultFinal").stop().fadeOut("slow",function(){ $(this).html("<h4 style='color:red;padding:3em;'>ERROR!!! <br>Crashed</h4>")}).fadeIn(2000);
            }	
        });
                                               
       //  END AJAXed  part 
			   //------------------
			   
			   
		
              
			}
				split_coordinates.hFinal = split_coordinates.hFinal + dataX + '</table></br></br></br></br></br>' ;   //alert ("newHTML= "+newHTML);
				alert("gdgfdg " + split_coordinates.hFinal);
			    
        },
		
		
		
		
		
		//-----------------------------------------------------
		displayResults: function(){
            // HTML  Result div  with  animation;
            $("#resultFinal").stop().fadeOut("slow",function(){ 
                $(this).html(split_coordinates.hFinal)
            }).fadeIn(2000);

            $("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div
            //HideInstructions();
        },
		
		
	}