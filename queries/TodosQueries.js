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

const getSingleTodo = (id) => {
  return new Promise((resolve) => {
    db.one('SELECT * FROM todos WHERE id = $1', id)
      .then((data) => {
        return resolve(data);
      })
      .catch((err) => {
        return resolve({});
      });
  });
};

const createTodo = (todo) => {
  console.log(todo);
  return new Promise((resolve) => {
    db.none('INSERT INTO todos(name) VALUES(${name})', todo)
      .then(() => {
        return resolve({ status: 'success' });
      })
      .catch((err) => {        
        return resolve({});
      });
  });
};

const updateTodo = (todo) => {  
  return new Promise((resolve) => {
    db.none('UPDATE todo SET name = ${name} WHERE id = ${id}', todo)
      .then(() => {
        return resolve({ status: 'success' });
      })
      .catch((err) => {    
        return resolve({});
      });
  });
};

const deleteTodo = (id) => {  
  return new Promise((resolve) => {
    db.none('DELETE FROM todo WHERE id = ${id}', id)
      .then(() => {
        return resolve({ status: 'success' });
      })
      .catch((err) => {    
        return resolve({});
      });
  });
};

module.exports = {
  getAllTodos: getAllTodos,
  getSingleTodo: getSingleTodo,
  createTodo: createTodo,
  updateTodo: updateTodo,
  deleteTodo: deleteTodo
}