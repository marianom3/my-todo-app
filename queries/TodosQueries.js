const db = require('../db');

const getAllTodos = () => {
  return new Promise((resolve) => {
    db.any('SELECT * FROM todos ORDER BY created_at DESC')
      .then((data) => {           
        return resolve(data);
      })
      .catch((err) => {
        return resolve([]);
      });
  });
};

module.exports = {
  getAllTodos: getAllTodos
}