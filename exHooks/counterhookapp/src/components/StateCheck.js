import {React, useEffect, useState} from 'react';

function StateCheck(props) {
    
    let [counter,setCounter]=useState(1)
    let [anothercounter,setanotherCounter]=useState(100)
    useEffect(()=>{
    
        console.log("In use effect");
    })

    useEffect(()=>{
        if(counter%2==0){
            document.getElementById('changescolor').style.color="red"; 
        }else{
            document.getElementById('changescolor').style.color="black"; 
        }
        if(anothercounter%3==0){
            document.getElementById('changescolor').style.color="blue"; 
        }
    },[counter,anothercounter]);

    let clickHandler=()=>{
        counter++;
        setCounter(counter);
        
    }
    let clickAnotherHandler=()=>{
        anothercounter--;
        setanotherCounter(anothercounter);
        
    }
    return (
        <div>
            <button onClick={clickHandler}>Click to Increment</button>    
            <p>Increment value is - {counter}</p>      
            <button onClick={clickAnotherHandler}>Click to Decrement</button>    
            <p>Decrement value is - {anothercounter}</p>      
            
            <h1 id='changescolor'> Change My Color</h1>  
        </div>
    );
}

export default StateCheck;