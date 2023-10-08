
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../redux/actions";
import { Link } from "react-router-dom";
import style from "./MovieCard.module.css"





const MovieCard = ({ id, title, image, genres, popularity }) => {


    const dispatch = useDispatch();

    const handleDelete = (e) => {
      dispatch(deleteMovie(id));
    };
  
    const isDB = () => {
      return isNaN(Number(id));
    };

   return (


    <>
    <div className={style.containerCard}>
      {isDB() && (
        <div className={style.movieButtons}>
          <button className="buttonCardDelete" onClick={(e)=>handleDelete(e)}>
            X
          </button>
          <Link className={style.linkCardEdit} to={`/edit/${id}`}>
            <button className="buttonCardEdit">EDIT</button>
          </Link>
        </div>
      )}
      <Link className={style.linkCard} to={`/home/${id}`}>
        <img className={style.imageCard} src={image} alt="imagen" />
      </Link>
      <div className={style.tailCard}>
        <h1 className={style.titleMovie}>{title}</h1>
        <div className= {style.genresCard}>
          {Array.isArray(genres) ? (
            genres?.map((genre, i) => {
              return (
                <p key={i} className={style.genreCard}>
                  {genre}
                </p>
              );
            })
          ) : (
            <p className={style.genreCardDB}>{genres}</p>
          )}
        </div>
      </div>
      <p className={style.popularityCard}>{`Popularity: ${popularity}`}</p>
    </div>
  </>
     









   )



}





export default MovieCard;