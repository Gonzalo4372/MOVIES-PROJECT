import style from "./Header.module.css"



const Header = () => {



      return (

        <>
        
          <div className={style.ContainerHeader}>

       
          <div className={style.InputSearch}>

             <input className={style.input}placeholder="Search Movies" type="text" />
            <button className={style.buttonSearch}>Search</button>

          </div>



          <div className={style.Selects}>
            <select className = {style.select1} name="Select1" id="">

            <option hidden >Sort Popularity</option>
               <option value="">Genero 1</option>
               <option value="">Genero 2</option>

            </select>

            <select  className = {style.select2}name="Select2" id="">

            <option hidden >Filter By Genres</option>

            <option value="">Genero 1</option>

            <option value="">Genero 2</option>

            </select>

                    </div>


          <div className={style.newResetMovie}>

               <button className={style.buttonNew}>New Movie</button>
               <button className={style.buttonReset}>Reset Page</button>

          </div>
        
          </div>
        
        
        
        </>









      )





}

export default Header;