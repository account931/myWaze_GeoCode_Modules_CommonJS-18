import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Header from './MyComponents/Header/Header';
import ButtonsLayout from './MyComponents/Buttons/ButtonsLayout';
import Instructions from './MyComponents/Instructions/Instructions';
import Results from './MyComponents/Result/Results';
import TextAreaX from './MyComponents/TextArea/TextArea';
import LiftedFrom_Component from './MyComponents/LiftUpComponent/LiftedFrom_Component';
import LiftedTo_Component from './MyComponents/LiftUpComponent/LiftedTo_Component';
import ErrorLayout from './MyComponents/Error/ErrorLayout';  //display error gif
import State_Array_List_Builder from './MyComponents/Build_List_from_State_Array/State_Array_List_Builder'; 



class App extends Component {
    constructor(props) {
        super(props);
		
		this.state = {
		    arg1: [],  //this state will hold lifted up var(onClick) or  array with coordinates
		    finalCoords:[], //not used???
        };
	   
        var handleToUpdate = this.handleToUpdate.bind(this);  //for catching lifted state from LiftedFrom_Component
		var liftFinalCoordsHandler = this.liftFinalCoordsHandler.bind(this);  //for catching lifted state from TextArea Comp
		var clearStateHandler = this.clearStateHandler.bind(this);
                                            
    }

	//methodfor catching lifted state from LiftedFrom_Component, triggerd onClick
    handleToUpdate(someArg){
            alert('We pass argument from Child to Parent: ' + someArg);
            this.setState({arg1:someArg});
    }
	
	
	//method for catching lifted state from TextArea.js Component, triggered manually by {this.props.liftFinalCoordsHandler(this.state.coordinateArray[0])} in TerxArea.js
    liftFinalCoordsHandler(someArgCoords){
            alert('TextArea value data lifted from Child(TextArea.js) to Parent(App.js): ' + someArgCoords);
            this.setState({arg1:someArgCoords});
    }
	
	//NOT WORKING!!!!!!!!!!!!!!!!!
	clearStateHandler(vv){
            alert('Cleared' + vv);
            this.setState({arg1:''});
    }
	
	
	
	
	


	
	
  render() {
	  var handleToUpdate  =   this.handleToUpdate; //for catching lifted state from LiftedFrom_Component
	  var liftFinalCoordsHandler  =   this.liftFinalCoordsHandler; //for catching lifted state from TextArea.js Component
	  var clearStateHandler =  this.clearStateHandler ; //for lifting and clearing the state up in the parent

	  
    return (
	 
	    <div className="wrapper grey">
            <div className="container">{ /*<!-- container-full -->*/}
	            <div className="row row1">
				
                    <div className="col-sm-12 col-xs-12 divX App"> 
					
		                <h4> {this.props.name} {/* props are set in index.js */}
						    <img src={logo}  className="react-logo-static" alt="logo" />
						</h4>
						
			            <Header nameX = "ReactJS"/>  { /* header component*/ }
						<ButtonsLayout clearStateHandler = {clearStateHandler.bind(this)}/>   { /* buttons component */ }
						<Instructions/>    { /* instructions component */ }
						<Results/>         { /* results component */ }
						<TextAreaX liftFinalCoordsHandler = {liftFinalCoordsHandler.bind(this)}/>       { /* CORE textarea component */ }
					
						
						<LiftedFrom_Component handleToUpdate = {handleToUpdate.bind(this)}/> { /* LiftedComponent component, send/uplift value onClick to App.js */ }
						<LiftedTo_Component liftedValue={this.state.arg1}/>        { /* LiftedComponent component for catching lifted state from LiftedFrom_Component to App.js */ }
						
						<State_Array_List_Builder numbers={this.state.arg1} />  {/* Component creates List from State Array*/}
		            </div>
					
			    </div>
			</div>
			    <ErrorLayout/> { /* error gif animation component */ }
		</div>
	
	
	  
    );
  }
}

export default App;
