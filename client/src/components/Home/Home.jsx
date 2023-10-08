
import Header from "../Header/Header";
import style from "./Home.module.css"
import Pagination from "../Pagination/Pagination";
import MovieCards from "../MovieCards/MovieCards";
import { useSelector, useDispatch } from "react-redux/es/hooks/useSelector";
import { getAllMovies } from "../../redux/action";
import LoadingPage  from "../LoadingPage/LoadingPage";

const Home = () => {

       const dispatch = useDispatch();
       const { movies } = useSelector((state) => {
         return state;
       });
     
       const [cardsForPage] = useState(9);
       const [currentPage, setCurrentPage] = useState(1);
     
       const [loading, setLoading] = useState(false);
       useEffect(() => {
         dispatch(getAllMovies(setLoading));
       }, [dispatch]);
     
       if (loading) {
         return <LoadingPage />;
       }
     
       const indexOfLastCard = currentPage * cardsForPage;
     
       const indexOfFirstCard = indexOfLastCard - cardsForPage;
     
       const currentMovies = currentPage === 1 ? movies.slice(indexOfFirstCard, 9) : movies.slice(indexOfFirstCard, indexOfLastCard);
     
       const setPaginate = (newPageNum) => {
         if (newPageNum !== -1 && newPageNum !== currentPage) {
           setCurrentPage(newPageNum);
         }
       };
    
     
 


       return (

       <>
           <div className={style.home}>
          <Header  setPaginate = {setPaginate}></Header>
          <Pagination
           
           cardsForPage = {cardsForPage}
           setPaginate = {setPaginate}
           totalCard = {movies.length}
           currentPage = {currentPage}
          
          
          
          
          ></Pagination>


          <div className={style.containerMoviesCards}>
          <MovieCards currentMovies = {currentMovies}></MovieCards>
          </div>
          </div>
       
       </>



       )


}


export default Home;