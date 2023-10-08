const {Sequelize} = require("sequelize");
const ModelMovies = require("./models/Movies");

require("dotenv").config();


const {  DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } = process.env




const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {logging: false})



ModelMovies(sequelize);



module.exports = {sequelize, ...sequelize.models}  // Esto tiene la conexión de la base de datos y de los modelos por separado

