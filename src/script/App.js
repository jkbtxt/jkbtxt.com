import React, { Component } from 'react';
import logo from '../image/logo.svg';
import '../style/App.css';
import ThumbContainer from '../script/ThumbContainer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Thumbs : [{"id":0, "name":"Pete"},{"id":1, "name":"Jonny"}]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">justin kiernan byrne</h1>
        </header>
        <p className="App-intro">
          Writing / Coding / Design & Advertising / Video
          <ThumbContainer thumbs={this.state.Thumbs} />
        </p>
      </div>
    );
  }
}

export default App;
