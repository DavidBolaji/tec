import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import sidebarReducer from './sidebarReducer';


const allReducer = combineReducers({
    themeReducer,
    sidebarReducer
})

export default allReducer;