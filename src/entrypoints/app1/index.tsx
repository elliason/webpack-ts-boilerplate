import React from 'react';
import { render } from 'react-dom';
import reactRootElements from '~enums/reactRootElements';
import store from '~store/index';
import CounterContainer from '~components/Counter';
import { Provider } from 'react-redux';
import '~styles/style.scss';

document.addEventListener('DOMContentLoaded', () => {
    const appElement: HTMLElement | null = document.getElementById(
        reactRootElements.app1,
    );

    if (appElement) {
        render(
            <Provider store={store}>
                <CounterContainer />
            </Provider>,
            appElement,
        );
    }
});
