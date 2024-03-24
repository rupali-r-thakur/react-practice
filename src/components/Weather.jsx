import React, { useEffect, useState } from "react";
import "./weather.css";

function Weather() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [icon, setIcon] = useState("");
  const [text, setText] = useState("");
  const [temp, setTemp] = useState("");
  const [time, setTime] = useState("");
  useEffect(() => {
    fetchData();
  }, [search]); // Add search as a dependency
  const fetchData = async () => {
    try {
      let url = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=72a1e587708946fca8852345242303&q=${search}`
      );
      let data = await url.json();
      console.log(data);
      if (data.location) {
        setRegion(data.location.region);
        setIcon(data.current.condition.icon);
        setText(data.current.condition.text);
        setTemp(data.current.temp_c);
        setTime(data.location.localtime);
      } else if (search === "") {
        setSearch("Ahmadnagar");
      } else {
        // City not found
        setRegion("");
        setIcon("");
        setText("");
        setTemp("");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <>
      <div className="weather_main_div_container">
        <div className="weather_box">
          <div className="input_container">
            <div className="input">
              <input
                type="search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          {!region ? (
            <h1>This city is not found</h1>
          ) : (
            <>
              <div className="name">
                <div className="time">
                  <h3>
                    {region} {time}
                  </h3>
                </div>

                <div className="cityName">
                  <h3>{search}</h3>
                </div>
              </div>
              <div className="celsias">
                <div className="icon">
                  <img src={icon} alt="" />
                  <span>{text}</span>
                </div>
                <div className="tempreture">
                  <h2>
                    {temp}
                    <span>&#176;</span>
                    <span>c</span>
                  </h2>
                </div>
              </div>
            </>
          )}
          <div className="result"></div>
        </div>
      </div>
    </>
  );
}

export default Weather;