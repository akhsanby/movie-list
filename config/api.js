const baseUrl = "https://api.themoviedb.org/3";
const firstParameter = ["movie", "search"];
const secondParameter = ["popular", "upcoming", "movie"];
const apiKey = "ee4cefe9990dc2b171852cb4023bab21";
const language = ["en-US"];
const page = ["1"];

export async function fetchPopularMovies() {
  const response = await fetch(`${baseUrl}/${firstParameter[0]}/${secondParameter[0]}?api_key=${apiKey}`);
  return await response.json();
}

export async function fetchUpcomingMovies() {
  const response = await fetch(`${baseUrl}/${firstParameter[0]}/${secondParameter[1]}?api_key=${apiKey}&language=${language[0]}`);
  return await response.json();
}

export async function fetchMoviesById(movieId) {
  const response = await fetch(`${baseUrl}/${firstParameter[0]}/${movieId}?api_key=${apiKey}`);
  return await response.json();
}

export async function fetchMovieImagesById(movieId) {
  const response = await fetch(`${baseUrl}/${firstParameter[0]}/${movieId}/images?api_key=${apiKey}`);
  return await response.json();
}

export async function fetchMovieByKeyword(keyword) {
  const response = await fetch(`${baseUrl}/${firstParameter[1]}/${secondParameter[2]}?api_key=${apiKey}&query=${keyword}`);
  return await response.json();
}
