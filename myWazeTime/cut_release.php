<?php
//Thid  is  a reduced  version  for  official  purpose- autocomplete only  two  first  fields+dates
?>
<!DOCTYPE html>
<html>
<head>
<title>Cut Release</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
</head>
<body>
<center>



<?php
// First  we  get  all params  in Php(user,date),  and  then  we apply  them  to  URL,  which is  loaded  by JS redirect in 2sec
//Can  be  used  directly with Php, but  we  use  JS for  decoration(display for  2  sec  Load.gif)
$user=$_GET['user']; //  user from URL
$year=date("Y");     //Year
$month=date('m');
$day=date('d');
$date=$year."-".$month."-".$day; //  i.e //2016-07-29;    
$dateStart=$date;      // i.e //2016-07-29+09:00  // WAS= $dateStart=$date."+09:00".???->may be it takes origin from Full myWazeTime where u placed 9.00  13.30;
$dateEnd=$date;  // WAS =$dateEnd=$date."+13:30";


// Record (with CLASS) all the  input  to  txt;  //;
      include("Classes/RecordTxt.php");
      RecordTxt::RecordAnyInput(array($user), 'recordText/cut_release.txt');// Record  to  text;
//End  Record;
?>




<div>
 <h1>Calculating  current  date and  completing  your  form for </br><span  style="color:red;font-size:26px;"> <?php echo $user;?> </span></h1>
 <img src=" http://www.downgraf.com/wp-content/uploads/2014/09/01-progress.gif?af0b37"  alt="v" /> <!-- http://www.downgraf.com/wp-content/uploads/2014/09/01-progress.gif?af0b37 -->
</div>
<script>
//redirecting  to URL IN 2  seconds
 setTimeout(function(){
       window.location = "https://docs.google.com/forms/d/e/1FAIpQLScqyMgAlTh7vz4kv4EqhQ8Xx0Nv-LLuAAZllf9ulQAqvPPQcA/viewform?entry.732072469=Kate&entry.1845541901=<?php echo $user;?>&entry.2075579474=<?php  echo $dateStart;?>&entry.163039792=<?php  echo $dateEnd;?>     ";
       <?php
       
        ?>
 }, 2000);
</script>
</center>



<?php

//echo "IN</br>";

//echo  $user."</br>".$year."</br>". $month. "</br>" . $day;

//echo "</br><a target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLScqyMgAlTh7vz4kv4EqhQ8Xx0Nv-LLuAAZllf9ulQAqvPPQcA/viewform?entry.732072469=Kate&entry.1845541901=$user'> New Link</a>";


// Redirect  to  edited  link- UNcomment  it in final  version;
//header("location:https://docs.google.com/forms/d/e/1FAIpQLScqyMgAlTh7vz4kv4EqhQ8Xx0Nv-LLuAAZllf9ulQAqvPPQcA/viewform?entry.732072469=Kate&entry.1845541901=ign_dmitriy&entry.1076665963=Venues&entry.1765260159_hour=04&entry.1765260159_minute=30");


// Original  version
//header("location:https://docs.google.com/forms/d/e/1FAIpQLScqyMgAlTh7vz4kv4EqhQ8Xx0Nv-LLuAAZllf9ulQAqvPPQcA/viewform?entry.732072469=Kate&entry.1845541901=ign_dmitriy&entry.1076665963=Venues&entry.1765260159_hour=04&entry.1765260159_minute=30");
?>





</body>
</html>





<php

//echo "111";


?>