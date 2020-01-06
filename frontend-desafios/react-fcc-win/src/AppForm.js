import React from 'react'
//42
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      textarea: "Some text default",
      gender: "",
      favColor: "blue"
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form>
          <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange}/>
          <br/>
          <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
          <br/>
          <textarea value={this.state.textarea} name="textarea" onChange={this.handleChange}/>
          <br/>
          <label>
            <input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onChange={this.handleChange}/>
            Is Friendly?
          </label>
          <br/>
          <label>
            <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange}/>
            Male
          </label>
          <br/>
          <label>
            <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange}/>
            Female
          </label>
          <br/>
          <label>Favorite color:</label>
          <select name="favColor" value={this.state.favColor} onChange={this.handleChange}>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
          </select>

          <h1>{this.state.firstName} {this.state.lastName}</h1>
          <h2>You are a {this.state.gender} person</h2>
          <h2>You favorite color is {this.state.favColor}</h2>
        </form>
      </div>
    )
  }
}

export default App