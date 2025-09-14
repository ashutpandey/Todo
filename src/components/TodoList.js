import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDeleteTodo, onToggleComplete, onEditTodo }) {
  if (todos.length === 0) {
    return <p className="info-text">No tasks yet. Add one above! ✨</p>;
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleComplete={onToggleComplete}
          onEditTodo={onEditTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;