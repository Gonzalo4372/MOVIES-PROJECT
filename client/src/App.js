import { Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import LandingPage from "./components/LandingPage/LandingPage";
import NotFound from "./components/NotFound/NotFound.jsx";
import MovieDetail from "./components/MovieDetail/MovieDetail.jsx";
import Form from "./components/Form/Form.jsx";
import EditMovie from "./components/EditMovie/EditMovie.jsx";
import axios from "axios";
axios.defaults.baseURL = "https://movies-project-gonzalo-albornoz.onrender.com/"


function App() {
  return (
    <div className="App">
 
          

           <Routes>
          <Route exact path="*" element={<NotFound/>} />
        <Route exact path="/" element={<LandingPage/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/home/:id" element={<MovieDetail/>} />
        <Route exact path="/form" element={<Form/>} />
        <Route exact path="/edit/:id" element={<EditMovie/>} />

          </Routes>
     

    </div>
  );
}

export default App;
