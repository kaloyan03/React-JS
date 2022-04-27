const requestAPI = 'http://localhost:3030/data';

const getAll = () => {
    return fetch(`${requestAPI}/games?sortBy=_createdOn%20desc`)
    .then(response => response.json())
}

const getOne = (id) => {
    return fetch(`${requestAPI}/games/${id}`)
    .then(response => response.json())
}


export default {
    getAll,
    getOne,
}