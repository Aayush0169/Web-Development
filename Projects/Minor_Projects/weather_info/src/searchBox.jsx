import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "89f1b2037e0b164ee814ab68e1d6f9ba"; 

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const getWeatherInfo = async () => {

    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) {
        throw new Error(jsonResponse.message);
      }

      const result = {
        city: city,
        temp: jsonResponse.main.temp,
        temp_max: jsonResponse.main.temp_max,
        temp_min: jsonResponse.main.temp_min,
        humidity: jsonResponse.main.humidity,
        feels_like: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      
      console.log(result);
      return result;
    } catch (err) {
      
      throw err; 
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      setError(false); 
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity(""); 
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <h3 style={{ color: "black" }}>Search Your City</h3>
      <form onSubmit={handleSubmit}>
        <TextField 
          id="outlined-basic" 
          label="City Name" 
          variant="outlined" 
          name='city' 
          value={city} 
          onChange={handleChange} 
          required 
        />
        <br /> <br />
        <Button 
          variant="outlined" 
          type='submit' 
          style={{ color: "whiteSmoke", backgroundColor: "#42a5f5" }}
        >
          Search
        </Button>
        {error && <h3 style={{ color: "red" }}>There is no such place listed!!</h3>}
      </form>
    </div>
  );
}