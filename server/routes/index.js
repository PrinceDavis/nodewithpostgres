'use strict'
const todoController = require('../controllers').todos
const todoItemController = require('../controllers').todoItems
module.exports = app => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!'
  }))

  app.post('/api/todos', todoController.create)
  app.get('/api/todos', todoController.list)
  app.post('/api/todos/:todoId/items', todoItemController.create)
}