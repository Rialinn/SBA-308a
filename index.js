// INFO FROM MOVIE DATABASE//
const apiKey = '8ed743ce784b2a76c5bf3c02540cbd0a';
const baseUrl = 'https://api.themoviedb.org/3';
const language = "en-US";
const searchButton = document.getElementById("searchButton");
const genreFilter = document.getElementById("genreFilter");
const sortBySelect = document.getElementById("sortBySelect");
const movieList = document.getElementById("movieList");
const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${searchResult}&with_genres=${selectedGenre}&language=${language}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
      movieList.innerHTML = "";

      dataResultsForEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.className = "movieCard";

        const movieImage = document.createElement("img");
        movieImage.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        movieImage.alt = movie.title;

        
        movieImage.addEventListener("click", () => {
          const movieId = movie.id; 
          openModal(movieId);
        });

        movieCard.appendChild(movieImage);
        movieList.appendChild(movieCard);
      });
    })
    .catch(error => {
      console.error("Error searching for movies:", error);
    });


function openModal(movieId) {
  const modal = document.getElementById("movieType");
  const modalContent = document.getElementById("movieType");

  
  const url = `${baseUrl}/movie/${movieId}?api_key=${apiKey}&language=${language}`;

  fetch(url)
    .then(response => response.json())
    .then(movieData => {
     
      modalContent.innerHTML = `
        <h2>${movieData.title}</h2>
        <p>${movieData.overview}</p>
        <p>Rating: ${movieData.vote_average}</p>
        <p>Realease Date: ${movieData.release_date}</p>
        <button id="close-button-modal">&times;</button>
      `;

      modal.style.display = "block";

      
      const closeButtonModal = document.getElementById("close-button-modal");
      closeButtonModal.addEventListener("click", () => {
        modal.style.display = "none";
      });
    })
    .catch(error => {
      console.error("Error getting movie details:", error);
    });
}


















// async function fetchMovies(){
//try {
// const response = await fetch(`https://www.themoviedb.org/`);
// const data = await response.json();
// const movies = data.results;

//const resultsContainer = document.querySelector('.results');
//movies.forEach((movie) => {
//const movieCard = document.createElement('div');
// movieCard.classList.add('movie-card');
//movieCard.innerHTML = `
// <img src="https://www.themoviedb.org/${movie.poster_path}" alt="${movie.title}">
// <h2>${movie.title}</h2>
// <p>${movie.overview}</p>
//`;
//resultsContainer.appendChild(movieCard);
// });
// } catch (error) {
// console.error('Error fetching movie data:', error);
// }
//
//const axios = require('axios');

//async function fetchMoviesWithAxios() {
//  try {
//   const response = await axios.get(`https://www.themoviedb.org/`);
//  const movies = response.data.results;

// Same code as above to display movie cards
// } //catch (error) {
// console.error('Error fetching movie data with Axios:', error);
//}
//}

//fetchMoviesWithAxios();


