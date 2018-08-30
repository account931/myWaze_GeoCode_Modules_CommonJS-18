<?php
//record entries if someone clicked to view Youtube video

// Record (with CLASS) all the  input  to  txt;  //;
      include("../Classes/RecordTxt.php");
	  $textZ = $_POST['serverText'];
      RecordTxt::RecordAnyInput(array($textZ ), '../recordText/myWazeTexArea.txt');// Record  to  text;
//End  Record;






?>