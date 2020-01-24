import React from 'react';
import { render } from 'react-dom';
import reactRootElements from '~enums/reactRootElements';
import App1 from '../../containers/App1';
import { Provider } from 'react-redux';
import '~styles/style.scss';

document.addEventListener('DOMContentLoaded', () => {
    const appElement: HTMLElement | null = document.getElementById(
        reactRootElements.app1,
    );

    if (appElement) {
        render(
            <Provider store={}>
                <App1 />
            </Provider>,
            appElement,
        );
    }
});
