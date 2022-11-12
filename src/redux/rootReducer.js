import { combineReducers } from 'redux';
import { operationReducer } from './reducer/operation';

//Combine reducer
const rootReducer = combineReducers({
        operationReducer,
        //Can add more reducer...
})

export default rootReducer;