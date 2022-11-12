import { ADD_TODO, 
        REMOVE_TODO,
        HANDLE_COMPLETED_TODO,
        UPDATE_TODO,
        DELETE_ALL_TODO 
        } from "../action";

import {TODO_KEY, storageExist} from "../../storage/localStorage";

storageExist([]);
const storage = localStorage.getItem(TODO_KEY);

const initialState = JSON.parse(storage);

const operationReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO :
            storageExist([...state, action.payload]);
            return [...state, action.payload];
        break;
        case REMOVE_TODO :
            const filteredTodo = state.filter((todo) => todo.id !== action.payload);
            storageExist(filteredTodo);
            return filteredTodo;
        break;
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
        case DELETE_ALL_TODO :
            return [];
        break;
        default : return state;
    }
}

export { operationReducer };