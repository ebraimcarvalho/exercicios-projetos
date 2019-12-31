import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.setCountPlus = this.setCountPlus.bind(this)
    this.setCountMinus = this.setCountMinus.bind(this)
  }

  setCountPlus() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  setCountMinus() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      }
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.setCountPlus}>Increase</button>
        <button onClick={this.setCountMinus}>Decrease</button>
      </div>
    )
  }
}

export default App