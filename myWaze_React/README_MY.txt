Waze geocoding React version.
#Works on MapBox Api, on js only, php side is not engaged.

How irt works:
1. Index.js is a JS entry point, it contains <App/> Component, 
which contains all the rest component { <Header nameX = "ReactJS"/> , <ButtonsLayout/> , <Instructions/>, <TextAreaX/>}

2. All core logic is in <TextAreaX/> Component.
2.1 OnClick "Geocode" button it runs onClick={this.run_This_Component_Functions_In_Queue}, function that runs all functions together.

2.3 Firstly {run_This_Component_Functions_In_Queue} runs {this.getFormValue()},
 that checks if textarea is not empty, split addresses to array and save that array to state ->this.state.addressArray.
 
2.3 Secondly, {run_This_Component_Functions_In_Queue} runs { this.runAjax(promises,temp);},
 that in loop send axios ajax using {this.state.addressArray[0].length}.
 
Each axios is added to array promises[] in order to know, 
when all axios requests are completed {promises.push(axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + this.state.addressArray[0][j]....} 

2.4 Thirdly, in {{run_This_Component_Functions_In_Queue}} we check if all axios are finished -> Promise.all(promises).then(() => {...},
 assign temporay array with axios results to state=> this.state.coordinateArray and start this.drawResult();
 
 
 
==================================================

How to uplift var value from child component to Parent state:
1. In Child comp add to render section => {  render() { var handleToUpdate  = this.props.handleToUpdate;}
2. In Child comp add to return section => {<button onClick={() => handleToUpdate('some var to lift')}>}
3. In Parent comp add to constructor(props){} =>  var handleToUpdate = this.handleToUpdate.bind(this);
4. In Parent comp add to constructor(props){} the body of method/func  => handleToUpdate(someArg){this.setState({arg1:someArg});}
5. In Parent comp call the Child component itself => <LiftedFrom_Component handleToUpdate = {handleToUpdate.bind(this)}/>






====================================================

How to pass state from Parent to Child=> {<LiftedTo_Component liftedValue={this.state.arg1}}, then in Componenent dispaly by {this.props.liftedValue}





====================================================

How to BUILD/Pack APP for hosting server
Folder "BUILD" is for ready created app with all minified concatenated dependencies.
Created by CLI-> npm run build.

Known Issue: path to js,css in BUILD should be without "/" in beginning => "static/js/..."
GIF imge was not loading => change to {e.exports=/*a.p+*/"static/media/loading2.f7ccc9e1.gif"} in build/static/js/main.91b5d174.chunk.js