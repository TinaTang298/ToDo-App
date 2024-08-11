import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AddTodo({ onAdd }) {
  // State to manage the text of the new todo
  const [text, setText] = useState(''); 
  // State to manage the due date of the new todo
  const [dueDate, setDueDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the text input is not empty after trimming whitespace
    if (text.trim()) {
      // Call the onAdd function passed as a prop with the todo text and due date
      onAdd(text, dueDate);
      setText('');// Clear the input fields after submit
      setDueDate(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} // Update the text state whenever the input changes
        placeholder="Add a new todo"
      />
      {/* Date picker for setting the due date of the todo */}
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