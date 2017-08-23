'use strict'
const Todo = require('../models').Todo
module.exports = {
  create(req, res) {
    return Todo
      .create({
        title: req.body.title
      })
      .then(todo => res.status(200).send(todo))
      .catch(error => res.status(400).send(error))
  }
}