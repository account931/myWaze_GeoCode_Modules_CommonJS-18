<?php header("Access-Control-Allow-Origin: *"); ?>
<?php include 'Classes/autoload.php';//uses autoload instead of manual includin each class-> Error if it is included in 2 files=only1 is accepted ?>
<!doctype html>
<!--------------------------------Bootstrap  Main variant ------------------------------------------>
  <html lang="en-US">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="Content-Type" content="text/html">
      <meta name="description" content="myConcert" />
      <meta name="keywords" content="myConcert">
      <title>Geocoding -> CommonJS</title>
  
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <!-- Fa-fa library-->
	 
      <link rel="stylesheet" type="text/css" media="all" href="css/geo_mapbox.css">

	  <meta name="viewport" content="width=device-width" />
	  
	  <!--Favicon-->
      <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
   </head>


   <body>
   
   
   <div class="wrapper grey">
     <div class="container"><!-- container-full -->
	   <div class="row row1">
				 
       <div class="col-sm-12 col-xs-12 divX "> 
           <h2 class='text-primary'> <!-- class='shadowX' -->
		        Geocoding  <span class="font-18"> Modules => CommonJS</span>
		   </h2>
		   
           <!--<img src="http://carbonmonoxidedetectorbeeping.com/wp-content/uploads/2015/02/carbon-monoxide-hazard-symbol.jpg"/><br>-->
           <!--<img src="images/illigal.jpg"/>-->
           <span id='api'><img id="ap" src="images/api.jpeg"/> </span> &nbsp; &nbsp; <span id='loading' style='display:none;'><img  style ="width:100px;" src="images/loading2.gif"/></span>  <span id="loadAjax"> </span>
           <span id='addressQuantity' style='color:red'></span>
 
           <br><br>
 

          <!-- Upper  buttons-->
          <input type="button" value="example" id="examplebutton" class="btn btn-success btn-md"> 
		  <input type="button" value="instructions" id="instructionButton" class="btn btn-primary btn-md"> 
		  <input type="button" value=" clear " id="clearButton" class="btn btn-danger btn-md">
 
          <select class="select-my">
            <option value="us">US</option>
            <option value="1">Other Country</option>
            <option value="2">Other Country1</option>
          </select>

          <!-- INSTRUCTIONS-->
          <p id="hiddenInstructions" style="display:none; width:81%;background:#ebebe0;padding-left:10px;"><!--<span id="closeIt" style="cursor:pointer;">close</span>-->
              <!--RU-->
              <br><br>
              <a href='https://drive.google.com/open?id=0B5Zu5voo1Iuock1GelQ0OXpOLTg' target="_blank" style="font-size:18px; "/>
                  View Video Instructions
		      </a>
              <br><br>
              <!-- END RU-->
              <br><br><!--1.Copy several rows of non-separated  coordinates  from  your  spreadsheet<br> 2.Paste them to  the  form below<br> 3.Click "Separate"  button<br>4.Copy separated  coordinates (by clicking "copy" button ) & paste them back  to  your  spreadsheet all at once.Don't forget to  place focus on the  first cell before pasting <br>P.S You can  run a demo  with  "Example" button<br><br><br>-->
		      <br>
		 </p>
         <!--END  INSTRUCTIONS-->

		 
		 <!-- Results -->
		<h2 id="timeline"></h2><!--not used-->
        <p class="timeline"></p><!--not used-->
        <p id="resultFinal" style="padding-left:10px;background:#f5f5f0;"></p><!-- final  results  go  there-->



        <form action="">
            <textarea id="coordsInput" rows="8" cols="80" placeholder="Your address here to geocode..." style="width:96%;" > 
            </textarea>
			<br>
            <input type="button" class="btn btn-primary btn-md" value="Geocode it" id="splitButton">
        </form>
   </div>
   
</div> <!-- End  class="row"> -->
</div> <!-- End  class="container"> -->
</div> <!-- End  class="wrapper grey"> -->




 <?php
// Record (with CLASS) all the  input  to  txt;  //;
    include("Classes/RecordTxt.php");
    //RecordTxt::RecordAnyInput(array(), 'recordText/myWazeCoords.txt');// Record  to  text;
//End  Record;
?>





      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	  
	  <script src="dist/js/bundle_js.js"></script>
	  
	  <!--<script src="js/geo_mapbox_core.js"></script><!-- Main --> 
	  <!--<script src="js/js_objects/instruction.js"></script>  <!-- Instructions --> 
	  <!--<script src="js/js_objects/load_example.js"></script> <!-- load_example -->
	  <!--<script src="js/js_objects/clear_fields.js"></script><!-- clear_fields -->
	  <!--<script src="js/js_objects/split_coordinates.js"></script><!-- split_coordinates -->
     

</body>
</html>
