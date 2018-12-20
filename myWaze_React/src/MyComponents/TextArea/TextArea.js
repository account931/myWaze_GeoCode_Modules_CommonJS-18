import React, { Component } from 'react';
//import logo from '../../images/api.jpeg';
import '../../css/TextArea.css';
import $ from 'jquery';
import axios from 'axios';

class TextAreaX extends Component {
	constructor(props) {
    super(props);
    this.state = {
		addressArray: [],  //this state will hold array with separ addresses
		coordinateArray: ['v'],  //this state will hold array with ready coordinates returned by axios
    };
 
    // This binding is necessary to make `this` work in the callback
    this.getAjaxApiResult = this.getAjaxApiResult.bind(this);
	this.getFormValue = this.getFormValue.bind(this);
  }
  

  // **************************************************************************************
  // **************************************************************************************
  //                                                                                     **
  getAjaxApiResult() {
	  this.getFormValue();
	  this.runAjax();
  }
  // **                                                                                  **
  // **                                                                                  **
  // **************************************************************************************
  // **************************************************************************************
  
  
  
  
  
  //gets the textarea value, split it to arraye and set to state
  // **************************************************************************************
  // **************************************************************************************
  //                                                                                     **
  getFormValue(){
	  if ($("#coordsInput").val().trim()===""){
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
	   
	   //adding arraay with address to state---------
	   const addressTempArray = this.state.addressArray; //getting state to array
	   /*addressTempArray.forEach(item => {  //this is var if u want to add existing array new values
           addressTempArray.push(arrayX2); 
       });
	   */
	   addressTempArray.push(arrayX2); //adds to array in this way: addressArray = [[arrayX2]];
	   //addressTempArray = arrayX2;
       this.setState({ //sets new value to state
           addressArray: addressTempArray
       }); 
	   //this.setState({addressArray: [arrayX2]}); 
	   //END adding arraay with address to state-----
	   
	     
	   alert(this.state.addressArray[0][0]);
	   //$("#coordsInput").val(this.state.addressArray);
  }
  // **                                                                                  **
  // **                                                                                  **
  // **************************************************************************************
  // **************************************************************************************
   
   
   
   
   //runs axios ajax
   // **************************************************************************************
   // **************************************************************************************
   //                                                                                     **
       runAjax() {
		   var temp = []; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!! VISIBILITY
		   for (let j = 0; j < this.state.addressArray[0].length; j++) { 
               axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + this.state.addressArray[0][j] + '.json?country=us&access_token=pk.eyJ1IjoiYWNjb3VudDkzMSIsImEiOiJjaXgwOTVuOTEwMGFxMnVsczRwOWx0czhnIn0.YjZ5bpnh6jqTEk7cCJfrzw')   
               .then(function (response) {
                   //alert(JSON.stringify(response, null, 4)); 
                   //alert(response.data.features[0].center[1] +  ' = ' + response.data.features[0].center[0]);	
                    temp.push(response.data.features[0].center[1], response.data.features[0].center[0]);
                    //alert(temp);						
                });
		   }
		   alert(temp);
		   //adding arraay with with final ajax coordinates to state---------
	       const coordsTempArray = this.state.coordinateArray; //getting state to array	
           coordsTempArray.push(temp); //adds to array in this way: addressArray = [[arrayX2]];	
           this.setState({ //sets new value to state
               coordinateArray: coordsTempArray
           }); 
		   alert("final " + this.state.coordinateArray[0]);
					
	   }
   // **                                                                                  **
   // **                                                                                  **
   // **************************************************************************************
   // **************************************************************************************
   
   
  
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
