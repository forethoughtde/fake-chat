import {combineReducers} from 'redux'
import changeColorReducer from './changeColorReducer';
import pillWindowReducer from './pillWindowReducer';
import initialWindowReducer from './initialWindowReducer';

const rootReducer = combineReducers({
    changeColorReducer, initialWindowReducer, pillWindowReducer
});

export default rootReducer;
