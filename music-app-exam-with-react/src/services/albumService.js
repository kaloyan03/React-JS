import { getUserDataFromStorage } from "../utils";

const baseUrl = 'http://localhost:3030';

const getAll = () => {
    return fetch(`${baseUrl}/data/albums`)
    .then(body => body.json())
}

const getOne = (id) => {
    return fetch(`${baseUrl}/data/albums/${id}`)
    .then(body => body.json())
}

const update = (id, data) => {
    let userData = getUserDataFromStorage();

    return fetch(`${baseUrl}/data/albums/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData['accessToken']
        },
        body: JSON.stringify(data),
    })
    .then(body => body.json())
}

const create = (data) => {
    let userData = getUserDataFromStorage();

    return fetch(`${baseUrl}/data/albums`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData['accessToken']
        },
        body: JSON.stringify(data),
    })
    .then(body => body.json())
}

const deleteAlbum = (id) => {
    let userData = getUserDataFromStorage();

    return fetch(`${baseUrl}/data/albums/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': userData['accessToken']
        },
    })
    .then(body => body.json())
}

const searchAlbum = (searchingQuery) => {
    
    return fetch(`${baseUrl}/data/albums?where=name%20LIKE%20%22${searchingQuery}%22`)
    .then(response => response.json())
}



export {
    getAll,
    getOne,
    update,
    create,
    deleteAlbum,
    searchAlbum,
}
