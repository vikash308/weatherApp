import React, { useState } from 'react'
import Searchbox from './Searchbox'
import InfoBox from './InfoBox'

const WeatherApp = () => {
    const [weatherInfo, setWeatherInfo] = useState({})

    function getData(data){
        setWeatherInfo(data)
    }
  return (
    <div>
        <Searchbox getData={getData}/>
        <InfoBox data={weatherInfo}/>
    </div>
  )
}

export default WeatherApp