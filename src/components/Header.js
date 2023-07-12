import React from "react";
import logo from '../logo.svg';

const Header = () => {
    return (
        <header className="App-header" style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#282c34', alignItems: 'center', justifyContent: 'center', height: '200px' }}>
          <img src={logo} className="App-logo" alt="logo" style={{ height: '70px' }} />
          <p style={{ fontSize: '23px', color: 'white' }}>
            React
          </p>        
        </header>
    );
}

export default Header;