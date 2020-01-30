import { Dispatch } from 'redux';
import {
    IncrementAction,
    DecrementAction,
    CounterActionTypesEnum,
} from '~store/counter/types/counterActionInterfaces';

const increment = (dispatch: Dispatch): IncrementAction => {
    return dispatch({ type: CounterActionTypesEnum.INCREMENT });
};

const decrement = (dispatch: Dispatch): DecrementAction => {
    return dispatch({ type: CounterActionTypesEnum.DECREMENT });
};

export { increment, decrement };
