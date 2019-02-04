import {
  //combineReducers,
  createStore,
} from 'redux';

import { geod, reducers } from '../reducers/redux_reducers';


// store.js
export function configureStore(initialState = {  geod:{title:"i am initialState set in redux.js"}    }) {   {/* Mine   geod:{title:"set in redux.js"} */}
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();