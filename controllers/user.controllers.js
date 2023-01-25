const {User} = require('../models/')


module.exports.createUser = async( req, res, next) => {
    try {
        const{body} = req;
        const user = await User.create(body);
        res.status(201).send(user);
    } catch (error) {
        next(error)
    }
}

module.exports.getAll = async( req, res, next) => {
    try {
        const{body} = req;
        const allUsers = await User.find();
        res.status(201).send(allUsers);
    } catch (error) {
        next(error)
    }
}

module.exports.getOne = async (req, res,next) => {
    try {
        const {params: {userId}}= req;
        const user = await User.findById(userId);
        res.status(200).send(user);
    } catch (error) {
        next(error)
    }
}

module.exports.updateUser = async( req, res, next) => {
    try {
        const{body, params: {userId}} = req;
        console.log(userId);
        const updateUser = await User.findByIdAndUpdate(userId, body, {returnDocument:'after'});
        res.status(201).send(updateUser);
    } catch (error) {
        next(error)
    }
};

module.exports.deleteUser = async( req, res, next) => {
    try {
        const{params: {userId}} = req;
        const deleteUser = await User.findByIdAndDelete(userId);
        res.status(204).send(deleteUser);
    } catch (error) {
        next(error)
    }
};