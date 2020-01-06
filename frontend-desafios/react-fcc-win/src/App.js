import React from 'react'
// 43
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
    const { name, value, type, checked } = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form>
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name"/>
          <br/>
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name"/>
          <br/>
          <textarea name="textarea" value={this.state.textarea} onChange={this.handleChange}></textarea>
          <br/>
          <label>
            <input type="checkbox" checked={this.state.isFriendly} name="isFriendly" onChange={this.handleChange}/>
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
          <label>Favorite color: </label>
            <select name="favColor" value={this.state.favColor} onChange={this.handleChange}>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
            </select>          
        </form>

        <h1>Hi {this.state.firstName} {this.state.lastName}</h1>
        <h3>{this.state.isFriendly ? "You are Friendly!" : "You aren't Friendly!"}</h3>
        <h3>You are a {this.state.gender} person and your favorite color is {this.state.favColor}</h3>
      </div>
    )
  }
}

export default App