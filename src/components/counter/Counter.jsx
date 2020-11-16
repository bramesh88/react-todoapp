import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CounterButton from './CounterButton';
import './Counter.css'

class Counter extends Component{


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
          <div className="counter">
      {  /**<CounterButton incrementMethod={this.increment}></CounterButton>  */ }
        <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
        <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
        <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
        <br/>
        <span  className="count">{this.state.counter}</span>
<br/>
<br/>
<br/>
        <button className="reset" onClick={this.reset}>Reset</button>
        </div>
        );
      }

      reset=()=>{
          this.setState({
              counter:0
          });
      }
      increment=(by)=>{ //No need to bind with this variable when having lambda
          console.log(`Increment from parent counter - ${by}`);
          this.setState(
              (previousSate)=>
              {
              return {counter:previousSate.counter+by}
             }
          );
        
      }

      decrement=(by)=>{ //No need to bind with this variable when having lambda
        console.log(`Increment from parent counter - ${by}`);
        this.setState(
            (previousSate)=>
            {
            return {counter:previousSate.counter-by}
           }
        );
      
    }

}

Counter.defaultProps={
    by:1
}
Counter.propTypes={
  
    by:PropTypes.number
}

export default Counter;