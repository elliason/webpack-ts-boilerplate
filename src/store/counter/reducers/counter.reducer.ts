import {
    CounterActionTypesEnum,
    CounterActionType,
} from '../types/counterActionInterfaces';
import ICounterState from '~store/counter/types/counterInterfaces';

const initialState: ICounterState = {
    count: 0,
};

export const counterReducer = (
    state = initialState,
    action: CounterActionType,
): ICounterState => {
    switch (action.type) {
        case CounterActionTypesEnum.INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case CounterActionTypesEnum.DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return {
                ...state,
            };
    }
};
