'use strict'
const model =  require('../models')
const Todo = model.Todo
const TodoItem = model.TodoItem
module.exports = {
  create(req, res) {
    return Todo
      .create({
        title: req.body.title
      })
      .then(todo => res.status(200).send(todo))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return Todo
      .findAll({
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then(todos => res.status(200).send(todos))
      .catch(err => {
        console.log(err)
        res.status(400).send(err)
      })
  }
}