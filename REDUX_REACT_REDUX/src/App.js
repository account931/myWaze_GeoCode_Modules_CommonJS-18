import React, { Component } from 'react';
import logo from './logo.svg';
//import logo from './images/redux_react.png';
import './css/App.css';
import Header from './MyComponents/Header/Header';
import ButtonsLayout from './MyComponents/Buttons/ButtonsLayout';
import Instructions from './MyComponents/Instructions/Instructions';
import Results from './MyComponents/Result/Results';
import TextAreaX from './MyComponents/TextArea/TextArea';
import LiftedFrom_Component from './MyComponents/LiftUpComponent/LiftedFrom_Component';

import ErrorLayout from './MyComponents/Error/ErrorLayout';  //display error gif
import Technical_Info from './MyComponents/Tech_Info/Technical_Info';  //displays info instead of alert

//REDUX import
import ReduxTest_Component from './MyComponents/ReduxTest/ReduxTest_Component';  //ReduxTest_Component

// Add these imports - Step 1
import { Provider } from 'react-redux';
//import { store } from './Redux_actions_reducers_store/redux';
import { store } from './Redux_actions_reducers_store/store/redux_store';
//END REDUX import

class App extends Component {
    constructor(props) {
        super(props);
		
		this.state = {
		    arg1: [],  //this state will hold lifted up var(onClick) or  array with coordinates
		    finalCoords:[], //not used???
			techInfoState:[], //state to store alert info
			baseState : []
        };
	   
        var handleToUpdate = this.handleToUpdate.bind(this);  //for catching lifted state from LiftedFrom_Component
		var liftFinalCoordsHandler = this.liftFinalCoordsHandler.bind(this);  //for catching lifted state from TextArea Comp
		var clearStateHandler = this.clearStateHandler.bind(this);  //cathes lifted state from Buttons layout - //for lifting and clearing the state up in the parent
		var techInfoHandler = this.techInfoHandler.bind(this);  //for lifting techInfo(instead of alerts)the state up in the parent
        var reset_techInfo_State = this.reset_techInfo_State.bind(this);  //   

        // preserve the initial state in a new object
        this.baseState = []; //this.state.arg1; 		
    } //end constructor

	/*
	componentWillMount() {
        this.initialState = this.state
    } */
	
	
	
	
	
	//methodfor catching lifted state from LiftedFrom_Component, triggerd onClick
    handleToUpdate(someArg){
            //alert('We pass argument from Child to Parent (now we are in <App/>): ' + someArg);
            this.setState({arg1:someArg});
    }
	
	
	//method for catching lifted state from TextArea.js Component, triggered manually by {this.props.liftFinalCoordsHandler(this.state.coordinateArray[0])} in TerxArea.js
    liftFinalCoordsHandler(someArgCoords){
            //alert('TextArea value data lifted from Child(TextArea.js) to Parent(App.js): ' + someArgCoords);
			//instead of alert, it calls parent method from child {this.props. + method}-> passing/uplifting alert info to method techInfoHandler described in Parent App.js
	       //this.techInfoHandler('TextArea value data lifted from Child(TextArea.js) to Parent(App.js): ' + someArgCoords); 
			
           this.setState({arg1:someArgCoords});
    }
	
	//WORKING!!!!!!! - clearing/reseting state arg1 onClick button="Clear"
	clearStateHandler(vv){
            //alert('Cleared' + vv);
            this.setState({arg1:''});
    }
	
	
	//for lifting techInfo(instead of alerts)the state up in the parent
	techInfoHandler(techAlert){
		const alertTempArray = this.state.techInfoState; //getting state to temp array
		alertTempArray.push(techAlert); //adds to array in this way: addressArray = [[arrayX2]];
		this.setState({ //sets new value to state
           techInfoState: alertTempArray
       }); 
	}
	

	
	//for clearing state techInfoState on every Button click
	reset_techInfo_State(some){
		//this.setState(this.initialState);
		//alert("resetting");
		//alert("this.baseState-> " + this.baseState );
		this.setState({ //sets new value to state //setState is an async function
           techInfoState: this.state.baseState
       }); 
	}

	
	
  render() {
	  var handleToUpdate =  this.handleToUpdate; //for catching lifted state from LiftedFrom_Component
	  var liftFinalCoordsHandler  =   this.liftFinalCoordsHandler; //for catching lifted state from TextArea.js Component
	  var clearStateHandler =  this.clearStateHandler ; //for lifting and clearing the state up in the parent
      var techInfoHandler = this.techInfoHandler;  //for lifting techInfo(instead of alerts)the state up in the parent
	  var reset_techInfo_State = this.reset_techInfo_State;  
	  
    return (
	 
	    <div className="wrapper grey">
            <div className="container"> {/*<!-- container-full -->*/}
	            <div className="row row1">
				
                    <div className="col-sm-12 col-xs-12 divX App"> 
					
		                <h6> {this.props.name} {/* props are set in index.js */}
						    <img src={logo}  className="react-logo-static" alt="logo" />
						</h6>
						
			            <Header nameX = "ReactJS + Redux"/>  { /* header component*/ }
						<ButtonsLayout clearStateHandler = {clearStateHandler.bind(this)}/>   { /* buttons component */ }
						<Instructions/>    { /* instructions component */ }
						
						<Provider store={store}> {/*Redux*/}
						    <Results resultX={this.state.arg1}/>         { /* results component */ }
						</Provider>{/*Redux*/}
						
						
						<Provider store={store}> {/*Redux*/}
						    <TextAreaX liftFinalCoordsHandler = {liftFinalCoordsHandler.bind(this)}  techInfoHandler={techInfoHandler.bind(this)} reset_techInfo_State={reset_techInfo_State.bind(this)} />       { /* CORE textarea component */ }
					    </Provider>{/*Redux*/}
					
						<Technical_Info techInfoData={this.state.techInfoState}  numbers={this.state.arg1}  handleToUpdate = {handleToUpdate.bind(this)} /> { /* displays info instead of alert */ }
						{ /* Componenents that has gone to Technical_Info : <LiftedFrom_Component handleToUpdate = {handleToUpdate.bind(this)}/> +   <LiftedTo_Component liftedValue={this.state.arg1}/> + <State_Array_List_Builder numbers={this.state.arg1}  />  */}
						
						<Provider store={store}> { /*Redux*/ }
						    <ReduxTest_Component/> { /*Redux*/ }
			            </Provider>
						
						
		            </div>
					
			    </div>
			</div>
			    <ErrorLayout/> { /* error gif animation component */ }
		</div>
	
	
	  
    );
  }
}

export default App;
