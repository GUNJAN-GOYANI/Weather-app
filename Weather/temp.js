// 6fad042df040197e94493728d4d43d23
// https://api.openweathermap.org/data/2.5/weather?q=surat&appid=6fad042df040197e94493728d4d43d23

import React, { useEffect, useState } from 'react';
import Weathercard from "./weathercard";
import "./style.css";

const Temp = () => {

  const [searchValue , setSearchValue] = useState("Surat");
  const [tempInfo , setTempInfo] = useState({});

  const getWeatherInfo = async() =>{
      try {
         let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=6fad042df040197e94493728d4d43d23`

         const res =await fetch(url);
         const data = await res.json() ;

         const {temp , humidity, pressure } = data.main;  //destructuring  console.log(temp)
         const {main : weathermood}= data.weather[0];  //here main is present in array of weather so weather[0] is take values
         const {name} = data;
         const {speed} = data.wind;
         const {country , sunset} = data.sys;

        const myNewInfo = {
          temp,
          humidity,
          pressure,
          weathermood,
          name,
          speed,
          country,
          sunset,
        }; 
          setTempInfo(myNewInfo);
      

        //  console.log(data);
         
      }
      catch(error){
        console.log(error)
      }
  }

  //first by default value will be shown on screen and for that getWeatherInfo will be called first
  useEffect(() => { 
    getWeatherInfo();
  } ,);


  return (
    <>
      <div className="wrap">
        <div className="search">
            <input type="search"
            placeholder='search...' 
            autoFocus
            id='search'
            className='searchTerm'

            // here to get use infor vlaue and onchange js is used means whatever use will write the value will be stored in setSearchValue
            value={searchValue }
            onChange={(event) => setSearchValue(event.target.value)}/>  

            <button className="searchButton" type='button' onClick={getWeatherInfo}>Search</button>
        </div>
      </div>

     <Weathercard {...tempInfo} />
    </>
  )
}

export default Temp;
