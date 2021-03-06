import { getUserDataFromStorage } from "../utils";

const baseUrl = 'http://localhost:3030';


const register = (data) => {
    return fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(body => body.json())
}

const login = (data) => {
    return fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(body => body.json())
}

const logout = () => {
    let userData = getUserDataFromStorage();

    return fetch(`${baseUrl}/users/logout`, {
        method: 'GET',
        headers: {
            'X-Authorization': userData['accessToken'],
        }
    })
    .then(body => body)
}

export {
    register,
    login,
    logout,
}