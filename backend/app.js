const express =  require('express');
const cors = require('cors');
const sequelize = require('./db/connection');
const app = express();
const PORT = 3000
require('dotenv').config();

app.use(express.json());
app.use(cors)

const singInUser = require('./views/singIn')

let serverStart = async () => {
    try {
      await sequelize.authenticate();
      console.log("My SQL: Online");
  
      app.listen(PORT, () => {
        console.log(
          "Server: Online PORT: " + PORT
        );
      });
    } catch (error) {
      console.log(`Error en el SQL: ${error}`);
    }
  };
  

serverStart()

singInUser(app)