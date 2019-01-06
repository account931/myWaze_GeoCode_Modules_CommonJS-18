import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../css/State_Array_List_Builder.css';





class State_Array_List_Builder extends Component {



  
  render() {
	let constructed_answer = '';
	//checks if passes props is array or string
	if( typeof this.props.numbers === 'string' ) { //will never fire, just for test
	    alert("String");
		constructed_answer = <p> {this.props.numbers}</p>;
		
	} else {
		
	   //alert("Array");
       constructed_answer = this.props.numbers.map((number, i, arrayZ) =>{ {/* maps() args=>(content, iterator, arryitself)*/}
	       if (i%2 === 0) {
	       return(
               <li key={number.toString()}>
		          {number} " ->"  {arrayZ[i + 1]}
		       </li>
		   );
		   }
       })
	   
	}
	//alert(constructed_answer);
    //END checks if passes props is array or string

	
  
  
  return (
      <div>
	  <p>...</p>
	  <h6>State_Array_List_Builder</h6>
	      {constructed_answer}
	  </div>
  );
}	

}

export default State_Array_List_Builder;
