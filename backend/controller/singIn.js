const singInModel = require('../models/singIn');

module.exports.singInUser = async (createUser) => {
    let response = await singInModel.singInUser(createUser);
    console.log(response);
    return response
}