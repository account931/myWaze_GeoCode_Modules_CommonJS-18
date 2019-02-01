//import React, { Component } from 'react';
//import logo from '../../images/api.jpeg';
//immport $ port '../../css/Results.css';
//ifrom 'jquery';

//import React from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activateGeod, closeGeod } from '../../Redux/redux';

// App.js
export class ReduxTest extends Component {
  render() {
    return (
     <div>
	   <h1>Redux</h1>
	   
	   
	   
	   
	   
	    <h4>{this.props.geod.title || 'I am default redux!'}</h4>

        {this.props.geod.title ? (
          <button onClick={this.props.closeGeod}>Exit Geod</button>
        ) : (
          <button
            onClick={() =>
              this.props.activateGeod({ title: 'I am a geo dude!' })
            }
          >
            Click Me!
          </button>
        )}
		
		
		
	 </div>
    );
  }
}

//export default ReduxTest;


// AppContainer.js
const mapStateToProps = state => ({
  geod: state.geod,
});

const mapDispatchToProps = {
  activateGeod,
  closeGeod,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxTest);

export default AppContainer;
