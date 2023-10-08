
import style from "./MovieCards.module.css";
import MovieCard from "../MovieCard/MovieCard";
import NotSearch from "../NotSearch/NotSearch";



const MovieCards = ({currentMovies}) => {


      if (!currentMovies || !currentMovies.length) {
            return (
              <div className="containerNotFoundCards">
                <NotSearch />
              </div>
            );
          }

 return (

  <>
  
  <div className={style.MovieCards}>
      {currentMovies?.map((movie) => {

          return (
               <MovieCard
                id = {movie.id}
                title = {movie.title}
                image = {movie.image}
                genres = {movie.genres}
                popularity = {movie.popularity}
                key = {movie.id}
               >
               </MovieCard>
          )
      })
      }
  </div>
  </>
 )

}

export default MovieCards;