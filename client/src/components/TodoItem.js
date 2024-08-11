import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  // State to manage whether the item is in editing mode
  const [isEditing, setIsEditing] = useState(false);
  // State to manage the text being edited
  const [editText, setEditText] = useState(todo.text);
  // State to manage the due date being edited, converting the due date string to a Date object
  const [editDueDate, setEditDueDate] = useState(todo.dueDate ? new Date(todo.dueDate) : null);

  const handleEdit = () => {
    // Calls the onEdit function passed as a prop with the updated text and due date
    onEdit(todo.id, { text: editText, dueDate: editDueDate });
    // Exit the editing mode
    setIsEditing(false);
  };
  // If the item is in editing mode, render the editing UI
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
  // If not in editing mode, render the normal todo item UI
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {/* Checkbox to toggle the completion status of the todo */}
      <input
        type="checkbox"
        checked={todo.completed} // Checked based on the completed status of the todo
        onChange={() => onToggle(todo.id)} // Toggle completion status when checkbox changes
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