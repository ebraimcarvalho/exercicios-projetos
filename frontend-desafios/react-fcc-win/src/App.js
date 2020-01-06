import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      gender: "",
      location: "New York",
      dietRestrict: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name" />
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name" />
          <input type="number" name="age" value={this.state.age} onChange={this.handleChange} min="0" />
          <label>
            <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange}/>
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange}/>
            Female
          </label>
          <br/>
          <label>Travel to: </label>
          <select name="location" value={this.state.location} onChange={this.handleChange}>
            <option value="New York">New York</option>
            <option value="Lisboa">Lisboa</option>
            <option value="São Paulo">São Paulo</option>
          </select>
          <br/>
          <label>Diet Restriction? </label>
          <label>
            <input type="checkbox" name="dietRestrict" value={this.state.dietRestrict} onChange={this.handleChange} />
            Vegan
          </label>

          <h1>{this.state.firstName} {this.state.lastName}, {this.state.age}, {this.state.gender}, to {this.state.location} and are diet restric {this.state.dietRestrict}</h1>
        </form>
      </div>
    )
  }
}

export default App