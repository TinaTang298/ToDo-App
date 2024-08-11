//import express framework, import cors middleware to allow cross-origin requests, body-parser to parse JSON requests
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000; // Setting the port for the server to listen on (from environment variable or default to 5000)

app.use(cors());
app.use(bodyParser.json());

let todos = [];// In-memory data store

// API Endpoints
// GET endpoint to fetch all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// POST endpoint to create a new todo
app.post('/api/todos', (req, res) => {
  const newTodo = {
    id: Date.now(), // Generate a unique ID based on the current timestamp
    text: req.body.text,
    completed: false,
    dueDate: req.body.dueDate ? new Date(req.body.dueDate) : null
  };
  todos.push(newTodo); // Add the new todo to the todos array
  res.status(201).json(newTodo); // Send the new todo as a JSON response with a 201 status code
});

// PUT endpoint to update an existing todo
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

// DELETE endpoint to delete a todo
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.status(204).end();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});