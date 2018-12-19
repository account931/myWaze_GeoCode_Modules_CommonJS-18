import React, { Component } from 'react';
//import logo from '../../images/api.jpeg';
import '../../css/TextArea.css';
import $ from 'jquery';

class TextAreaX extends Component {
	constructor(props) {
    super(props);
    this.state = {
		addressArray: ['bc'],
    };
 
    // This binding is necessary to make `this` work in the callback
    this.getAjaxApiResult = this.getAjaxApiResult.bind(this);
	this.getFormValue = this.getFormValue.bind(this);
  }
  
  //-----------------
  getAjaxApiResult() {
	  this.getFormValue();
  }
  
  
  
  getFormValue(){
	  if ($("#coordsInput").val().trim()==""){
		 //Display error
		 alert("empty");
         return false;		 
	   }
	   let textareaX = $("#coordsInput").val(); //alert(textarea);
       textareaX = textareaX.trim();
	   let arrayX2 = textareaX.split('\n');
	   alert(arrayX2 );
	   
	   //this.setState(prevState => ({
      // addressArray: [prevState.addressArray, arrayX2]
       //}));
	   
	   this.setState({addressArray: this.state.addressArray.concat(["new valuecc"])});
	   
	   //this.setState({addressArray: [arrayX2]});   
	   alert(this.state.addressArray);
	   $("#coordsInput").val(this.state.addressArray);
  }
  
  
  
  render() {
    return (
	   <div>
	   <form className="textarea-my" >
            <textarea id="coordsInput" rows="8" cols="80" placeholder="Your address here to geocode..." /> 
            <input type="button" className="btn btn-primary btn-md" value="Geocode" id="splitButton" onClick={this.getAjaxApiResult} />
        </form>
		</div>
	  
    );
  }
}

export default TextAreaX;
