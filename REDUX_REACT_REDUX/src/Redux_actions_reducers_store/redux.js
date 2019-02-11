//This file was prev fully working, now it is NOT USED, as we just separarted it to 3 different folders: actions, reducers, store

/*
import {
  combineReducers,
  createStore,
} from 'redux';
*/


// actions.js
/*
export const activateGeod = geod => ({
  type: 'ACTIVATE_GEOD',
  geod,
});

export const closeGeod = () => ({
  type: 'CLOSE_GEOD',
});
*/

//mine
var i = 0;


// reducers.js
/*
export const geod = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVATE_GEOD':
	alert(++i); //mine
      return action.geod;
	  
    case 'CLOSE_GEOD':
      return {  };
	  
    default:
      return state;
  }
};

export const reducers = combineReducers({
  geod,
});
*/




// store.js
/*
export function configureStore(initialState = {  geod:{title:"i am initialState set in redux.js"}    }) {   // Mine   geod:{title:"set in redux.js"} 
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();
*/