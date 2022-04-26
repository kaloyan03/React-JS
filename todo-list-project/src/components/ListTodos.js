import ListTodo from "./ListTodo.js";
import { useState, useEffect } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo } from "../services/todoService.js";
import './ListTodos.css';

function ListTodos() {
    // const [todos, setTodos] = useState([
    //     {id: uuidv4(), text: 'Wash the dishes', isDone: false},
    //     {id: uuidv4(), text: 'Tidy your room', isDone: false},
    //     {id: uuidv4(), text: 'Study', isDone: false},

    // ]);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos()
            .then(resultTodos => {
                setTodos(resultTodos);
            })
    }, [])

    const onBlurInputTodoHandler = (e) => {
        if (e.target.value == '') {
            return;
        }

        // const newTodoId = uuidv4();
        const newTodoText = e.target.value;

        const newTodo = {
            // id: newTodoId,
            text: newTodoText,
            isDone: false,
        };

        // const newTodo = {
        //         text: newTodoText,
        //     };


        createTodo(newTodo)
            .then(todo => {
                setTodos(oldTodos => [
                    ...oldTodos,
                    todo,
                ])
            }
            )

        // setTodos(oldTodos => [
        //     ...oldTodos,
        //     newTodo,
        // ]);

        e.target.value = '';
    };

    const deleteTodoItemClickHandler = (id) => {
        let selectedTodo = todos.find(x => x.id == id);
        deleteTodo(selectedTodo)
        setTodos(todoState => [
            ...todoState.filter(x => x.id != selectedTodo.id)
        ])
        // const newTodos = todos.filter(t => t.id !== id);
        // setTodos(newTodos);
    };

    const doneTodoItemClickHandler = (id) => {
        let selectedTodo = todos.find(x => x.id == id);
        selectedTodo = { ...selectedTodo, isDone: !selectedTodo.isDone }

        updateTodo(selectedTodo)
            .then(updatedTodo => {
                let newTodos = todos.filter(t => t.id !== selectedTodo.id);
                if (!updatedTodo.isDone) {
                    newTodos.unshift(updatedTodo);
                } else {
                    newTodos.push(updatedTodo);
                }

                setTodos(newTodos);
            }
            )



        // let newTodos = todos.filter(t => t.id !== selectedTodo.id);
        // if (!selectedTodo.isDone) {
        //     newTodos.unshift(selectedTodo);
        // } else {
        //     newTodos.push(selectedTodo);
        // }

        // setTodos(newTodos);
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