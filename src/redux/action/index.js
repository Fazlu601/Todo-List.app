const ADD_TODO = 'add_todo';
const REMOVE_TODO = 'remove_todo';
const HANDLE_COMPLETED_TODO = 'handle_completed_todo';
const UPDATE_TODO = 'update_todo';
const DELETE_ALL_TODO = 'delete_all_todo';

//Add Todo Action
const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: data,
    }
}

//Remove Todo Action
const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: id,
    }
}

//Handle completed & incompleted todo
const handleCompleted = (id) => {
    return {
        type: HANDLE_COMPLETED_TODO,
        payload: id,
    }
}

//Edit Todo
const editTodoSubmit = (data) => {
    return {
        type: UPDATE_TODO,
        payload: data,
    }
}

//Delete All Todo
const deleteAllTodo = () => {
    return {
        type: DELETE_ALL_TODO,
    }
}

export { ADD_TODO, addTodo, 
        REMOVE_TODO, removeTodo, 
        HANDLE_COMPLETED_TODO, handleCompleted, 
        UPDATE_TODO, editTodoSubmit, 
        DELETE_ALL_TODO, deleteAllTodo };