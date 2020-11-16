import React, { Component } from 'react';
import './Counter.css'
class CounterButton extends Component{

    //Intialize the constructor
    
    constructor(){
        super();
         console.log("In constructor");
         this.state={
             counter:0
         }
         //this.increment=this.increment.bind(this);
     }
    
        render(){
                return (
                    <div className="counterButton">
                   
                <button className="counterButton" onClick={this.increment}>+{this.props.by}</button>
                <button className="counterButton" onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
                   
                 {  /** <span  style={{fontSize:"50px"}}>{this.state.secondCounter}</span> */}
                    </div>
                );
            }
    
    
            increment=()=>{ //No need to bind with this variable
                  console.log("Increment in CounterButton");
                  //this.state.counter++; //bad practice
                  this.setState({
                     counter:this.state.counter+this.props.by
                  });
                  this.props.incrementMethod(this.props.by);
              }
            //   decrement=()=>{ //No need to bind with this variable
            //     console.log("Increment in CounterButton");
            //     //this.state.counter++; //bad practice
            //     this.setState({
            //        counter:this.state.counter-this.props.by
            //     });
            //     this.props.decrementMethod(this.props.by);
            // }
    
    
    }
  
export default CounterButton;    