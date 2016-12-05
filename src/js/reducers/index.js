import { combineReducers } from 'redux';
import listReducer from './listReducer';
import filterReducer from './filterReducer';

export default combineReducers({
    listReducer,
    filterReducer
})

