import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component { 
  constructor(props){
    super(props);
    this.state = { 
      items: [],
      isLoaded: false, 
    }
  }

  componentDidMount() { 
    fetch('https://statenweb.mockable.io/employees')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      });
    });
  }

  render(){
    return ( 
      <div className="App">

      </div>
    );
  }

}

export default App;
