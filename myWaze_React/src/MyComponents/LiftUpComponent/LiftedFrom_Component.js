import React, { Component } from 'react';
//import logo from '../../images/api.jpeg';
//import '../../css/LiftedComponent.css';
//import $ from 'jquery';

//Component that passes/lifts up state to Parent Component
class LiftedFrom_Component extends Component {
	constructor(props) {
        super(props);
        this.state = {
		   
        };

   }
  
 
   
  
  //RENDER ------------------------------------------------
  render() {
	  var handleToUpdate  =   this.props.handleToUpdate;
    return (
	   
	   <div>
	       <p></p><p></p><p>...</p>
		   <p>
		   Lifted up state from LiftedFrom_Component
		   </p>
		   <button onClick={() => handleToUpdate('Lifted_Var')}>
            Push me up from LiftedFrom_Component
           </button>
	   </div>
	  
    );
  }
}

export default LiftedFrom_Component;
