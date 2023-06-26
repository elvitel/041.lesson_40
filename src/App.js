import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

const array = [
  {id: 1, nav: 'React', text: 'React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. It aims to allow developers to create fast user interfaces for websites and applications alike easily.'},
  {id: 2, nav: 'Components', text: 'React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.'},
  {id: 3, nav: 'JSX', text: 'JSX is a JavaScript Extension Syntax used in React to easily write HTML and JavaScript together.'}  
];

class ReactApp extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      clicked: '',
    };
    this.myClick = this.myClick.bind(this);
  }

  myClick(e) {
    const { id } = e.currentTarget;
    this.setState({ clicked: id });
  }

  render() {
    const { clicked } = this.state;
    
    return (
      <div>
        <header className="App-header" style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#282c34', alignItems: 'center', justifyContent: 'center', height: '200px' }}>
          <img src={logo} className="App-logo" alt="logo" style={{ height: '70px' }} />
          <p style={{ fontSize: '23px', color: 'white' }}>
            React
          </p>        
        </header>
        <div style={{ display: 'flex', height: '300px' }}>
          <nav style={{ backgroundColor: '#61dafb', width: '20%', display: 'flex', flexDirection: 'column' }}>
            <p id='1' onClick={this.myClick} style={{ margin: '10px', cursor: 'pointer', color: 'white' }}>{array[0].nav}</p>
            <p id='2' onClick={this.myClick} style={{ margin: '10px', cursor: 'pointer', color: 'white' }}>{array[1].nav}</p>
            <p id='3' onClick={this.myClick} style={{ margin: '10px', cursor: 'pointer', color: 'white' }}>{array[2].nav}</p>
          </nav>
          <div style={{ backgroundColor: 'grey', width: '80%' }}>
            <p className={clicked === "1" ? "yes_display" : "no_display"} style={{ margin: '10px' }}>{array[0].text}</p>
            <p className={clicked === "2" ? "yes_display" : "no_display"} style={{ margin: '10px' }}>{array[1].text}</p>
            <p className={clicked === "3" ? "yes_display" : "no_display"} style={{ margin: '10px' }}>{array[2].text}</p>
          </div>
        </div>     
      </div>
    )}
}

function App() {
  return (    
      <ReactApp />     
  );
}

export default App;
