import './App.css'
function Movie({title,releaseDate,source}){
    return <div className="movie-box" style={{backgroundColor:"#212529"}}>
    <h2>{title}</h2>
    <img src= {source} alt="poster" height={"190px"} width={"150"} />
    <h4 style={{fontWeight: releaseDate<=2024 ? 100: 700}}>{releaseDate}</h4> {/*embeding style with condition*/}
    </div>
}


export default Movie

