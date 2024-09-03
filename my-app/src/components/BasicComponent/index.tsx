import React, { Component } from 'react';

class BasicComponent extends Component {
  state = {
    text: 'Hello, World!'
  };

  updateText = () => {
    this.setState({ text: 'Text updated!' });
  };

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
        <button onClick={this.updateText}>Update Text</button>
      </div>
    );
  }
}

export default BasicComponent;
