function Description() {
  return <p>We Live in Time is a 2024 romantic drama film directed by John Crowley and written by Nick Payne. It follows the relationship of a couple, Tobias Durand (Andrew Garfield) and Almut Brühl (Florence Pugh), over the course of a decade.</p>
}

function Title() {
    let name="We live in time "
    let releaseDate=2019
  return <div>
    <h2>Movie of the Day:</h2>
    <h3>{name+ releaseDate}</h3> 
    {/* it enables writing javaScript with JSX */}
  </div>
}

export  {Description,Title}