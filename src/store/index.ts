import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

declare global {
    interface Window {
        // eslint-disable-next-line no-undef
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initStore = () =>
    createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
const store = initStore();

export default store;
