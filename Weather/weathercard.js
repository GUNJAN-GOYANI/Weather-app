import React, { useEffect } from 'react'

const Weathercard = ({

        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    }) => {

    const [weatherState , setWeatherState] =  React.useState("");

  useEffect(() =>{
    if(weathermood) {
        switch(weathermood){
            case "Clouds" :
                setWeatherState("wi-day-cloudy");
            break;

            case "Haze" :
                setWeatherState("wi-fog");
            break;

            case "Clear" :
                setWeatherState("wi-day-sunny");
            break;

            case "Mist" :
                setWeatherState("wi-dust");
            break;
       
            default :
                setWeatherState("wi-day-sunny");
            break;
        }
    }

  } , [weathermood]);


    let sec = sunset;
    let date = new Date(sec * 1000);
    let timestr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">{name} , {country}</div>
          </div>
        </div>

        {/* for current date new Date().toLocaleString() js is used */}

        <div className="date">{ new Date().toLocaleString()}</div>  

        {/* four section  */}

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                 <i className={"wi wi-sunset"}></i> 
              </p>
              <p className="extra-info-leftside">
                {timestr} PM <br/>
                Sunset
              </p>
            </div>


            <div className="two-sided-section">
              <p>
                 <i className={"wi wi-Humidity"}></i> 
              </p>
              <p className="extra-info-leftside">
                {humidity} <br/>
                Humidity
              </p>

            </div>
          </div>

          <div className="weather-extra-info">
          <div className="two-sided-section">
              <p>
                 <i className={"wi wi-Humidity"}></i> 
              </p>
              <p className="extra-info-leftside">
                {pressure} <br/>
                Pressure
              </p>

            </div>

            <div className="two-sided-section">
              <p>
                 <i className={"wi wi-Humidity"}></i> 
              </p>
              <p className="extra-info-leftside">
                {speed} <br/>
                Speed
              </p>

            </div>
          </div>
        </div>
         </article>
    </>
  )
}

export default Weathercard;
