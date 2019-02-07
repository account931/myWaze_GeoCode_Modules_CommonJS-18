This is extended version of Waze React MapBox geocode, which now apart from component local state storage uses Redux store.

Two main components are <TextArea/> (which  gets addresses input value, splits it to array, sends axos ajax and gets final coords array and write it to Redux store) 
and <Result/> (which displays final coords array from Redux). <Result/> is hidden by default, it JS turns visible in <TextArea/> in promise .then().

REDUX in this app is used in 2 cases: 
1.in <ReduxTest/> component( just test reading and changing Redux store geod.title.
2. In <TextArea/> ( to write final coords array to Redux store rrr ) and  <Result/>(to subscribe to Redux store rrr.)

In all other cases components remain to use component local state (i.e <Texarea/> gets texarea input value, splits it to array and save to local component state.)

===================== REDUX =================================
REDUX
How to use REDUX in React JS:
1. Npm install Redux and React-Redux dependencies.
2. In file where the necessary component is called, make imports
   import { Provider } from 'react-redux'; //library
   import { store } from './Redux/redux';  //mine file with actions,reducers
3. In file where the necessary component is called, wrap your component to 
      <Provider store={store}> 
	     <ReduxTest/> //my component, that will use Redux storage
	  </Provider>
4.
						
						
						
		



		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

		
						
						
================================================================================================================================================================						
//========================================================
Below is just a copy of how Waze geocoding React version works (without redux). Copied from myWaze_React	
//========================================================					

!!!!!!!!!!!!!!!!!!!!!!!!!