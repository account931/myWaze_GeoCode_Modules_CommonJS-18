import {
  //combineReducers,
  //createStore,
} from 'redux';


// actions.js

//Used in ReduxTest_Component
export const activateGeod = geodZ => ({
  type: 'ACTIVATE_GEOD',
  geodZ,
});

//Used in ReduxTest_Component
export const closeGeod = () => ({
  type: 'CLOSE_GEOD',
});


//used in TextArea
export const pass_coords_to_Redux = myCoordsX => ({
  type: 'PASS_COORDS_TO_REDUX',
  myCoordsX,
});