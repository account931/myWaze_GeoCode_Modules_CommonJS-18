import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../css/State_Array_List_Builder.css';




class State_Array_List_Builder extends Component {



  
  render() {
	let constructed_answer = '';
	//checks if passes props is array or string
	if( typeof this.props.numbers === 'string' ) { //will never fire, just for test
	   if(this.props.numbers === ''){ //if props empty stop it
		   return false;
	   }
	    //alert("String detected in State_Array_List_Builder");
		//instead of alert, it calls parent method from child {this.props. + method}-> passing/uplifting alert info to method techInfoHandler described in Parent App.js
	    //this.props.techInfoHandler("String detected in State_Array_List_Builder"); 
		
		constructed_answer = <p> {this.props.numbers}</p>;
		
	} else {
		
	   //alert("Array in State_Array_List_Builder ");
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
	  <h6 className="underline">State_Array_List_Builder</h6>
	      {constructed_answer} {/* displays array from parent App.js state, either can be final coordinates or set by click in <LiftedFrom_Component/> string value */}
	  </div>
  );
}	

}

export default State_Array_List_Builder;
