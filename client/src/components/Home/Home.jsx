
import Header from "../Header/Header";
import style from "./Home.module.css"
import Pagination from "../Pagination/Pagination";
import MovieCards from "../MovieCards/MovieCards";
import { useEffect } from "react";
import { getAllMovies } from "../../redux/action";
import { useDispatch } from "react-redux";

const Home = () => {

  const dispatch = useDispatch();
  
 
  useEffect(() => {
    dispatch(getAllMovies);
  }, [dispatch]);
  

 
    

return (

  <>
      <div className={style.home}>
     <Header  ></Header>
     <Pagination
      

     
     
     
     ></Pagination>


     <div className={style.containerMoviesCards}>
     <MovieCards ></MovieCards>
     </div>
     </div>
  
  </>



  )


}



export default Home;