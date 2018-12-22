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
		coordinateArray: [],  //this state will hold array with ready coordinates returned by axios
    };
 
    // This binding is necessary to make `this` work in the callback
	this.run_This_Component_Functions_In_Queue = this.run_This_Component_Functions_In_Queue.bind(this); //runs all functions together
	this.getFormValue = this.getFormValue.bind(this);
    this.runAjax = this.runAjax.bind(this);
	this.drawResult = this.drawResult.bind(this);
  }
  
  
   //just runs all functions together
  // **************************************************************************************
  // **************************************************************************************
  //                                                                                     **
  run_This_Component_Functions_In_Queue() {
	  var promises = [];  //array that will hold all promises
	  var temp = [];     // temp array to store found coordinates before assigning it to this.state.coordinateArray
	  
	  this.getFormValue();
	  this.runAjax(promises,temp); //must pass {promises,temp} as arg to make them visible in function runAjax()
	  //this.drawResult();  //assigned to Promise.all(promises)
	  
	  
	  //All promises, The way to detect that all axios ajax were completed. 1. we add {var promises = [];} 2. {promises.push(every ajax)}
	  //runs when for loop iteration axios ajax request are completed
	  Promise.all(promises)
          .then(() => {
               alert("all promises " + temp);
			   
			   //adding array with with final ajax coordinates to this.state---------
	           const coordsTempArray = this.state.coordinateArray; //getting state to array	
               coordsTempArray.push(temp); //adds to array in this way: addressArray = [[arrayX2]];	
               this.setState({ //sets new value to state
                   coordinateArray: coordsTempArray
               }); 
		   alert("final state Promise.all length " + this.state.coordinateArray[0].length + " Array contains: " + this.state.coordinateArray[0]);
		   
		   //Draw the result
		   this.drawResult();
	  
          })
          .catch((e) => {
             // handle errors here
          });
	   // END all promises
	  
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
       runAjax(promises,temp) { //must accept args {(promises,temp)} while calling in run_This_Component_Functions_In_Queue() 
		   //var temp = []; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!! VISIBILITY
		  // var promises = []; //add array to use in Promise.all(promises
		   $("#loading").fadeIn(200); //show preloader
		   
		   for (let j = 0; j < this.state.addressArray[0].length; j++) { 
                promises.push(axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + this.state.addressArray[0][j] + '.json?country=us&access_token=pk.eyJ1IjoiYWNjb3VudDkzMSIsImEiOiJjaXgwOTVuOTEwMGFxMnVsczRwOWx0czhnIn0.YjZ5bpnh6jqTEk7cCJfrzw')   
               .then(function (response) {
                   //alert(JSON.stringify(response, null, 4)); 
                   //alert(response.data.features[0].center[1] +  ' = ' + response.data.features[0].center[0]);	
                    temp.push(response.data.features[0].center[1], response.data.features[0].center[0]);
                    //alert("inside" + temp);	
                    					
                })
				.then(function (response) { //not neccessary to use this .then, just a test
                    //alert("then 2 " + temp);	  
                })
				
			   .catch(function() { 
                    alert('Error. This iteration ajax failed.');
               })//;
			   ); //end push		
		   }
		    
			
		
	  //All promises, The way to detect that all axios ajax were completed. 1. we add {var promises = [];} 2. {promises.push(every ajax)}
	  /*
	  Promise.all(promises)
          .then(() => {
               alert("all promises " + temp);
			   //adding array with with final ajax coordinates to state---------
	           const coordsTempArray = this.state.coordinateArray; //getting state to array	
               coordsTempArray.push(temp); //adds to array in this way: addressArray = [[arrayX2]];	
               this.setState({ //sets new value to state
                   coordinateArray: coordsTempArray
               }); 
		   alert("final state Promise.all  " + this.state.coordinateArray[0]);
		   this.drawResult();
	  
          })
          .catch((e) => {
             // handle errors here
          });
		*/
	   // END all promises
		  
		 

		  alert('out-> for loop is over, but ajax axios is not finished. That"s why array temp is underfined ' + temp);
		  //setTimeout( "alert('out ' + temp)", 2000); 
		   
					
	   }
   // **                                                                                  **
   // **                                                                                  **
   // **************************************************************************************
   // **************************************************************************************
   
   
   
   //gets the textarea value, split it to arraye and set to state
  // **************************************************************************************
  // **************************************************************************************
  //                                                                                     **
  drawResult(){
       $("#loading").fadeOut(1900); //hide preloader
	   alert("draw  " + this.state.coordinateArray[0]);
       let b = this.state.coordinateArray[0];
       let res;
       for (let i = 0; i < this.state.coordinateArray[0].length; i++){
		   if(i % 2 == 0){
	       res += "<p>" +  this.state.coordinateArray[0][i] + ", " +  this.state.coordinateArray[0][i+1] +"</p>";
		   }
       }
	   
	   // HTML  Result div  with  animation;
        $("#resultFinal").stop().fadeOut("slow",function(){ 
            $(this).html(res)
        }).fadeIn(2000);

        $("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div
   }
   // **                                                                                  **
   // **                                                                                  **
   // **************************************************************************************
   // **************************************************************************************
   
   
   
  
  //RENDER ------------------------------------------------
  render() {
    return (
	   <div>
	   <form className="textarea-my" >
            <textarea id="coordsInput" rows="8" cols="80" placeholder="Your address here to geocode..." /> 
            <input type="button" className="btn btn-primary btn-md" value="Geocode" id="splitButton" onClick={this.run_This_Component_Functions_In_Queue} />
        </form>
		</div>
	  
    );
  }
}

export default TextAreaX;
