import React, { Component } from 'react';
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
        </header>

        {this.props.children}
      </div>
    );
  }
}

export default App;
