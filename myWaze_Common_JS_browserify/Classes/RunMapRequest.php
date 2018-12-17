<?php

//include MapBox credentails in separate file to easily manipulate with localhost/Hostinger Server settings
include '../api_credentials/credentials.php';


    //triggered by ajax request in geo_mapbox_core.js/->modules-> split_coordinates.getAjaxCoordinates()
	//sends request to MapBox API and echo the json answer back to js
	
	class RunMapRequest
	{
		public static function ask_Map_Api()
		{
			
		    // get the $address from ajax JS request,
            $address = $_GET['serverAddress'];
	      
	
	        //form the URL for weather API
	         $data_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'.$_GET['serverAddress'].'.json?country=us&access_token='.ACCESS_TOKEN;
			//$data_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/3525 W Carson St, Torrance, CA 90503.json?country=us&access_token=' .ACCESS_TOKEN;
	        //echo "<br>url " . $data_url;
	
	
	/*
	        // Gets the OpenWeather API
            if (!$json = file_get_contents($data_url)) {
		       echo "<br>City Error</br>";
	        }
          
            //$obj = json_decode($json,true);//,  true used for [], not  used  for '->';
	
           echo $json;
          //print_r($obj); // display the JSOn to screen
          //echo json_encode($obj); // MAke sure JSOn encode  gotten result 
	
	*/
			
			
			
			
			              $myCurl = curl_init();
                          curl_setopt($myCurl, CURLOPT_URL, $data_url);
                          //curl_setopt($myCurl, CURLOPT_POST, 1);  // $_POST['']
                          //curl_setopt($myCurl, CURLOPT_POSTFIELDS, urldecode(http_build_query($params))); //sends $_POST['']
                          curl_setopt($myCurl, CURLOPT_RETURNTRANSFER, true);
                          curl_setopt($myCurl, CURLOPT_SSL_VERIFYPEER, false);
                          $result = curl_exec($myCurl);
                          curl_close($myCurl);
			
			              echo $result;
			
			
	    }
	}
?>