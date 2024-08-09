import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text, dueDate);
      setText('');
      setDueDate(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <DatePicker
        selected={dueDate}
        onChange={date => setDueDate(date)}
        placeholderText="Set due date"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;