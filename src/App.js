import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductCard from './ProductCard.js';

class App extends Component {
  componentDidMount() {
    const socket = new WebSocket('ws://localhost');
    socket.onmessage = this.handleMessage;
  }
  state = {
    component: null
  }
  handleMessage = msg => {
    console.log(msg);
  }
  render() {
    return (
      <div className="App">
        {this.state.component ? (
          <ProductCard />
        ) : (
          'Loading....'
        )}
      </div>
    );
  }
}

export default App;
