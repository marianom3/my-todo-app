const express = require('express');
const router = express.Router();
const queries = require('../../queries/TodosQueries');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
  queries.getAllTodos().then((todos) => {
    res.status(200).json(todos);
  });
});

router.get('/:id', (req, res) => {
  queries.getSingleTodo(parseInt(req.params.id)).then((todo) => {
    res.status(200).json(todo);
  });
});

router.post('/', (req, res) => {
  queries.createTodo(req.body).then((response) => {
    if (response.status) {
      res.status(200).send();
    }
    else {
      res.status(500).send();
    }
  });
});

router.put('/:id', (req, res) => {
  queries.updateTodo({ id: parseInt(req.params.id), name: req.body.name }).then((response) => {
    if (response.status) {
      res.status(200).send();
    }
    else {
      res.status(500).send();
    }
  });
});

router.delete('/:id', (req, res) => {
  queries.deleteTodo(parseInt(req.params.id)).then((response) => {
    if (response.status) {
      res.status(200).send();
    }
    else {
      res.status(500).send();
    }
  });
});

module.exports = router;