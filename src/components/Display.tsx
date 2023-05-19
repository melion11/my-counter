import React from 'react';
import s from './Counter.module.css';


export type DisplayType = {
    counter:number
}

const Display = (props: DisplayType) => {
    return (

            <div className={`${s.counterItem} ${props.counter === 5 ? s.counterRed : ''}`}>{props.counter}</div>

    );
};

export default Display;