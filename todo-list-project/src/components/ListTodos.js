import ListTodo from "./ListTodo.js";
import { v4 as uuidv4} from 'uuid';
import { useState } from 'react';
import './ListTodos.css';

function ListTodos() {
    const [todos, setTodos] = useState([
        {id: uuidv4(), text: 'Wash the dishes', isDone: false},
        {id: uuidv4(), text: 'Tidy your room', isDone: false},
        {id: uuidv4(), text: 'Study', isDone: false},
        
    ]);

    const onBlurInputTodoHandler = (e) => {
        if (e.target.value == '') {
            return;
        }

        const newTodoId = uuidv4();
        const newTodoText = e.target.value;

        const newTodo = {
            id: newTodoId,
            text: newTodoText,
            isDone: false,
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

    const doneTodoItemClickHandler = (e, id) => {
        let btnElement = e.target;
        let todoLiElement = e.target.parentElement;
        if (btnElement.textContent == 'Done') {
            btnElement.textContent = 'Not done';
            todoLiElement.classList.add('todo-item-done');
        } else {
            btnElement.textContent = 'Done';
            todoLiElement.classList.remove('todo-item-done');
        };

        const selectedTodo = todos.find(x => x.id == id);
        selectedTodo.isDone = !selectedTodo.isDone;
        
        let newTodos = todos.filter(t => t.id !== selectedTodo.id);
        if (!selectedTodo.isDone) {
            newTodos.unshift(selectedTodo);
        } else {
            newTodos.push(selectedTodo);
        }

        setTodos(newTodos);
    };

    return (
        <>
        <label htmlFor="add-todo-input">Add todo</label>
        <input type='text' onBlur={onBlurInputTodoHandler} id='add-todo-input' />
        <ul className="todo-list">
            {todos.map(t => <ListTodo onDelete={deleteTodoItemClickHandler} onDone={doneTodoItemClickHandler} todo={t} id={t.id} key={t.id}></ListTodo>)}
        </ul>
        </>
    );
}

export default ListTodos;