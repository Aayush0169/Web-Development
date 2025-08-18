import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import WeatherApp from './weatherApp'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <WeatherApp/>
    </>
  )
}

export default App
