const TODO_KEY = 'todo-list';

//Set localStorage to exist
const storageExist = (data) => {
    if(!localStorage) {
        console.log('browser tidak support local storage');
    }else {
        //Call saveData and send object value to argument
        saveData(data);
    }
}

//Add items to localStorage
const saveData = data => {
    localStorage.setItem(TODO_KEY, JSON.stringify(data));
}

export {TODO_KEY, storageExist};