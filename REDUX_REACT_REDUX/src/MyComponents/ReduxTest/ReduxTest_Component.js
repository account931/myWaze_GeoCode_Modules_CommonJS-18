//import React, { Component } from 'react';
//import logo from '../../images/api.jpeg';
//immport $ port '../../css/Results.css';
//ifrom 'jquery';

//import React from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activateGeod, closeGeod } from '../../Redux_actions_reducers_store/actions/redux_actions';
//import { geod, reducers } from '../../Redux_actions_reducers_store/reducers/redux_reducers';  //imported in Redux_actions_reducers_store/store/redux_store.js
//import { store } from '../../Redux_actions_reducers_store/store/redux_store';

// App.js
export class ReduxTest_Component extends Component {
  render() {
    return (
     <div>
	   <p>---</p>
	   <p>---</p>
	   <p>---</p>
	   <p>---</p>
	   <h1>Redux</h1>
	   
	   
	   
	   
	   
	    <h4>{this.props.geod.title || 'I am default redux, set in ReduxTest_Component!'}</h4>

		{/*if this.props.geod.title Exists*/}
        {this.props.geod.title ? (
          <button onClick={this.props.closeGeod}>Exit Geod. Props.geod.title exists</button>   
			  
		  
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

//export default ReduxTest_Component;


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
)(ReduxTest_Component);  //the name of component to connect Redux stotre to

export default AppContainer;
