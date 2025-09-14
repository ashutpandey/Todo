import React, { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    onAddTodo(text, dueDate, priority);
    setText('');
    setDueDate('');
    setPriority('medium');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="What's next on your list?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="todo-input"
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="todo-date-input"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)} className="todo-priority-input">
        <option value="high">High Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="low">Low Priority</option>
      </select>
      <button type="submit" className="todo-add-button">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;