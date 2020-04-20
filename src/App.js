import React from 'react';
import DisplayQuote from './components/DisplayQuote';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: this.getQuote
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          quote: data[0],
        });
    });
  }

  render() {
    return (
      <div className="App">
        <DisplayQuote quote={this.state.quote} /> 
        <button type="button" onClick={this.getQuote}>Change quote</button>
      </div>
    );
  }
}
export default App;
