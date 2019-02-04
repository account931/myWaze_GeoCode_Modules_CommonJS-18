import {
  //combineReducers,
  //createStore,
} from 'redux';


// actions.js
export const activateGeod = geodZ => ({
  type: 'ACTIVATE_GEOD',
  geodZ,
});


export const closeGeod = () => ({
  type: 'CLOSE_GEOD',
});



export const pass_coords_to_Redux = () => ({
  type: 'PASS_COORDS_TO_REDUX',
  
});