const API_KEY = 'api_key=6f6781b5dfd92b3729926cd214850c23';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;


const main = document.getElementById('main');
const form = document.getElementById('search-form');
const searchInput = document.getElementById('search');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    getMovies(searchURL + '&query=' + searchTerm);
  } else{
    getMovies(API_URL);
  }
});

getMovies(API_URL);

function getMovies(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data && data.results) {
        console.log(data.results);
        showMovies(data.results);
      } else {
        console.error('Error:', data);
        main.innerHTML = '<div class="error">Error loading movies.</div>';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      main.innerHTML = '<div class="error">Error loading movies.</div>';
    });
}

function showMovies(data) {
  main.innerHTML = '';

  if (data && Array.isArray(data) && data.length > 0) {
    data.forEach(movie => {
      const { title, poster_path, vote_average, overview } = movie;
      const movieEl = document.createElement('div');
      movieEl.classList.add('movie');
      movieEl.innerHTML = `
        <img src="${IMG_URL + poster_path}" alt="${title}">
  
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getColor(vote_average)}">${vote_average}</span>
        </div>
  
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
      `;

      main.appendChild(movieEl);
    });
  } else {
    main.innerHTML = '<div class="no-movies">No movies found.</div>';
  }
}

function getColor(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else if (vote>0){
    return 'red';
  } else {
    return 'white';
  }
}