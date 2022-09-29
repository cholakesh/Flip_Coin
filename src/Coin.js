import React, { Component } from 'react'
import './Coin.css';

export default class Coin extends Component {
  render() {
    return (
        <div className='Coin'>
            <img src={`https://tinyurl.com/react-coin-${this.props.face}-jpg`} alt={this.props.face}/>
        </div>
    )
  }
}
