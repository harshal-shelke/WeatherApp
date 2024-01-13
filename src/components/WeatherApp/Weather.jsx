import React, { useState } from "react";
import "./Weather.css";

import clear from "../assets/clear.png";
import cloud from "../assets/cloud.png";
import drizzle from "../assets/drizzle.png";
import humidity from "../assets/humidity.png";
import rain from "../assets/rain.png";
import search from "../assets/search.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";

const Weather = () => {

    let api_key="3afd4628778236c2f934eeba1de9ec65";

    const [icon, seticon] = useState(clear)
   
    

    
    

    const searchc=async()=>{
        const element=document.getElementsByClassName("cityInput");
        if(element[0].value===""){
            return 0;
        }

        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`

        let response=await fetch(url)
        let data= await response.json();

        const humidity= document.getElementsByClassName("humidity-rate")
        const wind=document.getElementsByClassName("wind-rate")
        const location=document.getElementsByClassName("weather-loc")
        const temp=document.getElementsByClassName("weather-temp")

        humidity[0].innerHTML=data.main.humidity+" %";
        wind[0].innerHTML=data.wind.speed +" km/h";
        location[0].innerHTML=data.name ;
        location[1].innerHTML=data.sys.country ;
        temp[0].innerHTML=data.main.temp +"°C"; 


        if(data.weather[0].icon==="01d" ||data.weather[0].icon==="01n"){
            seticon(clear);
        }
        else if(data.weather[0].icon==="02d" ||data.weather[0].icon==="02n"){
            seticon(cloud);
        }
        else if(data.weather[0].icon==="03d" ||data.weather[0].icon==="03n"){
            seticon(drizzle);
        }
        else if(data.weather[0].icon==="04d" ||data.weather[0].icon==="04n"){
            seticon(humidity);
        }
        else if(data.weather[0].icon==="09d" ||data.weather[0].icon==="09n"){
            seticon(rain);
        }
        else if(data.weather[0].icon==="010d" ||data.weather[0].icon==="010n"){
            seticon(snow);
        }
        else if(data.weather[0].icon==="011d" ||data.weather[0].icon==="011n"){
            seticon(wind);
        }
        else {
            seticon(cloud);
        }

    }

  return (
    <div  className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="search" />
        <div className="search-icon" onClick={()=>{searchc()}}>
          <img src={search} alt="" />
        </div>
      </div>
      <div className="weather-img">
        <img src={icon} alt="" />
      </div>
      <div className="weather-temp"></div>
      <div className="weather-loc"></div>
      <div className="weather-loc">Enter City Name</div>
      <div className="data-cont">
        <div className="element">
          <img src={humidity} alt="" className="img" />
          <div className="data">
            <div className="humidity-rate"></div>
            <div className="text"></div>
          </div>
        </div>

        <div className="element">
          <img src={wind} alt="" className="img" />
          <div className="data">
            <div className="wind-rate"></div>
            <div className="text"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
