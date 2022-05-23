function saveUserDataToStorage(userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
}

function getUserDataFromStorage() {
    return JSON.parse(localStorage.getItem('userData'))
}

function clearStorage() {
    localStorage.clear();
}

function isAuthenticated() {
    let userData = getUserDataFromStorage();
    return Boolean(userData);
}

export {
    saveUserDataToStorage,
    getUserDataFromStorage,
    isAuthenticated,
    clearStorage,
}