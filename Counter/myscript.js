let CounterButton= (props) => {
    const {useState}=React;
    let [cc,setCC]=useState(0);
    let onClickHandler=()=>{
        cc++;
        setCC(cc);
        //console.log(c);
    }
 return(
    <fragment>
    <button onClick={onClickHandler}>Increment</button>
    <br/>
    Count now is {cc}
    </fragment>
 );
}

ReactDOM.render(<CounterButton/>,document.getElementById('mountNode'));