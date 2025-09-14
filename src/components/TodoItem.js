import React, { useState } from 'react';
import { FaTrash, FaEdit, FaSave } from 'react-icons/fa';

function TodoItem({ todo, onDeleteTodo, onToggleComplete, onEditTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [newDueDate, setNewDueDate] = useState(todo.dueDate);
  const [newPriority, setNewPriority] = useState(todo.priority);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (newText.trim() === '') return;
    onEditTodo(todo.id, newText, newDueDate, newPriority);
    setIsEditing(false);
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'high':
        return 'priority-high';
      case 'medium':
        return 'priority-medium';
      case 'low':
        return 'priority-low';
      default:
        return '';
    }
  };

  return (
    <div className={`todo-item ${todo.isCompleted ? 'completed' : ''} ${getPriorityClass(todo.priority)}`}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="edit-form">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="edit-input"
          />
          <input
            type="date"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
            className="edit-date-input"
          />
          <select value={newPriority} onChange={(e) => setNewPriority(e.target.value)} className="edit-priority-input">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <button type="submit" className="save-button"><FaSave /></button>
        </form>
      ) : (
        <>
          <div className="todo-details">
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => onToggleComplete(todo.id)}
              aria-label={`Mark ${todo.text} as complete`}
            />
            <div className="todo-text-container">
              <span className="todo-text">{todo.text}</span>
              {todo.dueDate && (
                <span className="todo-due-date">Due: {new Date(todo.dueDate).toLocaleDateString()}</span>
              )}
            </div>
          </div>
          <div className="todo-actions">
            <button onClick={() => setIsEditing(true)} className="edit-button" aria-label={`Edit ${todo.text}`}>
              <FaEdit />
            </button>
            <button onClick={() => onDeleteTodo(todo.id)} className="delete-button" aria-label={`Delete ${todo.text}`}>
              <FaTrash />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;