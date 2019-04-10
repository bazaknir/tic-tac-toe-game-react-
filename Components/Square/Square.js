import React, { Component } from 'react';
import { render } from 'react-dom';

class Square extends React.Component {
  
  render() {
    return (
      <button className="square"
      onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

export default Square