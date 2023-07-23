import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }


  function DisplayInfo(e){
    e.preventDefault();
    console.log(firstName);
    return(

      <React.Fragment>
        <h1>{firstName}</h1>
        <h2>{lastName}</h2>
      </React.Fragment>
    )
  }
  return (
    <form  onSubmit={(e)=>DisplayInfo(e)}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
