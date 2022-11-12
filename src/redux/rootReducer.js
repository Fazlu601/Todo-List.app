import { combineReducers } from 'redux';
import { operationReducer } from './reducer/operation';

const rootReducer = combineReducers({
        operationReducer,
})

export default rootReducer;