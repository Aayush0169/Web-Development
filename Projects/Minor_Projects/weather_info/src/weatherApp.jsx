import SearchBox from './searchBox'
import InfoBox from './infoBox'
import { useState } from 'react'

export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({    
    city:"Delhi",
    temp: 28.12,
    feels_like: 32.9,
    temp_min: 26.15,
    temp_max: 28.12,
    humidity: 83})

    let updateInfo= (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(<div>
        <h2 style={{color:"black"}}>Weather App</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>)
}