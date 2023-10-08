
import Header from "../Header/Header";
import style from "./Home.module.css"
import Pagination from "../Pagination/Pagination";
import MovieCards from "../MovieCards/MovieCards";

const Home = () => {


    
     
 


       return (

       <>
           <div className={style.home}>
          <Header></Header>
          <Pagination></Pagination>


          <div className={style.containerMoviesCards}>
          <MovieCards></MovieCards>
          </div>
          </div>
       
       </>



       )


}


export default Home;