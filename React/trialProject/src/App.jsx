
import './App.css'
// import {Description,Title} from './Description'
import Movie from './Movie'

function App() {
  return<>
    {/* <Title/>
    <Description/> */}
    <Movie title="Fantastic 4" releaseDate={2025} source={"src/Posters/f4.jpg"}/>
    <Movie title="The Northman" releaseDate={2022} source={"src/Posters/northman.jpg"}/>
    <Movie title="F1" releaseDate={2025} source={"src/Posters/f1.jpg"}/>
    <Movie title="Dune" releaseDate={2024} source={"src/Posters/dune.png"}/>
    <Movie title="The Superman" releaseDate={2025} source={"src/Posters/superman.jpg"}/>
    <Movie title="Inglourious Basterds" releaseDate={2009} source={"src/Posters/ing.jpg"}/>
   </>
}

export default App
