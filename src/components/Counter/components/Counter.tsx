import React from 'react';
import ICounterProps from '../types/counterInterfaces';
import Paragraph from '~atoms/Paragraph';

const Counter: React.FC<ICounterProps> = ({ increment, decrement, count }) => {
    return (
        <div className="counter">
            <Paragraph attributes={{ className: 'text' }}>{count}</Paragraph>

            <button
                type="button"
                onClick={(): void => {
                    increment();
                }}
            >
                Increment
            </button>

            <button
                type="button"
                onClick={(): void => {
                    decrement();
                }}
            >
                Decrement
            </button>
        </div>
    );
};

export default Counter;
