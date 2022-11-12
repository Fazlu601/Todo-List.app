const TODO_KEY = 'todo-list';

const storageExist = (data) => {
    if(!localStorage) {
        console.log('browser tidak support local storage');
    }else {
        saveData(data);
    }
}

const saveData = data => {
    localStorage.setItem(TODO_KEY, JSON.stringify(data));
}

export {TODO_KEY, storageExist};