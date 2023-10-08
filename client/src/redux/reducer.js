const { GET_ALL_MOVIES } = require("./action")


const initialState = {
  allMovies: [],
  movies: [],
  movieDetail: {},
}





const rootReducer = (state = initialState, action ) => {


   switch(action.type){

   case GET_ALL_MOVIES:
    return {

      ...state,
      allMovies: action.payload,
      movies: action.payload,

    }





















   }













}




export default rootReducer;