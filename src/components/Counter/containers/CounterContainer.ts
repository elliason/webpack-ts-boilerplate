// import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '~store/counter/actions/counter.actions';
import IState from '~types/stateInterface';
import {
    ICounterStateProps,
    ICounterActionsProps,
} from '~components/Counter/types/counterInterfaces';

const mapStateToProps = (state: IState): ICounterStateProps => {
    return {
        count: state.counter.count,
    };
};

const mapDispatchToProps: ICounterActionsProps = {
    decrement: increment,
    increment: decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
