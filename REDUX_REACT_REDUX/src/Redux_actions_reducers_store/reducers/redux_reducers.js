import {
  combineReducers,
  //createStore,
} from 'redux';


//mine
var i = 0; //not used


// reducers.js
export const geodReducer = (state = {}, action) => {  //the name of const {geodReducer} must be the same as in {const reducers} in this same file; and the same as in redux_store.js->(function configureStore())
  switch (action.type) {
	  
	  
	//Used in <ReduxTest_Component/>
    case 'ACTIVATE_GEOD':
	  //alert(++i); //mine
      return action.geodZ;  //action name must be the same as in redux_actions.js -> geodZ
	 
	 
    //Used in <ReduxTest_Component/>, clears the Redux store {title} object + sets Redux {rrr} to some test text 
    case 'CLOSE_GEOD':
	//alert("reducer");
      return {title:"", rrr:['i am set ', ' in reducer by CLOSE_GEOD']};
	  
	  
	
	//used in <TextArea/>, it writes final coords array to Redux store
	 case 'PASS_COORDS_TO_REDUX':
	   //alert("REDUX"); //mine
       return action.myCoordsX;  //action name must be the same as in redux_actions.js -> myCoordsX
	  
	  
    default:
      return state;
  }
};

//exporting a reducer
export const reducers = combineReducers({
  geodReducer,  //the name of {geodReducer} must be the same as in {const geodReducer} in this same file; and the same as in redux_store.js->(function configureStore())
});

