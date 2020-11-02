import React from "react";

const Form = ({ gettingWeather, handleChange, city }) => {
  const submit = (e) => {
    e.preventDefault();
    gettingWeather()
  }

  return (
    <form onSubmit={submit}>
      <div className="input-container">
        <input value={city} type="text" placeholder="Enter city name" onChange={handleChange} />
      </div>
      <div className="btn-container">
        <button type="submit" className="btn-big">add city</button>
      </div>
    </form>
  );
};

export default Form;
