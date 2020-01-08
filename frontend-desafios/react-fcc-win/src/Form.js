import React from 'react'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "New York",
      isVegetarian: false,
      isKosher: false,
      isLactoseFree: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? 
      this.setState({[name]: checked})
    :
      this.setState({[name]: value})
  }

  submit() {
    alert("First name: " + this.state.firstName)
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form>

          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name" /><br/>

          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name" /><br/>

          <input type="number" name="age" value={this.state.age} onChange={this.handleChange} min="0" placeholder="Age" /><br/>

          <label>Gender: </label>
          <label>
            <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange}/>
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange}/>
            Female
          </label><br/>

          <label>Travel to: </label>
          <select name="destination" value={this.state.destination} onChange={this.handleChange}>
            <option value="New York">New York</option>
            <option value="Lisboa">Lisboa</option>
            <option value="São Paulo">São Paulo</option>
          </select><br/>

          <label>Diet Restriction? </label>
          <label>
            <input type="checkbox" name="isVegetarian" checked={this.state.isVegetarian} onChange={this.handleChange} />
            Vegetarian
          </label>
          <label>
            <input type="checkbox" name="isKosher" checked={this.state.isKosher} onChange={this.handleChange} />
            Kosher
          </label>
          <label>
            <input type="checkbox" name="isLactoseFree" checked={this.state.isLactoseFree} onChange={this.handleChange} />
            Lactose Free
          </label><br/>

          <button onClick={this.submit}>Submit</button>

        </form>
        <hr/>
        <h2>Entered Information</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>Your dieteray restrictions: {this.state.isVegetarian ? "Vegan, " : ""} {this.state.isKosher ? "Kosher, ": ""} {this.state.isLactoseFree ? "Lactose Free, " : ""}</p>
      </div>
    )
  }
}

export default Form