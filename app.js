const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/todos', require('./api/controllers/TodosController'));

app.get('*', (request, response) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

module.exports = app;