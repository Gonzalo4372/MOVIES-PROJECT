const {Router} = require("express")
const  MoviesRouter = require("./Moviesrouter")

const mainRouter = Router();



mainRouter.use("/movies", MoviesRouter);





module.exports = mainRouter











