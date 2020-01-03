import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        isLoading: false
      })
    }, 2000)
  }

  render() {
    console.log(this.state.isLoading)
    return (
      <div>
        {this.state.isLoading ? <h1>Loading...</h1> : <h1>Please, do Login!</h1>}
      </div>
    )
  }
}

export default App