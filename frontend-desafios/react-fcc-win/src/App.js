import React from 'react'

function handleClick() {
  console.log("I was clicked")
}

function handleMouse() {
  alert("I was over something!")
}

class App extends React.Component {
  render() {
    return (
      <div>
        <img onMouseOver={handleMouse} src="https://www.fillmurray.com/200/100" alt="FilmMurray"/>
        <br/>
        <br/>
        <button onClick={handleClick}>Click me</button>
      </div>
    )
  }
}

export default App
