const app = require("./src/app");
const {sequelize} = require("./src/db");


 app.listen(3001, () => {
     
    console.log("El puerto ha iniciado")
        sequelize.sync({force: false});

 })