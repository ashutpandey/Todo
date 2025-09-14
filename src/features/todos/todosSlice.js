import { createSlice, nanoid } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        filter: 'all',
        priorityFilter: 'all',
    },
    reducers: {
        addTodo: {
            reducer(state, action) {
                state.todos.push(action.payload);
            },
            prepare(text, dueDate, priority) {
                return {
                    payload: {
                        id: nanoid(),
                        text,
                        dueDate,
                        priority,
                        isCompleted: false,
                    },
                };
            },
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleComplete(state, action) {
            const existingTodo = state.todos.find(todo => todo.id === action.payload);
            if (existingTodo) {
                existingTodo.isCompleted = !existingTodo.isCompleted;
            }
        },
        editTodo(state, action) {
            const { id, newText, newDueDate, newPriority } = action.payload;
            const existingTodo = state.todos.find(todo => todo.id === id);
            if (existingTodo) {
                existingTodo.text = newText;
                existingTodo.dueDate = newDueDate;
                existingTodo.priority = newPriority;
            }
        },
        setFilter(state, action) {
            state.filter = action.payload;
        },
        setPriorityFilter(state, action) {
            state.priorityFilter = action.payload;
        },
    },
});

export const { addTodo, deleteTodo, toggleComplete, editTodo, setFilter, setPriorityFilter } = todosSlice.actions;

export default todosSlice.reducer;