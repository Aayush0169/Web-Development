import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullname: "",
    username: ""
  });

  let handleInput = (event) => {
    setFormData((curData) => {
      return { ...curData,
        [event.target.name]:event.target.value
      };
    });
  };
  
  
let handleSubmit=(event)=>{
    event.preventDefault();
}

  return (
    <form action="#" onSubmit={handleSubmit}>
      <label htmlFor="name">Enter Your name: </label>
      <input
        type="text"
        name="fullname"
        id="name"
        value={formData.fullname}
        onChange={handleInput}
      />
      <br />
      <br />

      <label htmlFor="userName">Enter User-name: </label>
      <input
        type="text"
        name="username" // Corrected name to match the state key
        id="userName"
        value={formData.username}
        onChange={handleInput}
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}