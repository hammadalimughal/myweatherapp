import React, { useState } from 'react'
// import img from './../weather_icon/png/003-weather.png'
const Main = () => {

    const [cityName, setcityName] = useState("karachi");
    const [weather_info, setweather_info] = useState({});
    const [currentdatetime, setcurrentdatetime] = useState(new Date().toLocaleString())
    const weather_api_data = async () => {
        try {

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=83f5ee497dd1c4faf26f7a437d1f2b10`
            
            let response = await fetch(url);
            let weather_data = await response.json();
            const icon = weather_data.weather[0].icon;
            const temp = weather_data.main.temp;
            const real_feel = weather_data.main.feels_like;
            const pressure = weather_data.main.pressure;
            const wind_speed = weather_data.wind.speed;
            const country = weather_data.sys.country;
            const weatherMain = weather_data.weather[0].main;
            const weatherMainDescr = weather_data.weather[0].description;
            const humidity = weather_data.main.humidity;            
            const city = weather_data.name;
            const sunrise = weather_data.sys.sunrise;
            const sunset = weather_data.sys.sunset;
            const getWeatherInfo = {
                icon,
                temp,
                real_feel,
                pressure,
                wind_speed,
                country,
                weatherMain,
                weatherMainDescr,
                city,
                humidity,
                sunrise,
                sunset
            };
            setweather_info(getWeatherInfo);
        }
        catch (error) {
            console.log(error)
        }
    }
    React.useEffect(() => {
        weather_api_data();
    }, [cityName]);
    setInterval(() => {
        setcurrentdatetime(new Date().toLocaleString())
    }, 100);
    //   console.log(weather_data.weather[0].main);
    const { icon, temp, real_feel, pressure, humidity, wind_speed, city, country, weatherMain, weatherMainDescr ,sunrise ,sunset } = weather_info

    let daterise = new Date(sunrise * 1000);
    let dateset = new Date(sunset * 1000);
    let timerise = `${daterise.getHours()}:${daterise.getMinutes()}`;
    let timeset = `${dateset.getHours()}:${dateset.getMinutes()}`;
    const d = new Date();
    let day_no = d.getDay();
    switch(day_no){
        case 0:
        day_no = "Sunday"
        break;
        case 1:
        day_no = "Monday"
        break;
        case 2:
        day_no = "Tuesday"
        break;
        case 3:
        day_no = "Wednesday"
        break;
        case 4:
        day_no = "Thursday"
        break;
        case 5:
        day_no = "Friday"
        break;
        case 6:
        day_no = "Saturday"
        break;
    }

    return (
        <>
            <div className="weather_container">
                <div className="weather_main">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-12 p-0 h-100 panel">
                            <div className="weather_main_lft d-flex flex-column justify-content-between">
                                <label className="lbl_search_city" htmlFor="search_city">Search by City Name</label>
                                    <div className="search_field"><i className="fas fa-search"></i><input value={cityName} id="search_city" onChange={(e) => setcityName(e.target.value)} type="text" placeholder="Search for places ..." />
                                    </div>
                                <div className="weather_icon_image d-flex justify-content-center mt-lg-4 px-lg-3 p-0">
                                    <img className="img-fluid" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
                                </div>
                                {/* <img src={`https://openweathermap.org/img/wn/${weather_info.icon}.png`} /> */}
                                <div className="weather_temp">
                                    <h2>{temp}</h2>
                                    <h3>&#176;C</h3>
                                </div>
                                <h3 className="real_feel">Real Feel: <span>{real_feel}&#176;c</span></h3>
                                <div className="date_time">
                                    {/* <h4> <span>{day_no} </span> {new Date().toLocaleString()}</h4> */}
                                </div>
                                <hr />
                                <div className="weather_overview">
                                    <ul>
                                        <li>
                                            <div className="row">
                                                <div className="col-3 p-lg-2 p-0"><strong>Status: </strong></div>
                                                <div className="col-9 ps-lg-4 info_overview">{weatherMain}</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div className="col-3 p-lg-2 p-0"><strong>Desc: </strong></div>
                                                <div className="col-9 ps-lg-4 info_overview">{weatherMainDescr}</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="current_location">
                                    <h2>{city}, {country}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-12 p-0 panel">
                            <div className="weather_main_rght">
                                <div className="local_time">
                                    <h4>Your Location Time: <span>{currentdatetime}</span></h4>
                                </div>
                                <div className="weather_rght_h">
                                    <h2>Weather Condition</h2>
                                    <h3>{weatherMain} <span>| {weatherMainDescr}</span></h3>
                                </div>
                                <h2>Weather Detail</h2>
                                <div className="row justify-content-center">
                                    
                                    <div className="col-lg-4 col-md-2 col-sm-3 col-4 p-0 m-0">
                                        <div className="weather_other">
                                            <div>
                                            <h4>Pressure</h4>
                                            <h5>{pressure} <span className="unit">hpa</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-2 col-sm-3 col-4 p-0 m-0">
                                        <div className="weather_other">
                                            <div>
                                            <h4>Wind</h4>
                                            <h5>{wind_speed} <span className="unit">mph</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-2 col-sm-3 col-4 p-0 m-0">
                                        <div className="weather_other">
                                            <div>
                                            <h4>Humidity</h4>
                                            <h5>{humidity} <span className="unit">%</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-2 col-sm-3 col-4 p-0 m-0">
                                        <div className="weather_other">
                                            <div>
                                            <h4>Sun Rise</h4>
                                            <h5>{timeset} <span className="unit"></span></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-2 col-sm-3 col-4 p-0 m-0">
                                        <div className="weather_other">
                                            <div>
                                            <h4>Sun Set</h4>
                                            <h5>{timerise} <span className="unit"></span></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-2 col-sm-3 col-4 p-0 m-0">
                                        <div className="weather_other">
                                            <div>
                                            <h4>Feels Like</h4>
                                            <h5>{real_feel} <span className="unit">&#176;c</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
