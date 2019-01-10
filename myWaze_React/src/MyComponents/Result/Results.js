import React, { Component } from 'react';
//import logo from '../../images/api.jpeg';
import '../../css/Results.css';
import $ from 'jquery';

class Results extends Component {
  render() {
	  $("#loading").fadeOut(1900); //hide preloader
	  let constructed_answer = '';
	  let final_all = '';
	  let flag = false;
	  
	  //check if this props in null
	  if(this.props.resultX.length === 0){
		  alert(88); 
		  flag = false;
		  return false; //new breaking
		  }
	  //checks if passes props is array or string  
	  if( typeof this.props.resultX === 'string' ) { //will never fire, just for test
	    //$("#resultFinal").html("");
		alert(2222);
		flag = false;
	    return false; //new breaking
		
		
	    //alert("String detected in State_Array_List_Builder");
		//instead of alert, it calls parent method from child {this.props. + method}-> passing/uplifting alert info to method techInfoHandler described in Parent App.js
	    //this.props.techInfoHandler("String detected in State_Array_List_Builder"); 
		
		constructed_answer = <p> {this.props.resultX}</p>;
		
	} else {
		alert(2222);
		//final_all = "<p class='red'>React Results found => " + this.props.resultX.length/2 + "</p>"; //must be at least empty defined to avoid "undefined" appearance
		//final_all += "<table id='tableResults'>"; //adding div that will be copied further
		
	   //alert("Array");
       constructed_answer = this.props.resultX.map((coords, i, arrayX) =>{ {/* maps() args=>(content, iterator, arryitself)*/}
	       if (i%2 === 0) {
	       return(
               <tr key={coords.toString()}>
			       <td>
		              {coords} 
				   </td>
				   
				   <td>
				      {arrayX[i + 1]}  {/* next coors from array */}
				   </td>
		       </tr>
		   );
		   }
		
       })
	   flag = true;
	}
	
	
	  if(flag === true){
	  // HTML  Result div  with  animation;
        $("#resultFinal").stop().fadeOut("slow",function(){ 
            //$(this).html(res)
        }).fadeIn(2000);

        $("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div
		
		$("#copyButton").css("display","block");
	  }
	  
	//alert(constructed_answer);
    //END checks if passes props is array or string
	  
	  
    return (
	    <div className="results" id="resultFinal">
		    <p className='red'> React Results found =>  {this.props.resultX.length/2}  </p>
			<table id='tableResults'> { /* adding id that will be copied further */ }
	            { /*  final  results  go  there  */} 
		        {constructed_answer}
			</table>
        </div>
	  
    );
  }
}

export default Results;
