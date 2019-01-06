import React, { Component } from 'react';
import TrendTopic from './TrendTopic';
//import logo from '../../images/api.jpeg';
//import '../../css/LiftedComponent.css';
//import $ from 'jquery';


class LiftedTo_Component extends Component {
	constructor(props) {
        super(props);
        this.state = {
        };
   }
  
 
  
  //RENDER ------------------------------------------------
  render() {
	  
    return (
	   
	   <div className="lifted-to">
		   <h4>
		       LiftedTo_Component is => {this.props.liftedValue}
		   </h4>   
		   


 

			   
			   
		  
		   
	   </div>
	  
    );
  }
}

export default LiftedTo_Component;
