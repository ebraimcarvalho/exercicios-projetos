import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render() {
    console.log(this.state.isLoggedIn)
    return (
      <div>
        <h3>You are {this.state.isLoggedIn ? "Logged in" : "Logged out"}</h3>
        <button onClick={this.handleClick}>{this.state.isLoggedIn ? "Log out" : "Log in"}</button>
      </div>
    )
  }
}

export default App