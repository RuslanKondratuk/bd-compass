const express = require('express');
const UserController = require('./controllers/user.controllers')

const app = express();

app.use(express.json());

app.post('/', UserController.createUser);
app.get('/', UserController.getAll);
app.get('/:userId', UserController.getOne);
app.put('/:userId', UserController.updateUser);
app.delete('/:userId', UserController.deleteUser);

module.exports = app;