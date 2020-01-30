export interface ICounterActionsProps {
    increment: Function;
    decrement: Function;
}

export interface ICounterStateProps {
    count: number;
}

interface ICounterProps extends ICounterActionsProps, ICounterStateProps {
    //
}

export default ICounterProps;
