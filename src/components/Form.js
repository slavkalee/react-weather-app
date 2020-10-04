import React from "react";

const Form = ({ gettingWeather, handleChange, city }) => {
  return (
    <div className="form">
      <div className="input-container">
        <input value={city} type="text" placeholder="Enter city name" onChange={handleChange} />
      </div>
      <div className="btn-container">
        <button className="btn-big" onClick={() => gettingWeather()}>add city</button>
      </div>
    </div>
  );
};

export default Form;
