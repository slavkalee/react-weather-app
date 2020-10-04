import React from "react";

const List = ({ data, removeCard }) => {

  return (
    <>
      {data.map(({ id, name, temp, pressure, sunset, sunrise, icons }) => (
        <ul className="list" key={`__${id}`}>
          <li className="list__item item">
            <div className="item__header">
              <div className="location">{name}</div>
              <div className="btn--container">
                <button className="btn-text" onClick={() => removeCard(id)}>
                  Delete
                </button>
              </div>
            </div>
            <div className="item__body">
              <ul className="item__body_list">
                <li className="item__body_item">temp: {temp}°С</li>
                <li className="item__body_item">pressure: {pressure}</li>
                <li className="item__body_item">sunrise: {sunrise}</li>
                <li className="item__body_item">sunset: {sunset}</li>
              </ul>
              <div className="weather-icon">
                {icons.map(({ icon, id }) => (
                  <img
                    src={`http://openweathermap.org/img/wn/${icon}.png`}
                    key={id}
                    alt="weather-icon"
                  />
                ))}
              </div>
            </div>
          </li>
        </ul>
      ))}
    </>
  );
};

export default List;
