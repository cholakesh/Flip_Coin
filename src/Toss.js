import React, { Component } from 'react'
import Coin from './Coin'

export default class Toss extends Component {
    static defaultProps={
        faces:['heads','tails']
    }
    constructor(props){
        super(props);
        this.state={
            noOfFlips:0,
            hCount:0,
            tCount:0,
            face:null
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        let front=this.props.faces[Math.floor(Math.random()*2)];
        this.setState(currentState=>{
           return {
            face:front,
            noOfFlips:currentState.noOfFlips+1,
            hCount:(front==='heads'? currentState.hCount+1:currentState.hCount),
            tCount:(front==='tails'? currentState.tCount+1:currentState.tCount)
           }
        });
    }
  render() {
    return (
      <div className='Toss'>
        <h1>Lets flip a coin!!!!</h1>
        {this.state.face &&<Coin face={this.state.face}/>}
        <button onClick={this.handleClick}> Tap to flip </button>
        <p>{`Out of ${this.state.noOfFlips}, there been ${this.state.hCount} heads and ${this.state.tCount} tails.`}</p>
      </div>
    )
  }
}
