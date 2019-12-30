import React, {Component} from 'react'

class State extends Component {
  constructor() {
    super()
    this.state = {
      name: "Sally",
      age: 15
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>
    )
  }  
}

export default State