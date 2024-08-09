import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onEdit, onDelete }) {
  if (todos.length === 0) {
    return <p>No todos available. Add a new one!</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;