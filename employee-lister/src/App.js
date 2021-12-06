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

    let {isLoaded, items} = this.state;

    if(!isLoaded){
      return(
        <div>
          Loading...
        </div>
      );
    }

    else { 
      return (
        <div className="App">
          <ul className="employee-list">
            {items.map(item => ( 
              <li key={item.id} className = "employee-info">
                <p>Name: {item.name} | Employee ID: {item.id} | Department: {item.department}</p> 
              </li>
            ))};
          </ul>
        </div>
      );
    }
  }

}

export default App;
