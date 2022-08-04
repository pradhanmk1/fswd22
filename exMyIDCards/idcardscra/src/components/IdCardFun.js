import React from 'react';

function IdCardFun(props) {
    return (
        <div>           
            <div className="card bg-info w-25 mx-2 my-4 float-start">
               <div className="card-head bg-primary"> {props.name}</div>
                <div className="card-body">
                    <h4 className="card-title">{props.des}</h4>
                    <p className="card-text">{props.age}</p>
                </div>
            </div>
        </div>
    );
}

export default IdCardFun;