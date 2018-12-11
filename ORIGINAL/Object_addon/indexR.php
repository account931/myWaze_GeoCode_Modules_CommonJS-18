<!DOCTYPE html>
<html>
<head>
<title>Harcore Api Geocoding</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="myCore.js"></script>

<style>
.shadowX {text-shadow: grey 5px 5px 3px;}
td {width:100px;}
//body{

background: #603813; /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #603813 , #b29f94); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #603813 , #b29f94); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        
}


/*body{background:#f5f5f0;background-image: url('http://lamcdn.net/lookatme.ru/post_image-image/jVvLJ_BToiLcuNxPNKhNRw-article.png');   } */     /* background-image: url('images/ch_back.png');    https://www.waze.com/assets/press/map_wazers@2x-e52b336c63ce7d3ee56b4aa7fe853007.png*/
/*  https://www.google.ca/logos/doodles/2015/googles-new-logo-5078286822539264.2-hp.gif -draw logo  */
/* http://lamcdn.net/lookatme.ru/post_image-image/jVvLJ_BToiLcuNxPNKhNRw-article.png   -just  logo*/
table{} 
#flashMessage {color:red;font-size:23px;}
.gradient {
background: #f79d00; /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #f79d00 , #64f38c); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #f79d00 , #64f38c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }

/*animation*/

#ap {
  -webkit-transition: -webkit-transform 1.8s ease-in-out;
          transition:         transform 1.8s ease-in-out;
}

#ap:hover {
    -webkit-transform: rotate(1440deg);
            transform: rotate(1440deg);
		  
}
</style>

</head>


<body>
    <div style="background-color:#f5f5f0;padding:33px;margin-top:50px;margin-left:30px;width:77%;box-shadow: inset 0 0 1em white, 0 0 8em black;"> <!--*box-shadow: inset 0 0 1em gold, 0 0 1em red*/-->
        <h2 class='shadowX' colorl:red;>Hardcore Geocoding<span style='font-size:12px'> &nbsp; ( **** API )</span>
		</h2>
        <!--<img src="http://carbonmonoxidedetectorbeeping.com/wp-content/uploads/2015/02/carbon-monoxide-hazard-symbol.jpg"/></br>-->
        <!--<img src="images/illigal.jpg"/>-->
        <span id='api'><img id="ap" src="images/api.jpeg"/> </span> &nbsp; &nbsp; <span id='loading' style='display:none;'><img  style ="width:100px;" src="images/loading2.gif"/></span>  <span id="loadAjax"> </span>
        <span id='addressQuantity' style='color:red'></span>
 
        </br></br>
 

<!-- Upper  buttons-->
        <input type="button" value="example" id="examplebutton"> <input type="button" value="instructions" id="instructionButton"> <input type="button" value=" clear " id="clearButton">
 
        <select>
            <option value="us">US</option>
            <option value="1">Other Country</option>
            <option value="2">Other Country1</option>
        </select>

<!-- INSTRUCTIONS-->
        <p id="hiddenInstructions" style="display:none; width:81%;background:#ebebe0;padding-left:10px;"><!--<span id="closeIt" style="cursor:pointer;">close</span>-->
<!--RU-->
            </br></br>
            <a href='https://drive.google.com/open?id=0B5Zu5voo1Iuock1GelQ0OXpOLTg' target="_blank" style="font-size:18px; "/>
                View Video Instructions
		    </a>
            </br></br>

<!-- END RU-->
            </br></br><!--1.Copy several rows of non-separated  coordinates  from  your  spreadsheet</br> 2.Paste them to  the  form below</br> 3.Click "Separate"  button</br>4.Copy separated  coordinates (by clicking "copy" button ) & paste them back  to  your  spreadsheet all at once.Don't forget to  place focus on the  first cell before pasting </br>P.S You can  run a demo  with  "Example" button</br></br></br>-->
		    </br>
		</p>
<!--END  INSTRUCTIONS-->

        <p id="result"></p><!--not used-->
        <p id="resultFinal" style="padding-left:10px;background:#f5f5f0;"></p><!-- final  results  go  there-->



        <form action="">
            <textarea id="coordsInput" rows="8" cols="80" style="width:96%;">
            </textarea>
			</br>
            <input type="button" value="Let's do it" id="splitButton">
        </form>
</div>




<?php
// Record (with CLASS) all the  input  to  txt;  //;
      include("Classes/RecordTxt.php");
      RecordTxt::RecordAnyInput(array(), 'recordText/myWazeCoords.txt');// Record  to  text;
//End  Record;

?>

</body>
</html>
