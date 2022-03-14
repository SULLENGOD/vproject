const express =  require('express');
const cors = require('cors');
const sequelize = require('./db/connection');
const app = express();
const PORT = 3001
require('dotenv').config();

app.use(express.json());
app.use(cors)

const singInUser = require('./views/singIn')

app.use((req,res, next)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

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