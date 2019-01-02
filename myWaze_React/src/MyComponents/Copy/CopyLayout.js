import React, { Component } from 'react';
import copyIMG from '../../images/loaddd.gif';
import '../../css/Copy.css';
import $ from 'jquery';
//import axios from 'axios';

class CopyLayout extends Component {
	constructor(props) {
    super(props);
    this.state = {
		//addressArray: [],  //this state will hold array with separ addresses
    };
 
    // This binding is necessary to make `this` work in the callback
	this.copy_table_result = this.copy_table_result.bind(this);
  }
  
  
   //just runs all functions together
  // **************************************************************************************
  // **************************************************************************************
  //                                                                                     **
  copy_table_result() {
	  
	   // creating new textarea element and giveing it id 't'
      var t = document.createElement('textarea');
      t.id = 't';
      // Optional step to make less noise in the page, if any!
      t.style.height = 0;
      // You have to append it to your page somewhere, I chose <body>
      document.body.appendChild(t);
     // Copy whatever is in your div to our new textarea
     t.value = document.getElementById('tableResults').innerText;
     // Now copy whatever inside the textarea to clipboard;
     var selector = document.querySelector('#t');
     selector.select();
     document.execCommand('copy');
     // Remove the textarea;
    document.body.removeChild(t);
	
	$('#flashMessage').html(' Copied!!!!!!!');//.fadeOut(4500);
	setTimeout(function(){ $('#flashMessage').html(''); }, 2000);

	
	$('#copy_loading').fadeIn(2500);
	setTimeout(function(){ $('#copy_loading').fadeOut(4500); }, 2000);

	  
  }
  // **                                                                                  **
  // **                                                                                  **
  // **************************************************************************************
  // **************************************************************************************
  
  
  
  
  
   
   
   
  
  //RENDER ------------------------------------------------
  
  render() {
    return (
	    <p>
	    <input type="button" className="btn btn-primary btn-md" value="<CopyLayout/>" id="copyButton" onClick={this.copy_table_result} />   
		<span id='flashMessage' class='red'></span>
		
		{/* Hidden loading copy indicator */}
		<span id='copy_loading'>
			<img src={copyIMG}  className="img-header" alt="logo" />  {/*  hidden by default */}
		</span>  
		
		</p>
    );
  }
  
}

export default CopyLayout;
