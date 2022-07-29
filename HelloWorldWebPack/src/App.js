import React, { Fragment } from "react";
import  ReactDOM from "react-dom";
import HelloWorld from "../components/HelloWorld";

function App(){
 return(
   <Fragment> 
    <div> Hello from App!</div>
    <HelloWorld/>
    </Fragment>
 );    
}

ReactDOM.render(<App/>,document.getElementById('root'));