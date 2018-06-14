const express = require('express');
const router = express.Router();
const queries = require('../../queries/TodosQueries');

router.get('/', (req, res) => {
  queries.getAllTodos().then((todos) => {
    res.status(200).json(todos);
  });
});

module.exports = router;