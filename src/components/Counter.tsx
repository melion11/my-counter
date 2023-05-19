import React, {FC, useState} from 'react';
import {Button} from './Button';
import s from './Counter.module.css'
import Display from './Display';

export type CounterPropsType = {}

export const Counter: FC<CounterPropsType> = (props) => {
    const {...restProps} = props

    const value = {
        minValue: 0,
        maxValue: 5
    }


    const [counter, setCounter] = useState(value.minValue)

    const addCount = () => {
        let newCounter = counter + 1
        if (newCounter <= value.maxValue) {
            setCounter(newCounter)
        }
    }

    const resetCount = () => {
        setCounter(value.minValue)
    }


    return (
        <div >
            <Display counter={counter}/>
            <div className={s.counterWrapper}>
                <div className={s.buttonsWrap}>
                    <Button className={s.button} disabled={counter === value.maxValue ? true : false} name={'inc'}
                            callBack={addCount}/>
                    <Button className={s.button} disabled={counter <= value.minValue ? true : false} name={'reset'}
                            callBack={resetCount}/>
                </div>
            </div>
        </div>
    );
}
    ;

