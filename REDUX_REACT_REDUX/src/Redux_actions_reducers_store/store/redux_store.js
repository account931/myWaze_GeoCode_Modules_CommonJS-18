import {
  //combineReducers,
  createStore,
} from 'redux';

import { geodReducer, reducers } from '../reducers/redux_reducers'; //import reducers //{geodReducer} is a reducer name as specified in /reducers/redux_reducers.js


// store.js  //{geodReducer} is a reducer name as specified in /reducers/redux_reducers.js
export function configureStore(initialState = {  
       geodReducer: { title:"i am initialState set in redux_store.js", rrr: []}  }) {   {/* Mine   geod:{title:"set in redux.js"} */}
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();