'use strict'
const TodoItem = require('../models').TodoItem
module.exports = {
  create(req, res) {
    console.log(req.params)
    return TodoItem
      .create({
        content: req.body.content,
        todoId: req.params.todoId
      })
      .then(todoItem => res.status(200).send(todoItem))
      .catch(err => res.status(400).send(err))
  }
}