import { Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import LandingPage from "./components/LandingPage/LandingPage";






function App() {
  return (
    <div className="App">
 
          

           <Routes>
          <Route exact path="/" element= {<LandingPage></LandingPage>}/>
          <Route exact path ="/home" element= {<Home></Home>}/>

          </Routes>
     

    </div>
  );
}

export default App;
