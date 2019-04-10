import React, { Component } from 'react';
import { render } from 'react-dom';
import Game from './Components/Game/Game.js'
import './style.css';

class App extends Component {

  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
