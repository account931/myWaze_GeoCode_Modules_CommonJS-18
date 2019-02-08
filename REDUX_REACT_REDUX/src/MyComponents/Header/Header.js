import React, { Component } from 'react';
import logo from '../../images/api.jpeg';
//import logo from '../../logo.svg';
//import logo from '../../images/reduxx.png';
import logo2 from '../../images/loading2.gif';
import logoReactRedux from '../../images/redux_react.png';
import '../../css/Header.css';

class Header extends Component {
  render() {
    return ( 
	 
	<div>
	    <h1 className="h1-class">
		    Geocoding Module =>  {this.props.nameX}  
		    <p>
			  <img src={logoReactRedux}  className="react-redux-logo" alt="logo"/> {/*  react redux img */}
			</p>
		</h1>
		
	    <img src={logo} id="ap" className="App-logo" alt="logo" /> {/*  rotating img */}
		
		<span id='loading'>
			<img src={logo2}  className="img-header" alt="logo" />  {/*  hidden by default */}
		</span>  
		
		<span id="loadAjax"> </span>
        <span id='addressQuantity' className="red"></span>
	</div>
	
     
	  
    );
  }
}

export default Header;
