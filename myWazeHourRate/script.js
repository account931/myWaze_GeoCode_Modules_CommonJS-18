





function Fdouble(waze){
var vv=document.getElementById('day').value;
//var vm=document.getElementById('month').value;
//var bb=parseInt(bb);
var cl=document.getElementById('dubb')

document.getElementById('dubb').value=vv;
}

/*
  function resetR(){ //Clear the form
document.getElementById('day').value=null;
document.getElementById('month').value=null;
document.getElementById('year').value=null;
document.getElementById('resultUa').innerHTML=null;
document.getElementById('resultRu').innerHTML=null;
document.getElementById('dubb').value=null;
}

*/







//------------------------------------------------------------

function news()
{document.getElementById("first").style.display="none";
 document.getElementById("second").style.display="block";
 document.getElementById("third").style.display="none";
 document.getElementById("butt1").style.backgroundColor="white";
 document.getElementById("butt2").style.backgroundColor="yellow";
 document.getElementById("butt3").style.backgroundColor="white";
}



function contact()
{document.getElementById("second").style.display="none";
 document.getElementById("first").style.display="none";
 document.getElementById("third").style.display="block";
 document.getElementById("butt2").style.backgroundColor="white";
 document.getElementById("butt3").style.backgroundColor="yellow";
document.getElementById("butt1").style.backgroundColor="white";}




function about()
{document.getElementById("second").style.display="none";
 document.getElementById("third").style.display="none";
 document.getElementById("first").style.display="block";
 document.getElementById("butt3").style.backgroundColor="white";
 document.getElementById("butt1").style.backgroundColor="yellow";
 document.getElementById("butt2").style.backgroundColor="white";
}






function translater() {
var x = document.getElementById('day').value;
var y = document.getElementById('month').value;

         if (y==1)
      { y='January';}
         else if (y==2)
                 { y='February';}
         else if (y==3)
                 { y='March';}
         else if (y==4)
                 { y='April';}
         else if (y==5)
                 { y='May';}
         else if (y==6)
                 { y='June';}
         else if (y==7)
                 { y='July';}
         else if (y==8)
                 { y='August';}
         else if (y==9)
                 { y='September';}
         else if (y==10)
                 { y='October';}
         else if (y==11)
                 { y='November';}
         else if (y==12)
                 { y='December';} 

       /*  var monthR=['February','March'];
         var monthR=month;*/

/*
      switch(y){
case 1:
     y='January';
     break;
case 2:
     y='February';
     break;
case 3:
     y='March';
     break;
case 4:
     y='April';
     break;
}
*/

var z = document.getElementById('year').value;
        var st=document.getElementById('resultUa')
        var wtf=st.innerHTML='Current Date is'+' '+x+' '+y+' '+z+' ';
        
        /*document.write(wtf);*/
          




/*function Language russian*/

        var d=y;

         if (d=='January')
      { d='Январь';}
         else if (d=='February')
                 { d='Февраль';}
         else if (d=='March')
                 { d='Март';}
         else if (d=='April')
                 { d='Апрель';}
         else if (d=='May')
                 { d='Май';}
         else if (d=='June')
                 { d='Июнь';}
         else if (d=='July')
                 { d='Июль';}
         else if (d=='August')
                 { d='Август';}
         else if (d=='September')
                 { d='Сентябрь';}
         else if (d=='October')
                 { d='Октябрь';}
         else if (d=='November')
                 { d='Ноябрь';}
         else if (d=='December')
                 { d='Декабрь';}
    

        var ss=document.getElementById('resultRu')
        var not=ss.innerHTML='Сегодня'+' '+x+' '+d+' '+z ;
        alert(wtf+'\n'+not);
     }
     

      
/*END of function Language russian*/













function Fdouble(waze){
var vv=document.getElementById('day').value;
var vm=document.getElementById('month').value;
var bb=parseInt(bb);
var cl=document.getElementById('dubb')


document.getElementById('dubb').value=vv+' '+' '+vm;
/*if(vv=='')
{cl==null;}

  if( vv.which!=8 && vv.which!=0 && (vv.which<48 || vv.which>57))
{alert('wrong';)}

if((event.keyCode < 48)||(event.keyCode > 57)) event.returnValue=false;   */
}





/*function translater()
 {var x=document.getElementById("day").value;
  var y=document.getElementById("month").value;
  var z=document.getElementById("year").value;
        document.getElementById("resultUa").innerHTML=x;}*/
 







  /*Checking if Numbers
 function chechIt()
 {
var rest=document.getElementById('day').value;
if (rest<48||rest>57)
{alert("Lucky");}


*/



/*
	if (value=='') {
		return true;
	}
	var parsedValue=parseInt(value);
	if (parsedValue<0) {
		return false;
	}
	if (parsedValue!=value) {
		return false;
	}
	return true;
} */
/*
{return !isNaN(parseFloat(x)) && isFinite(x)}*/













