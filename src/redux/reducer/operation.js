import { ADD_TODO, 
        REMOVE_TODO,
        HANDLE_COMPLETED_TODO,
        UPDATE_TODO,
        DELETE_ALL_TODO 
        } from "../action";
import {TODO_KEY, storageExist} from "../../storage/localStorage";

//If localStorage doesn't exist, 
if(!localStorage.getItem(TODO_KEY)){
    storageExist([]);
}

//Set storage and assign value from LocalStorage
const storage = localStorage.getItem(TODO_KEY);
//Set initial state variabel and assign storage with json parsing
const initialState = JSON.parse(storage);

//Set todo reducer
const operationReducer = (state = initialState, action) => {
    switch(action.type) {
        //Add Todo
        case ADD_TODO :
            storageExist([...state, action.payload]);
            return [...state, action.payload];
        break;
        //Delete Todo
        case REMOVE_TODO :
            const filteredTodo = state.filter((todo) => todo.id !== action.payload);
            storageExist(filteredTodo);
            return filteredTodo;
        break;
        //Update Completed & Incompleted Todo
        case HANDLE_COMPLETED_TODO :
            let id = action.payload;
            const updateCompletedTodo = [];
            state.map( item => {
                if( item.id === id ) {
                    item.isCompleted = !item.isCompleted;
                }
                updateCompletedTodo.push(item);
            } );
            storageExist(updateCompletedTodo);
            return updateCompletedTodo;
        //Update Todo
        case UPDATE_TODO :
            let data = action.payload;
            const updateArrayTodo = [];
            state.map( item => {
                if( item.id === data.id ) {
                    item.id = data.id;
                    item.todo = data.todo;
                    item.isCompleted = data.isCompleted;
                }
                updateArrayTodo.push(item);
            } );
            storageExist(updateArrayTodo);
            return updateArrayTodo;
        break;
        //Delete All Todo
        case DELETE_ALL_TODO :
            return [];
        break;
        default : return state;
    }
}

export { operationReducer };