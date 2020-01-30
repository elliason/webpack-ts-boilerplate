import { combineReducers } from 'redux';
import { counterReducer as counter } from '~store/counter/reducers/counter.reducer';

const rootReducer = combineReducers({
    counter,
});

export default rootReducer;
