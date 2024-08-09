import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../api/todoApi';
import '../styles/App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos()
      .then(setTodos)
      .catch(error => {
        console.error("Failed to fetch todos:", error);
        
      });
  }, []);

  const handleAddTodo = (text, dueDate) => {
    createTodo(text, dueDate).then(newTodo => setTodos([...todos, newTodo]));
  };

  const handleToggleTodo = (id) => {
    const todo = todos.find(t => t.id === id);
    updateTodo(id, { completed: !todo.completed })
      .then(updatedTodo => {
        setTodos(todos.map(t => t.id === id ? updatedTodo : t));
      });
  };

  const handleEditTodo = (id, updates) => {
    updateTodo(id, updates)
      .then(updatedTodo => {
        setTodos(todos.map(t => t.id === id ? updatedTodo : t));
      });
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id).then(() => {
      setTodos(todos.filter(t => t.id !== id));
    });
  };

  return (
    <div className="App">
      <h1>My To-do List</h1>
      <AddTodo onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onEdit={handleEditTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
}

export default App;