import React from 'react'
//41
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      character: {}
    }
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
        })
      })
  }

  render() {
    const text = this.state.loading ? "Loading..." : this.state.character.name
    console.log(this.state.character)
    return (
      <div>
        <h1>{text}</h1>
      </div>
    )
  }
}

export default App