import React, { Component } from 'react';
import error from '../../images/error.gif';
import '../../css/TextArea.css';
import $ from 'jquery';
import axios from 'axios';
import CopyLayout from '../Copy/CopyLayout';

//REDUX import
import { connect } from 'react-redux';
import { pass_coords_to_Redux/*, closeGeod*/ } from '../../Redux_actions_reducers_store/actions/redux_actions';
//import { store } from '../../Redux_actions_reducers_store/store/redux_store';


export class TextAreaX extends Component {
	constructor(props) {
    super(props);
    this.state = {
		addressArray: [],  //this state will hold array with separ addresses from textarea input
		coordinateArray: [],  //this state will hold array with ready coordinates returned by axios
    };
 
    // This binding is necessary to make `this` work in the callback
	this.run_This_Component_Functions_In_Queue = this.run_This_Component_Functions_In_Queue.bind(this); //runs all functions together
	this.getFormValue = this.getFormValue.bind(this);
    this.runAjax = this.runAjax.bind(this);
	this.drawResult = this.drawResult.bind(this);
	this.htmlAnyResult = this.htmlAnyResult.bind(this);
	//this.liftFinalCoordsHandler = this.liftFinalCoordsHandler.bind(this);
  }
  
  
   //just runs all functions together
  // **************************************************************************************
  // **************************************************************************************
  //                                                                                     **
  run_This_Component_Functions_In_Queue() {
	  var promises = [];  //array that will hold all promises
	  var temp = [];     // temp array to store found coordinates before assigning it to this.state.coordinateArray
	  
	  //temp.splice(0, temp.length);
	  
	  
	  
	  
	  //if texarea is empty, stop anything further, show/hide <Error/> component
	  if(this.getFormValue(/*promises,temp*/) === false)
	  {
		   $("html, body").animate({ scrollTop: 0 }, "slow"); //scroll the page to top(mostly for mobile convenience)
		   
           $('.App').addClass('blur');  //blur the background
		   $(".error-parent").fadeIn(2500); //show error gif from <Error/>
		
		   setTimeout(function(){
              $('.App').removeClass('blur'); //removes blur from background
			  $(".error-parent").fadeOut(1000); //hide error gif from <Error/>
           }, 4000); // A delay of 1000ms
		   
		   //display error text with function
		   this.htmlAnyResult("<h2 class='red' id='errorSign'>You submitted Empty Input</h2>");
		  
		  // calling parent method from child {this.props. + method}-> passing/uplifting array with found coords to App.js, method is described in Parent App.js
		   this.props.liftFinalCoordsHandler([]); //sending empty array to reset this.state.arg1 in <App/>.js. Otherwise, when u found coordinates by texarea input and get the result and then solved to empty the input and click the "Geocode" button, the sign "Empty input" will appear, but table with prev coords result will stay

		  return false; //must have to stop futher Action
	  }
	  
	  
	  
       //Resetting state to Null ,calling parent method from child {this.props. + method}-> passing/uplifting alert info, described in Parent App.js
	   //this.props.techInfoHandler("");   
	   this.props.reset_techInfo_State("x");
		
	

		  
	  
	  
	  //run axios ajax in loop
	   this.runAjax(promises,temp); //must pass {promises,temp} as arg to make them visible in function runAjax()//!!!!!!! RETURN ME===============
	  //this.drawResult();  //assigned to Promise.all(promises)
	  
	  
	  //All promises, The way to detect that all axios ajax were completed. 1. we add {var promises = [];} 2. {promises.push(every ajax)}
	  //runs when for loop iteration axios ajax request are completed
	  Promise.all(promises)
          .then(() => {
			  //alert("this.state.addressArray " + this.state.addressArray.length);
               //alert("all promises, temp= " + temp); //reassigned to this.props.techInfoHandler
               //instead of alert, it calls parent method from child {this.props. + method}-> passing/uplifting alert info to method techInfoHandler described in Parent App.js
		       this.props.techInfoHandler("all promises " + temp);   /*('Lifted_Coords_Array')*/
	  
	  
	            //=======================================================================================
			   // MEGA ERROR FIX !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			   //adding array with with final ajax coordinates to this.state---------
	           let coordsTempArray = this.state.coordinateArray; // =[]; //getting state to array	
			   //coordsTempArray = []; //resting it !!!!!!!
               coordsTempArray.push(temp); //adds to array in this way: addressArray = [[arrayX2]];	
               
			   
			   this.setState({ //sets new value to state
                   coordinateArray: temp //coordsTempArray //temp
               }); 
			   
			   
			   
			   //Calls this.drawResult(); only after finished setting state
			   /*
			   this.setState({
                   coordinateArray: coordsTempArray //temp
               }, () => {
               alert("SET COORDS STATE IS DONE, READY TO draw");//this.drawResult();
               });
	           */
			   
			   
			  
		
		
		
		
	   
			   
		   //alert("final state Promise.all length!!!! " + this.state.coordinateArray/*[0]*/.length + " Array contains: " + this.state.coordinateArray[0]); //reassigned to this.props.techInfoHandler
		   //instead of alert, it calls parent method from child {this.props. + method}-> passing/uplifting alert info to method techInfoHandler described in Parent App.js
		   this.props.techInfoHandler("final state Promise.all length " + this.state.coordinateArray[0].length + " Array contains: " + this.state.coordinateArray[0]);   
		   
		   //Draw the result - MAIN RETURN
		   //this.drawResult();  //reassigned to props in <Result/>, now result is drawn from state.arg1 in App.js  //RETURN!!!!!!!!!!!!!!!!!!!!!!!!!
		   
		   // calling parent method from child {this.props. + method}-> passing/uplifting array with found coords to App.js, method is described in Parent App.js
		    this.props.liftFinalCoordsHandler(this.state.coordinateArray/*[0]*/)/*('Lifted_Coords_Array')*/;//!!!!!!!!!!!!!  
			
			
			
			//REDUX, pass final coords to redux store 
			this.props.pass_coords_to_Redux({ rrr: this.state.coordinateArray });   //({ title: 'TextArea' });
			//alert("redux in TextArea");
			
	  
          })
		  //Start Addon---
		  .then(() => { 
		     // calling parent method from child {this.props. + method}-> passing/uplifting array with found coords to App.js, method is described in Parent App.js
		     //this.props.liftFinalCoordsHandler(this.state.coordinateArray[0])/*('Lifted_Coords_Array')*/;//!!!!!!!!!!!!!
		     //Draw the result
		     //this.drawResult();  //reassigned to <Result/>, now result is drawn from state.arg1 in App.js
			 
			 
			  // HTML  Result div  with  animation-------
              $("#resultFinal").stop().fadeOut("slow",function(){ 
              //$(this).html(res)
              }).fadeIn(2000);
              $("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div
		      $("#copyButton").css("display","block");
	          //END  HTML  Result div  with  animation----
	 
		  })
		  //END Addon----
          .catch((e) => {
             // handle errors here
			 alert("then failed in line 137");
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
  getFormValue(/*promises,temp*/){
	 

		 
	  if ($("#coordsInput").val().trim()===""){
		 //Display error
		 //alert("empty");
         return false;		 
	   }
	   
	   
	   //check if "You submitted Empty Input" error sign exists and remove it if it does exists. it is done to prevent this sign to appear again if further input is not empty. Otherwise, new table coors result will appear, but error sign will remain on the screen
	   if ($("#errorSign").length){
           //alert('Does exist!');
	       $("#errorSign").remove();
       }



	   let textareaX = $("#coordsInput").val(); //alert(textarea);
       textareaX = textareaX.trim();
	   let arrayX2 = textareaX.split('\n');
	   
	   //alert(arrayX2);  //reassigned to this.props.techInfoHandler
	   //instead of alert, it calls parent method from child {this.props. + method}-> passing/uplifting alert info to method techInfoHandler described in Parent App.js
	   this.props.techInfoHandler("arrayX2: " + arrayX2);   
	   
	 
	   
	   //adding arraay with address to state---------!!!!!!!!!!!!! ERRORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR=================================
	   let addressTempArray = this.state.addressArray; //getting state to array
	   /*addressTempArray.forEach(item => {  //this is var if u want to add existing array new values
           addressTempArray.push(arrayX2); 
       });
	   */
	   addressTempArray.unshift(arrayX2); //adds to array in this way: addressArray = [[arrayX2]]; //MEGA FIX, change push() to unshift()
	   //alert("9999cccc addressTempArray[0].length " + addressTempArray[0].length + " consists=> " +  addressTempArray[0] );
	   
	   
       this.setState({ //sets new value to state
           addressArray:addressTempArray/*[0]*/ // arrayX2 //addressTempArray[0]
       }); 
	   
	  
	   //Calls this.runAjax(promises,temp); only after finished setting state
	   /* this.setState({
           addressArray: arrayX2
       }, () => {
           //this.runAjax(promises,temp);
		    
       }); */
       

	   //this.setState({addressArray: [arrayX2]}); 
	   //END adding arraay with address to state-----
	   
	     
		 //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		 /*setTimeout(function(){
             alert(this.state.addressArray);
           }, 2000); // A delay of 1000ms
		  */ 
		   
	   
	   //instead of alert, it calls parent method from child {this.props. + method}-> passing/uplifting alert info to method techInfoHandler described in Parent App.js
	   //this.props.techInfoHandler("this.state.addressArray[0][0] => " + this.state.addressArray[0][0]); 

 
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
		   
		    //working TimeOut
		    /*setTimeout(() => {
              alert("forStart DELAY  " + this.state.addressArray[0].length); 
           }, 3000);*/
		 
		   
		   //alert("forStart  " + this.state.addressArray[0].length);
		   for (let j = 0; j < this.state.addressArray[0].length; j++) { //alert("for " + this.state.addressArray[0][j]);
                promises.push(axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + this.state.addressArray[0][j] + '.json?country=us&access_token=pk.eyJ1IjoiYWNjb3VudDkzMSIsImEiOiJjaXgwOTVuOTEwMGFxMnVsczRwOWx0czhnIn0.YjZ5bpnh6jqTEk7cCJfrzw')   
               .then(function (response) {
                   //alert(JSON.stringify(response, null, 4)); 
                   //alert(response.data.features[0].center[1] +  ' = ' + response.data.features[0].center[0]);	
                    temp.push(response.data.features[0].center[1], response.data.features[0].center[0]);
                    //alert("inside" + temp);	
                    					
                })
				.then(function (response) { //not neccessary to use this .then, just a test
                    //alert("temp all Final " + temp);	  
                })
				
			   .catch(function() { 
                    alert('Error. This iteration ajax failed.');
               })//;
			   ); //end push		
		   }
		    
			//alert("temp all Final " + temp);
			
			
		
		
		
		
		
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
		  
		 

		  //alert('out-> for loop is over, but ajax axios is not finished. That"s why array temp is underfined ' + temp);
		  //instead of alert, it calls parent method from child {this.props. + method}-> passing/uplifting alert info to method techInfoHandler described in Parent App.js
	      this.props.techInfoHandler('out-> for loop is over, but ajax axios is not finished. That"s why array temp is underfined ' + temp); 
	   
		  //setTimeout( "alert('out ' + temp)", 2000); 
		   
					
	   }
   // **                                                                                  **
   // **                                                                                  **
   // **************************************************************************************
   // **************************************************************************************
   
   
   
   //gets the textarea value, split it to arraye and set to state -> NOT USED ->reassigned to <Result/> using state values
  // **************************************************************************************
  // **************************************************************************************
  //                                                                                     **
  drawResult(){
       $("#loading").fadeOut(1900); //hide preloader
	   
	   //alert("draw  " + this.state.coordinateArray[0] + " has length " + this.state.coordinateArray[0].length);
	   //instead of alert, it calls parent method from child {this.props. + method}-> passing/uplifting alert info to method techInfoHandler described in Parent App.js
	   this.props.techInfoHandler("draw:  " + this.state.coordinateArray[0] + " has length " + this.state.coordinateArray[0].length); 
	   
       let b = this.state.coordinateArray;
	   //alert("in DRAW: b length " + b.length + " - b[0]  " + b[0].length + " - " + b);
       let res = "<p class='red'>React Results found => " + this.state.coordinateArray/*[0]*/.length/2 + "</p>"; //must be at least empty defined to avoid "undefined" appearance
       //res += <CopyLayout/>;  { /* CopyLayout component */ }
	   //res += "<input type='button' value='Copy' id='copybutton' onClick={CopyLayout.copy_table_result}><span id='flashMessage'></span>"; //copy button
	   res += "<table id='tableResults'>"; //adding div that will be copied further
	   
	   for (let i = 0; i < this.state.coordinateArray/*[0]*/.length; i++){
		   if(i % 2 === 0){
	       res += "<tr><td>" +  this.state.coordinateArray/*[0]*/[i] + "</td><td> " +  this.state.coordinateArray/*[0]*/[i+1] + "<td></tr>";
		   }
       }
	   
	   res += "</table>";
	   
	   // HTML  Result div  with  animation;
        $("#resultFinal").stop().fadeOut("slow",function(){ 
            $(this).html(res)
        }).fadeIn(2000);

        $("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div
		
		$("#copyButton").css("display","block");
		
   }
   // **                                                                                  **
   // **                                                                                  **
   // **************************************************************************************
   // **************************************************************************************
   
   
   
   //Logik to Html the result with function
  // **************************************************************************************
  // **************************************************************************************
  //                                                                                     **
  htmlAnyResult(textX){
	  $("#resultFinal").stop().fadeOut("slow",function(){ 
            $(this).append( textX )   //use .append() instead of .html() to remove this <h2> error sign if texarea input is not empty
       }).fadeIn(11000);

       $("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div 
  }
   // **                                                                                  **
   // **                                                                                  **
   // **************************************************************************************
   // **************************************************************************************
   
  
  
  
  
  //RENDER ------------------------------------------------
  render() {
      //var liftFinalCoordsHandler  =   this.props.liftFinalCoordsHandler ; //for lifting state up to parent
	  
      return (
	   
	     <div>
		 {/*<h4>Textarea Redux value is-> {this.props.geodSt.reduxCoords}</h4>*/}
	         <CopyLayout/>
	         <form className="textarea-my" >
                 <textarea id="coordsInput" rows="8" cols="80" placeholder="Your address here to geocode..." /> 
                 <input type="button" className="btn btn-primary btn-md" value="Geocode" id="splitButton" onClick={this.run_This_Component_Functions_In_Queue} />
					 {/*<input type="button"  value="Lift Coords" onClick={() => liftFinalCoordsHandler('Lifted_TextArea')}/> */}
				  
             </form>
		
		</div>
	  
    );
  }
}

//export default TextAreaX;










//REDUX PART!!!!!!!!!!
// AppContainer.js
const mapStateToProps = state => ({
  geodSt:  state.geodReducer, // {geodSt} is the name of props we will use in this component(i.e this.props.geodSt.reduxCoords), //{geodReducer} is a name of reucer set in reducers/redux_reducers.js
});

//action
const mapDispatchToProps = {
  pass_coords_to_Redux,
 
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextAreaX);  //the name of component to connect Redux store to

export default AppContainer;

