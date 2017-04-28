<?php
//Thid  is  a reduced  version  for  official  purpose- autocomplete only  two  first  fields+dates(oudated  info)
//so  far  the  only  working  form ,   due  to  307  form  removal;
//WaveText  is  ipmlemented (for  this  only  "wavetext/index.js"  is  used)  + code (style  section + div  section)  in  this  "cut_release.php"  file
//to  use  old  version ---> comment  2  Wave Text   section +  decomment  old  variant
?>
<!DOCTYPE html>
<html>
<head>
<title>Cut Release</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>


<!--javascript:document.forms['EditForm'].state.value='browse'; document.forms['EditForm'].state2.value='main'; document.forms['EditForm'].submit();-->





<script>
$(document).ready(function(){
    $("#delete_Cookie").click(function(){
        document.cookie ='am=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        alert('Your  Cookie  was  deleted!!!');
        
    });
});
</script>






<meta name="viewport" content="width=device-width, initial-scale=1.0">



<style>
body, html {
    min-height: 100%;
    height: 100%;}

.rotIMG{width:22%;}

@media only screen and (max-width: 500px) {
    //body {background-color: lightblue;}
    .rotIMG{width:65%;}
}


@media only screen and (min-width: 768px) {}



</style>







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



//setting  the  time  depending  on  Cookie  existance ---------------------------------------
if(!isset($_COOKIE["am"])) {  
    $dateStart=$date."+09:00";      // i.e //2016-07-29+09:00  // WAS= $dateStart=$date."+09:00".???->may be it takes origin from Full myWazeTime where u placed 9.00  13.30;
    $dateEnd=$date."+13:00";  // WAS =$dateEnd=$date."+13:30";
    //set  the  cookie
     //$am_entry= "am";
     //$cookie_value = "ON";
     setcookie("am","P.M.", time() + 3600 ); // 86400* = 1 day (86400*30)
     echo "</br>Value is: NULL. It is  your  first  entry  today.Setting  time  to  09.00-13.00 ";
     
}else{
    $dateStart=$date."+14:00";      // i.e //2016-07-29+09:00  // WAS= $dateStart=$date."+09:00".???->may be it takes origin from Full myWazeTime where u placed 9.00  13.30;
    $dateEnd=$date."+18:00";
    echo "</br>It is  your  second  entry today .Setting  time  to  14.00-18.00 .Value is: " . $_COOKIE["am"];
    echo "</br><input  type='button' value='delete cookie' id='delete_Cookie'>";
}
//END setting  the  time  depending  on  Cookie  existance -----------------------------------





// Record (with CLASS) all the  input  to  txt;  //;
      include("Classes/RecordTxt.php");
      RecordTxt::RecordAnyInput(array($user), 'recordText/cut_release.txt');// Record  to  text;
//End  Record;
?>














<div style="width:100%;height:100%;">
 <h1>Calculating  current  date and  completing  your  form for </br><span  style="color:red;font-size:26px;"> <?php echo $user;?> </span></h1>

<!--</br>--><div><img  src="images/loading4.gif" class="rotIMG"/></div><!--</br>-->

 <!--<img src="https://m.popkey.co/773779/wGwwR.gif" /></br>-->
    <!-- </br></br></br></br></br></br> </br></br><img  src="https://media.giphy.com/media/10zX1dQg9wN4zu/giphy.gif"/></br>--> <!--  chain-->

<!--  old  bubbles-->
<div style="position:relative;top:-40%;">
<img src="images/load_progress.gif"  alt="v" style="width:20%;" class="bubbles" />  <img src="images/load_progress.gif"  alt="v" style="width:20%;margin-left:20%;" class="bubbles"/> 
</div>



 <!-- http://www.downgraf.com/wp-content/uploads/2014/09/01-progress.gif?af0b37 -->

</div>
<script>
//redirecting  to URL IN 2  seconds
var timerX= setTimeout(function(){
       window.location = "https://docs.google.com/forms/d/e/1FAIpQLSe_2bZELetduyT4Kpk0JQfar4hTGJk85vWmPwo01tGyJoX_0Q/viewform?c=0&w=1&entry.1498836084=Annya&entry.934979461=<?php echo $user;?>&entry.1019471599=<?php  echo $dateStart;?>&entry.195230240=<?php  echo $dateEnd;?>&&entry.468097836=Geocoding     ";
       <?php
       
        ?>
 }, 3000);//2000
</script>









<!---------------------New ------------------->
</br></br><input  type="button" id="stop_start"  value="stop"  style="width:20%;  border-radius:10px;height:28px;font-size:16px;"/>

<!---------------------Start  New  script (can  stop  redireting   to  form )-------------->
<script>
/*var timerX=setTimeout(function(){
				  window.location = "https://docs.google.com/forms/d/e/1FAIpQLSe_2bZELetduyT4Kpk0JQfar4hTGJk85vWmPwo01tGyJoX_0Q/viewform?c=0&w=1&entry.1498836084=Annya&entry.934979461=<?php echo $user;?>&entry.1019471599=<?php  echo $dateStart;?>&entry.195230240=<?php  echo $dateEnd;?>&&entry.468097836=Geocoding     ";
			   
			 }, 2000);*/


function timedCountFunction(){  
 			var timerX=setTimeout(function(){
				  window.location = "https://docs.google.com/forms/d/e/1FAIpQLSe_2bZELetduyT4Kpk0JQfar4hTGJk85vWmPwo01tGyJoX_0Q/viewform?c=0&w=1&entry.1498836084=Annya&entry.934979461=<?php echo $user;?>&entry.1019471599=<?php  echo $dateStart;?>&entry.195230240=<?php  echo $dateEnd;?>&&entry.468097836=Geocoding     ";
			   
			 }, 2000);

}






$("#stop_start").click(function(){
	if( $("#stop_start").attr("value")=="stop")
	 {
        clearTimeout(timerX);
		$("#stop_start").val("start");$("#stop_start").css("background","red");
	 }else
	 {
      timerX = setTimeout(function(){timedCountFunction()}, 1000);
	  $("#stop_start").val("stop");$("#stop_start").css("background","grey");
	 }


 }); //end  click
</script>

<!---------------------End  newscript-------------->
<!---------------------End new-------------->








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
