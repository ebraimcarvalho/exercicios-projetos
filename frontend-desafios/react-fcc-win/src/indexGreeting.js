import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './style.css';
import * as serviceWorker from './serviceWorker';

// #1
class App extends React.Component {
  render() {
    return (
      <div>
        <Header username="Ebraim"/>
        <Greeting />
      </div>
    )
  }  
}

// #2
class Header extends Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    )
  }  
}

// #3
class Greeting extends React.Component {
  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
      timeOfDay = "morning"
    } else if (hours > 12 && hours <=17) {
      timeOfDay = "afternoon" 
    } else {
      timeOfDay = "night"
    }

    return (
      <h1>Good {timeOfDay} to you, sir or madam</h1>
    )
  }  
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
