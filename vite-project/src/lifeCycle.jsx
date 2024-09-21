import { Component } from "react";

class LifeCycle extends Component {
    constructor(props){
        super(props)
        this.state = {
          count:0
        }
     console.log('Consructor : Component constructor is working beacuse Component is created');

    }

    componentDidMount(){
        console.log('ComponentDidmount : Compponent is created to the DOM ')

    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate : component was updated');
        console.log('previous state:',prevState);
        console.log('CurrentState :', this.state)
    }
componentWillUnmount(){
    console.log('ComponentwillUnmount :Component is removed from the DOM ');
}

incementCount=()=>{
this.setState({count: this.state.count + 1})

}
render (){
    console.log('Component render is working ');
    return(
        <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.incementCount}>Increment</button>
        </div>
    )
}

} 
export default LifeCycle