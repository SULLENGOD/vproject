const express =  require('express')
const app = express();
const port = 3000

require('dotenv').config();

app.get('/home', (req, res) => {
    res.send('Home')
})
app.get('/login', (req,res) => {
    res.send('Login')
})

app.listen(port, () => {
    console.log('Server on port: 3000');
})

