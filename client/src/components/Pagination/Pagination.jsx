
import style from "./Pagination.module.css"


const Pagination = () => {

      return (

         <>
         
         <div className={style.containerPagination}>
         <div className={style.containerPaginationhijo}>

           <button className={style.botonizquierdo}> {"<"} </button>
           <button className={style.boton1}> 1</button>
           <button   className={style.boton2}> 2</button>
           <button   className={style.boton3}> 3 </button>
           <button  className={style.botonderecha}> {">"} </button>

        </div>
         </div>
         
         
         
         
         
         </>




      )




}

export default Pagination;



