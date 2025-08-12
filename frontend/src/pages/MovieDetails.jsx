import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMovieTrailer, getMovieCast, getMovieReviews } from "../services/api";
import "../css/MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movieData = await getMovieDetails(id);
      setMovie(movieData);

      const trailer = await getMovieTrailer(id);
      setTrailerUrl(trailer);

      const castData = await getMovieCast(id);
      setCast(castData.slice(0, 8)); // show top 8

      const reviewData = await getMovieReviews(id);
      setReviews(reviewData.slice(0, 3)); // show top 3
    };
    fetchData();
  }, [id]);

  if (!movie) return <div className="loading">Loading...</div>;

  return (
    <div className="movie-details-page">
      {/* TOP SECTION: Trailer + Poster/Info */}
      <div className="movie-top">
        <div className="trailer-section">
          {trailerUrl ? (
            <iframe
              src={trailerUrl}
              title={movie.title}
              allow="autoplay; encrypted-media"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
              className="backdrop-image"
            />
          )}
        </div>

        <div className="movie-info">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className="poster"
          />
          <h1>{movie.title}</h1>
          <p className="tagline">{movie.tagline}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Runtime:</strong> {movie.runtime} min</p>
          <p><strong>Rating:</strong> {movie.vote_average.toFixed(1)}/10</p>
          <p className="overview">{movie.overview}</p>
        </div>
      </div>

      {/* CAST SECTION */}
      <section className="cast-section">
        <h2>Top Cast</h2>
        <div className="cast-list">
          {cast.map((actor) => (
            <div key={actor.id} className="cast-card">
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "https://via.placeholder.com/200x300?text=No+Image"
                }
                alt={actor.name}
              />
              <p className="actor-name">{actor.name}</p>
              <p className="character-name">{actor.character}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="reviews-section">
        <h2>User Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="review-card">
              <h4>{review.author}</h4>
              <p>{review.content.slice(0, 250)}...</p>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </section>
    </div>
  );
}

export default MovieDetails;
