import moment from "moment";
import React, { useEffect, useState } from "react";

import Form from "./components/Form";
import List from "./components/List";
import { getHourString, getMinuteString, tempConverter } from "./utils";

const API_KEY = "3bdbc0967df76f7af63bbd63cc6e8e60";

function App() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("");

  useEffect(() => {
    if (localStorage.getItem("dataStore")) {
      setData(JSON.parse(localStorage.getItem("dataStore")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dataStore", JSON.stringify(data));
  }, [data]);

  const handleChange = (e) => setCity(e.target.value);

  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const gettingWeather = async (e) => {
    if (city) {
      try {
        const api_url = await fetch(API);
        const dataWeather = await api_url.json();
        console.log(dataWeather);

        

        const getTimeString = (date) => {
          return `${getHourString(date)}:${getMinuteString(date)} PM`;
        };

        setData([
          ...data,
          {
            id: dataWeather.id,
            name: `${dataWeather.name}, ${dataWeather.sys.country}`,
            temp: tempConverter(dataWeather.main.temp),
            pressure: dataWeather.main.pressure,
            sunset: getTimeString(dataWeather.sys.sunset),
            sunrise: moment(dataWeather.sys.sunrise).format('LT'),
            icons: dataWeather.weather,
            
          },
        ]);
      } catch (err) {
        setCity('')
      }
    }
    setCity("");
  };

  const removeCard = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="main container">
      <h1 className="main__title">React Weather App</h1>
      <Form
        gettingWeather={gettingWeather}
        handleChange={handleChange}
        city={city}
      />
      <List data={data} removeCard={removeCard} />
    </div>
  );
}

export default App;
