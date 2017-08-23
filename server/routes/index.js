'use strict'
const todoController = require('../controllers').todos
module.exports = app => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!'
  }))

  app.post('/api/todos', todoController.create)
}