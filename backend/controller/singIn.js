const singInModel = require('../models/singIn');

module.exports.singInUser = async (createUser) => {
    let response = singInModel.singInUser(createUser);
    console.log(response);
    return response
}