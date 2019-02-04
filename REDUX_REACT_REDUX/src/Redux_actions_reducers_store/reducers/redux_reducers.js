import {
  combineReducers,
  //createStore,
} from 'redux';


//mine
var i = 0;


// reducers.js
export const geod = (state = {}, action) => {
  switch (action.type) {
	  
    case 'ACTIVATE_GEOD':
	  //alert(++i); //mine
      return action.geodZ;  //action name must be the same as in redux_actions.js -> geodZ
	  
    case 'CLOSE_GEOD':
	alert("reducer");
      return {  };
	  
	
	 case 'PASS_COORDS_TO_REDUX':
	   alert("REDUX"); //mine
       return {};
	  
	  
    default:
      return state;
  }
};

export const reducers = combineReducers({
  geod,
});

