const API_KEY = "a7d3ffb9d39923453a518cbda23da7c0";
const BASE_URL = "https://api.themoviedb.org/3";


export async function getMovieCast(movieId) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`);
  const data = await res.json();
  return data.cast || [];
}

export async function getMovieReviews(movieId) {
  const res = await fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results || [];
}


// Fetch movie details
export async function getMovieDetails(id) {
  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  if (!res.ok) throw new Error("Failed to fetch movie details");
  return res.json();
}


export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};

// caraousel services - 1
export const getTrendingMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/movie/week?language=en-US&api_key=${API_KEY}`
    );
    if (!response.ok) throw new Error(`HTTP error: ${response.status} - ${response.statusText}`);
    const data = await response.json();
    console.log('Trending movies response:', data); // Debug: Check full response
    if (!data.results || data.results.length === 0) throw new Error('No trending movies found');
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

// caraousel services - 2
export const getMovieTrailer = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
    );
    const data = await response.json();
    const trailer = data.results?.find((vid) => vid.type === 'Trailer');
    return trailer ? `https://www.youtube.com/embed/${trailer.key}` : null;
  } catch (error) {
    console.error(`Error fetching trailer for movie ${movieId}:`, error);
    return null;
  }
};
