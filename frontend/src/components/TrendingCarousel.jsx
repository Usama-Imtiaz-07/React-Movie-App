import {Swiper, SwiperSlide} from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay, Pagination } from "swiper/modules"; 
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../css/TrendingCarousel.css'
import { useState, useEffect } from "react";
import { getTrendingMovies, getMovieTrailer } from '../services/api'


const TrendingCarousel = () => {
  const [trailers, setTrailers] = useState([])
  const [isLoading, setIsLoading] = useState(true); // Added for loading state
  const [error, setError] = useState(null); // Added for error state

  useEffect(() => {
  const fetchTrailers = async () => {
    try{
      const movies = await getTrendingMovies(); // Fetch trending movies
      const trailerData = await Promise.all(
        movies.slice(0, 7).map(async (movie) => {
          const trailerUrl = await getMovieTrailer(movie.id); // Fetch trailer for each movie
          return {
            id: movie.id,
            title: movie.title,
            trailerUrl,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          };
        })
      );
      const filteredTrailers = trailerData.filter((item) => item.trailerUrl);
        if (!filteredTrailers.length) {
          throw new Error('No trailers available')
        }
        setTrailers(filteredTrailers)
    }catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  fetchTrailers();
  }, []); // Empty dependency array to fetch once on mount
  if (isLoading) return <div className="trailer-loading">Loading...</div>;
  if (error) return <div className="trailer-error">{error}</div>;
  
  return (
    <article className="trailer-section">
      <h2 className="trailer-title">Trending This Week</h2>
        <Swiper
            className="trailer-swiper"
            modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            }}
        >
            {trailers.map((trailer) => (
            <SwiperSlide key={trailer.id} className="trailer-slide">
                <div className="trailer-media">
                {trailer.trailerUrl ? (
                    <iframe
                    src={trailer.trailerUrl}
                    title={trailer.title}
                    className="trailer-iframe"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    loading="lazy"
                    />
                ) : (
                    <img
                    src={trailer.poster}
                    alt={trailer.title}
                    className="trailer-poster"
                    />
                )
                }
                </div>
                <h3 className="trailer-caption">{trailer.title}</h3>
            </SwiperSlide>
            ))}
        </Swiper>
    </article>
  );
};


export default TrendingCarousel