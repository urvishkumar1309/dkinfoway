import {combineReducers} from 'redux';
import {burgerReducer} from './burgerReducer';
import {teckstackReducer} from './teckstackReducer'
export const rootReducer =combineReducers({
    open:burgerReducer,
    teckstack:teckstackReducer
});
