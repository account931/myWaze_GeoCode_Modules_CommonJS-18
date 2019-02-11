import {
  //combineReducers,
  //createStore,
} from 'redux';


// actions.js

//Used in <ReduxTest_Component/>
export const activateGeod = geodZ => ({
  type: 'ACTIVATE_GEOD',
  geodZ, //{geodZ} is a passed function argument value in <ReduxTest_Component/>, must use the same name {geodZ} as in redux_reducers.js
});

//Used in <ReduxTest_Component/>
export const closeGeod = () => ({
  type: 'CLOSE_GEOD',
  
});


//used in <TextArea/>
export const pass_coords_to_Redux = myCoordsX => ({
  type: 'PASS_COORDS_TO_REDUX',
  myCoordsX, //{myCoordsX} is a passed function argument value in <TextArea/>, must use the same name {myCoordsX} as in redux_reducers.js
});