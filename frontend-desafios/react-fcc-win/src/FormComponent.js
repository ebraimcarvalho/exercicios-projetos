import React from 'react'

function FormComponent(props) {
  return (
    <div>
      <form>

        <input type="text" name="firstName" value={props.firstName} onChange={props.handleChange} placeholder="First Name" /><br/>

        <input type="text" name="lastName" value={props.lastName} onChange={props.handleChange} placeholder="Last Name" /><br/>

        <input type="number" name="age" value={props.age} onChange={props.handleChange} min="0" placeholder="Age" /><br/>

        <label>Gender: </label>
        <label>
          <input type="radio" name="gender" value="male" checked={props.data.gender === "male"} onChange={props.handleChange}/>
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" checked={props.data.gender === "female"} onChange={props.handleChange}/>
          Female
        </label><br/>

        <label>Travel to: </label>
        <select name="destination" value={props.destination} onChange={props.handleChange}>
          <option value="New York">New York</option>
          <option value="Lisboa">Lisboa</option>
          <option value="São Paulo">São Paulo</option>
        </select><br/>

        <label>Diet Restriction? </label>
        <label>
          <input type="checkbox" name="isVegetarian" checked={props.isVegetarian} onChange={props.handleChange} />
          Vegetarian
        </label>
        <label>
          <input type="checkbox" name="isKosher" checked={props.isKosher} onChange={props.handleChange} />
          Kosher
        </label>
        <label>
          <input type="checkbox" name="isLactoseFree" checked={props.isLactoseFree} onChange={props.handleChange} />
          Lactose Free
        </label><br/>

        <button onClick={props.submit}>Submit</button>

      </form>
      <hr/>
      <h2>Entered Information</h2>
      <p>Your name: {props.data.firstName} {props.data.lastName}</p>
      <p>Your age: {props.data.age}</p>
      <p>Your gender: {props.data.gender}</p>
      <p>Your destination: {props.data.destination}</p>
      <p>Your dieteray restrictions: {props.data.isVegetarian ? "Vegan, " : ""} {props.data.isKosher ? "Kosher, ": ""} {props.data.isLactoseFree ? "Lactose Free, " : ""}</p>
    </div>
  )
}

export default FormComponent