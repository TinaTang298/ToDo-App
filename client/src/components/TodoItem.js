import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editDueDate, setEditDueDate] = useState(todo.dueDate ? new Date(todo.dueDate) : null);

  const handleEdit = () => {
    onEdit(todo.id, { text: editText, dueDate: editDueDate });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <li className="todo-item editing">
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <DatePicker
          selected={editDueDate}
          onChange={date => setEditDueDate(date)}
          placeholderText="Set due date"
        />
        <button onClick={handleEdit}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </li>
    );
  }

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className="todo-text">{todo.text}</span>
      {todo.dueDate && (
        <span className="due-date">Due: {new Date(todo.dueDate).toLocaleDateString()}</span>
      )}
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;