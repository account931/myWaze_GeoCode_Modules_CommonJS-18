import React, { Component } from 'react';
//import logo from './logo.svg';
import './css/App.css';
import Header from './MyComponents/Header/Header';
import ButtonsLayout from './MyComponents/Buttons/ButtonsLayout';
import Instructions from './MyComponents/Instructions/Instructions';
import Results from './MyComponents/Result/Results';
import TextAreaX from './MyComponents/TextArea/TextArea';



class App extends Component {
  render() {
    return (
	 
	    <div className="wrapper grey">
            <div className="container">{ /*<!-- container-full -->*/}
	            <div className="row row1">
				
                    <div className="col-sm-12 col-xs-12 divX App"> 
		                <h4>myWaze React</h4>
			            <Header nameX = "ReactJS"/>  { /* header component*/ }
						<ButtonsLayout/>  { /* buttons component */ }
						<Instructions/>   { /* instructions component */ }
						<Results/>        { /* results component */ }
						<TextAreaX/>       { /* textarea component */ }
						
		            </div>
					
			    </div>
			</div>
		</div>
	
	
	  
    );
  }
}

export default App;
