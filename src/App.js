import React, { Component } from 'react';

// Views
import Home from './views/home';
import Product from './views/product';

class App extends Component {
  render() {
    return (
     <div>
      <Product />
     </div>
    );
  }
}

export default App;
