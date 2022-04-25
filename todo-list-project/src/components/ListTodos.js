import ListTodo from "./ListTodo.js";
import { useState } from 'react';

function ListTodos() {
    const [todos, setTodos] = useState([
        {id: 1, text: 'Wash the dishes'},
        {id: 2, text: 'Tidy your room'},
        {id: 3, text: 'Study'},
        
    ]);

    const onBlurInputTodoHandler = (e) => {
        const newTodoId = todos.length + 1;
        const newTodoText = e.target.value;

        const newTodo = {
            id: newTodoId,
            text: newTodoText,
        };

        setTodos(oldTodos => [
            ...oldTodos,
            newTodo,
        ]);

        e.target.value = '';
    };

    const deleteTodoItemClickHandler = (id) => {
        const newTodos = todos.filter(t => t.id !== id);
        setTodos(newTodos);
    };

    return (
        <>
        <label htmlFor="add-todo-input">Add todo</label>
        <input type='text' onBlur={onBlurInputTodoHandler} id='add-todo-input' />
        <ul>
            {todos.map(t => <ListTodo onDelete={deleteTodoItemClickHandler} todo={t} id={t.id} key={t.id}></ListTodo>)}
        </ul>
        </>
    );
}

export default ListTodos;