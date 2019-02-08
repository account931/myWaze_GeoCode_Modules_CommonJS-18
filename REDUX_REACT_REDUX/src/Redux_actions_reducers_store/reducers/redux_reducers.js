import {
  combineReducers,
  //createStore,
} from 'redux';


//mine
var i = 0;


// reducers.js
export const geodReducer = (state = {}, action) => {
  switch (action.type) {
	  
	  
	//Used in ReduxTest_Component 
    case 'ACTIVATE_GEOD':
	  //alert(++i); //mine
      return action.geodZ;  //action name must be the same as in redux_actions.js -> geodZ
	 
    //Used in ReduxTest_Component	 
    case 'CLOSE_GEOD':
	//alert("reducer");
      return {title:"", rrr:['i am set ', ' in reducer by CLOSE_GEOD']};
	  
	  
	
	//used in TextArea, write final coords array to Redux store
	 case 'PASS_COORDS_TO_REDUX':
	   //alert("REDUX"); //mine
       return action.myCoordsX;  //action name must be the same as in redux_actions.js -> myCoordsX
	  
	  
    default:
      return state;
  }
};

export const reducers = combineReducers({
  geodReducer,
});

