enum CounterActionTypesEnum {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
}

interface IncrementAction {
    type: CounterActionTypesEnum.INCREMENT;
}

interface DecrementAction {
    type: CounterActionTypesEnum.DECREMENT;
}

type CounterActionType = IncrementAction | DecrementAction;

export {
    CounterActionTypesEnum,
    IncrementAction,
    DecrementAction,
    CounterActionType,
};
