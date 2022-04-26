const APIUrl = 'http://localhost:8000/api';


const getTodos = () => {
    return fetch(`${APIUrl}/todos/`)
    .then(body => body.json())
}

const createTodo = (todo) => {
    return fetch(`${APIUrl}/todos/`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(todo),
    })
    .then(body => body.json())
}

const updateTodo = (todo) => {
    return fetch(`${APIUrl}/todo/${todo.id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(todo),
    })
    .then(body => body.json())
}

const deleteTodo = (todo) => {
    return fetch(`${APIUrl}/todo/` + todo.id, {
        method: 'DELETE',
    })
}


export {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
};