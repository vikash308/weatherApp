import { useState } from 'react'
import './App.css'
import WeatherApp from './components/WeatherApp'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherApp/>
    </>
  )
}

export default App
