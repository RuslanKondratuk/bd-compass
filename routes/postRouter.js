const {Router} = require('express');
const PostController = require('../controllers/post.controllers')
const postRouter = Router();

postRouter.post('/:userId', PostController.createPost);
postRouter.get('/', PostController.getAllPost);
postRouter.get('/:postId', PostController.getOne);
postRouter.put('/', PostController.updatePost);
postRouter.delete('/', PostController.deletePost);


module.exports = postRouter;