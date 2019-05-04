import React, { Component } from 'react';
import Checkout from './components/checkout/Checkout';
import { setFavicon, setTitle } from './utils';

class App extends Component {

  componentDidMount() {
    setFavicon();
    setTitle('Walmart : Checkout');
  }

  render() {
    return (
      <div className="App">
        <Checkout />
      </div>
    );
  }
}

export default App;
