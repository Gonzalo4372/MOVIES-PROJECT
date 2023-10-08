const {Router} = require("express")
const MoviesRouter = Router();

const {
    
    getAllMoviesHandler,
    getMovieHandler,
    createMovieHandler,
    setMovieHandler,
    deleteMovieHandler

} = require("../handlers/moviesHandler")




MoviesRouter.get("/", getAllMoviesHandler);
MoviesRouter.get("/:id", getMovieHandler);
MoviesRouter.post("/", createMovieHandler);
MoviesRouter.put("/:id", setMovieHandler);
MoviesRouter.delete("/:id", deleteMovieHandler);






module.exports = MoviesRouter;