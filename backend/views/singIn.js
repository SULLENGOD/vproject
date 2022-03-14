const singInController = require('../controller/singIn');

module.exports = (app) => {
    app.post('/register', async(res, req) => {
        let result = await singInController.singInUser(req.body);
        console.log(req.body);
        res.send(result) 
    })
}