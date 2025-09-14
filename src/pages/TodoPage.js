import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleComplete, editTodo, setFilter, setPriorityFilter } from '../features/todos/todosSlice';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

function TodoPage() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);
    const filter = useSelector(state => state.todos.filter);
    const priorityFilter = useSelector(state => state.todos.priorityFilter);

    const handleAddTodo = (text, dueDate, priority) => {
        dispatch(addTodo(text, dueDate, priority));
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleToggleComplete = (id) => {
        dispatch(toggleComplete(id));
    };

    const handleEditTodo = (id, newText, newDueDate, newPriority) => {
        dispatch(editTodo({ id, newText, newDueDate, newPriority }));
    };

    const getFilteredAndPrioritizedTodos = () => {
        let filteredTodos = todos;

        if (filter === 'active') {
            filteredTodos = filteredTodos.filter(todo => !todo.isCompleted);
        } else if (filter === 'completed') {
            filteredTodos = filteredTodos.filter(todo => todo.isCompleted);
        }

        if (priorityFilter !== 'all') {
            filteredTodos = filteredTodos.filter(todo => todo.priority === priorityFilter);
        }

        return filteredTodos;
    };

    const filteredTodos = getFilteredAndPrioritizedTodos();
    const completedCount = todos.filter(todo => todo.isCompleted).length;
    const pendingCount = todos.length - completedCount;

    return (
        <div className="container">
            <h1>My Tasks</h1>
            <div className='task-counter'>
                <p>Pending: <strong>{pendingCount}</strong></p>
                <p>Completed: <strong>{completedCount}</strong></p>
            </div>
            <TodoForm onAddTodo={handleAddTodo} />
            <div className="filter-container">
                <label>Filter by Status:</label>
                <select value={filter} onChange={(e) => dispatch(setFilter(e.target.value))}>
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                </select>
                <label>Filter by Priority:</label>
                <select value={priorityFilter} onChange={(e) => dispatch(setPriorityFilter(e.target.value))}>
                    <option value="all">All</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
            <TodoList
                todos={filteredTodos}
                onDeleteTodo={handleDeleteTodo}
                onToggleComplete={handleToggleComplete}
                onEditTodo={handleEditTodo}
            />
        </div>
    );
}

export default TodoPage;