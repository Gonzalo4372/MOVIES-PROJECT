import axios from "axios";
 export const GET_ALL_MOVIES = "GET_ALL_MOVIES";











 export const getAllMovies = (setLoading) => {

    setLoading(true);


    return function (dispatch){

    axios.get("/movies")
    .then((response) => {
    return response.data;

    })
    .then((data) => {

    return dispatch({type: GET_ALL_MOVIES, payload: data});
    })
    .catch((error) => console.log (new Error (error)))
    .finally(() => setLoading(false));
    


    }

 }