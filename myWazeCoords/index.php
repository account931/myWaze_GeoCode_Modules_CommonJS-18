<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="Content-Type" content="text/html">
      <meta name="description" content="разделитель координат" />
      <meta name="keywords" content="разделитель координат, разделить lat lon">
      <title>Split  coords</title>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
      <script src="myCore.js"></script>
	  <script src="additional_js/ads.js"></script>
	  
	  <!--Favicon-->
      <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">

      <style>
        .shadowX{text-shadow: grey 5px 5px 3px;}
        td{width:100px;}
        //body{
          background: #603813; /* fallback for old browsers */
          background: -webkit-linear-gradient(to left, #603813 , #b29f94); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to left, #603813 , #b29f94); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }


        /*body{background:#f5f5f0;background-image: url('http://lamcdn.net/lookatme.ru/post_image-image/jVvLJ_BToiLcuNxPNKhNRw-article.png');   } */     /* background-image: url('images/ch_back.png');    https://www.waze.com/assets/press/map_wazers@2x-e52b336c63ce7d3ee56b4aa7fe853007.png*/
       /*  https://www.google.ca/logos/doodles/2015/googles-new-logo-5078286822539264.2-hp.gif -draw logo  */
      /* http://lamcdn.net/lookatme.ru/post_image-image/jVvLJ_BToiLcuNxPNKhNRw-article.png   -just  logo*/
      table{} 
      #flashMessage{color:red;font-size:23px;}
      .gradient{
        background: #f79d00; /* fallback for old browsers */
        background: -webkit-linear-gradient(to left, #f79d00 , #64f38c); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to left, #f79d00 , #64f38c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }

       /*animation*/
       #GN, #ads  {
         -webkit-transition: -webkit-transform .8s ease-in-out;
          transition: transform .8s ease-in-out;
       }
       #GN:hover {
         -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
		
		#ads:hover {
			 -webkit-transform: scale(1.2);
             transform: scale(1.2);
		}
    </style>

    </head>
    <body>
      <div style="background-color:#f5f5f0;padding:33px;margin-top:50px;margin-left:30px;width:40%;box-shadow: inset 0 0 1em white, 0 0 8em black;"> <!--*box-shadow: inset 0 0 1em gold, 0 0 1em red*/-->
        <h2 class='shadowX' colorl:red;>Split your coordinates</h2>  <!--<img src="http://vyhravam.teraz.sk/public/data/menuicons/map.png"/>-->
          <img style="width:30%;" src="http://example2.esy.es/myWazeCoords/images/maps.png"/>
		  <img id="GN" style="width:12%;margin-bottom:35px;" src="http://example2.esy.es/myWazeCoords/ignn.png" title="Don't worry, be happy"/><br>

          <!-- Upper  buttons-->
          <input type="button" value="example" id="examplebutton"> 
		  <input type="button" value="instructions" id="instructionButton"> 
		  <input type="button" value=" clear " id="clearButton">

          <!-- INSTRUCTIONS-->
          <p id="hiddenInstructions" style="display:none; width:81%;background:#ebebe0;padding-left:10px;"><!--<span id="closeIt" style="cursor:pointer;">close</span>-->
         <!--RU-->

         <br><br>
<a href='https://drive.google.com/open?id=0B5Zu5voo1IuoMHl6WU4xM1J3M28' target="_blank" style="font-size:18px; "/>&#1057;&#1084;&#1086;&#1090;&#1088;&#1077;&#1090;&#1100; &#1042;&#1080;&#1076;&#1077;&#1086; &#1048;&#1085;&#1089;&#1090;&#1088;&#1091;&#1082;&#1094;&#1080;&#1102;</a> <br><span style="font-size:10px">(&#1086;&#1090;&#1082;&#1088;&#1099;&#1074;&#1072;&#1090;&#1100; &#1074;  FullScreen,&#1074; &#1076;&#1088;&#1091;&#1075;&#1080;&#1093;  &#1088;&#1077;&#1078;&#1080;&#1084;&#1072;&#1093; GDrive  &#1088;&#1077;&#1078;&#1077;&#1090;  &#1082;&#1072;&#1095;&#1077;&#1089;&#1090;&#1074;&#1086; )</span><br><br>
1.&#1041;&#1077;&#1088;&#1077;&#1084; &#1085;&#1077;&#1086;&#1073;&#1093;&#1086;&#1076;&#1080;&#1084;&#1086;&#1077; &#1082;-&#1083; &#1103;&#1095;&#1077;&#1077;&#1082; &#1089; &#1085;&#1077;&#1088;&#1072;&#1079;&#1076;&#1077;&#1083;&#1077;&#1085;&#1085;&#1099;&#1084;&#1080; &#1082;&#1086;&#1086;&#1088;&#1076;&#1080;&#1085;&#1072;&#1090;&#1072;&#1084;&#1080; &#1080; &#1082;&#1086;&#1087;&#1080;&#1088;&#1091;&#1077;&#1084; &#1074; &#1073;&#1091;&#1092;&#1077;&#1088;.<a href='http://example2.esy.es/myWazeCoords/images/example.png' target="_blank"/>&#1055;&#1088;&#1080;&#1084;&#1077;&#1088;</a><br>
Выделение не должно содержать ничего, кроме неразделенных координат (not found и прочее содержание недопустимо).<br>
2.Вставляем в форму + нажимаем кнопку "Separate".<br>
3.Получив результат, нажимаем кнопку "Copy", тем самым копируя результат обратно в буфер.<br>
4.Возвращаемся в рабочую таблицу, ставим курсор на первую ячейку и выбираем опцию "Вставить" или Ctrl+V (Предыдущие неразделенные координаты при этом можно не удалять, они автоматически будут заменены).<br>
5.Будьте внимательны! В случае ошибочного копирования в неправильную ячейку - используйте CTRL+Z. Кнопкой "Example" можно загрузить пример в форму.<br>

<br><br>


       <!-- END RU-->
       <br><br><!--1.Copy several rows of non-separated  coordinates  from  your  spreadsheet<br> 2.Paste them to  the  form below<br> 3.Click "Separate"  button<br>4.Copy separated  coordinates (by clicking "copy" button ) & paste them back  to  your  spreadsheet all at once.Don't forget to  place focus on the  first cell before pasting <br>P.S You can  run a demo  with  "Example" button<br><br><br>--><br></p>
       <!--END  INSTRUCTIONS-->

       <p id="result"></p><!--not used-->
       <p id="resultFinal" style="padding-left:10px;background:#f5f5f0;"></p><!-- final  results  go  there-->



       <form action="">
           <textarea id="coordsInput" rows="8" cols="50"  style="width:98%;">
           </textarea><br>
           <input type="button" value="Separate" id="splitButton">
       </form>
  </div>
<!--50.264120, 28.679017
60.264120, 38.679017
70.264120, 48.679017-->






<!-- Ads block -> Link to Youtube-->
    <div id="ads" class="shadowX" style="position:absolute; top:10px; right:2%;padding:12px;border-radius:19px;background:grey;box-shadow: inset 0 0 1em white, 0 0 2em black;">
	  <a href="https://www.youtube.com/watch?v=u6PPhN_bXEA" id="adsLink" target="_blank" style="color:white;">
	      <span id="adsSpan" style="font-size:0.9em;">Автоматический Геокодинг</span><br>
		  <!--<img  src="https://cdn.business2community.com/wp-content/uploads/2014/10/local-seo6.jpg" alt="" style="width:30%;"/>-->
	  <a>	  
	</div>
<!-- Ads block -> Link to Youtube-->






<?php
// Record (with CLASS) all the  input  to  txt;  //;
      include("Classes/RecordTxt.php");
      RecordTxt::RecordAnyInput(array(), 'recordText/myWazeCoords.txt');// Record  to  text;
//End  Record;

?>

</body>
</html>
