const {Post} = require ('../models')


module.exports.createPost = async(req, res, next) => {
    try {
        const {body, params: {userId}} = req;
        const createPost = await Post.create({...body, author: userId});
        res.status(201).send(createPost)
    } catch (error) {
        next(error)
    }
}
module.exports.getOne = async(req, res, next) => {
    try {
        const {params: {postId}} = req
        const onePosts = await Post.findById(postId).populate('author')
        res.status(201).send(onePosts)
    } catch (error) {
        next(error)
    }
}
module.exports.getAllPost = async(req, res, next) => {
    try {
        const {query: {limit, skip}} = req
        const allPosts = await Post.find().populate('author').limit(limit).skip(skip);
        res.status(201).send(allPosts)
    } catch (error) {
        next(error)
    }
}
module.exports.deletePost = async(req, res, next) => {

}
module.exports.updatePost = async(req, res, next) => {

}