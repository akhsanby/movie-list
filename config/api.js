const baseUrl = "https://api.themoviedb.org/3";
const firstParameter = ["movie"];
const secondParameter = ["popular", "upcoming"];
const apiKey = "ee4cefe9990dc2b171852cb4023bab21";
const language = ["en-US"];
const page = ["1"];

export async function fetchPopularMovies() {
  const response = await fetch(`${baseUrl}/${firstParameter[0]}/${secondParameter[0]}?api_key=${apiKey}`);
  const data = await response.json();
  return data;
}

export async function fetchUpcomingMovies() {
  const response = await fetch(`${baseUrl}/${firstParameter[0]}/${secondParameter[1]}?api_key=${apiKey}&language=${language[0]}`);
  const data = await response.json();
  return data;
}
