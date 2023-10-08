import style from "./LandingPage.module.css"

import { Link } from "react-router-dom";

const LandingPage = () => {


    return (

       <>
       
        <div className={style.LandingPageFondo}>
        

        <div className={style.ContainerHome}>


         <h1 className={style.TopRate}>Top Rate Movies</h1>


         <Link to= "/home">
         
         <button className={style.buttonhome}>Home</button>
         
         </Link>
        
         </div>


        </div>
       
       
       
       
       </>



    )






}


export default LandingPage;









