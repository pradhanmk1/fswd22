//Class Component

class Hello extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
      return (
         <div>
           <h2> Hello {this.props.name}! </h2> 
        </div>);
    }
}
ReactDOM.render(<Hello name='XYZ' />,document.getElementById('mountNode'));

//Functional Component
let HelloFun = (mydata) => { 
 return( 
<div>
    Hello {mydata.name}!
</div>);
}
ReactDOM.render(<HelloFun name="Jane" />,document.getElementById('mountNodeFun'));


