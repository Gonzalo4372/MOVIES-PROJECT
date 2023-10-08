const {Router} = require("express")
const  MoviesRouter = require("./Moviesrouter")

const mainRouter = Router();



mainRouter.use("/Movies", MoviesRouter);





module.exports = mainRouter











