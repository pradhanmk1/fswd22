import React from 'react';
import data from '../data/Data.json'
import IdCardFun from './IdCardFun';

function IdCardsFun() {
    console.log(data);
    return (
        <div>
             <h1> Hello from Mycards App!</h1>
                 { 
                 data.data.map( (elem) => {
                    return   <IdCardFun name={elem.name}
                     des={elem.des}
                     age={elem.age} id={elem.id}/>      
                 }                 
                 )
                 }          
        </div>
    );
}

export default IdCardsFun;