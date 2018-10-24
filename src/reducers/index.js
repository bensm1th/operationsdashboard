import { combineReducers } from 'redux';
import classes from './classReducer';

const rootReducer = combineReducers({
    classes,
    banana: () => "banana"
});

export default rootReducer;