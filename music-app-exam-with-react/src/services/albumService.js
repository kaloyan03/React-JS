const baseUrl = 'http://localhost:3030/';

const getAll = () => {
    return fetch(`${baseUrl}/data/albums`)
    .then(body => body.json())
}


export {
    getAll,
}
