import React from 'react'
import FormComponent from './FormComponent'

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
      <FormComponent
        handleChange={this.handleChange}
        submit={this.submit}
        data={this.state}
      />
    )
  }
}

export default Form