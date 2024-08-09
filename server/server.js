const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

let todos = [];// In-memory data store

// API Endpoints
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
    completed: false,
    dueDate: req.body.dueDate ? new Date(req.body.dueDate) : null
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todos[index] = { 
      ...todos[index], 
      ...req.body,
      dueDate: req.body.dueDate ? new Date(req.body.dueDate) : todos[index].dueDate
    };
    res.json(todos[index]);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});