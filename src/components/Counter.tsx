import React, {FC, useState} from 'react';
import '../App.css';
import {Button} from './Button';
import s from './Counter.module.css'
import {Display} from './Display';

export type CounterPropsType = {
    addCount: () => void
    resetCount: () => void
    counter: number
    minValue: number,
    maxValue: number
    settingsChanged: boolean
    error: string

}

export const Counter: FC<CounterPropsType> = (props) => {
    const {counter, addCount, resetCount, minValue, maxValue,settingsChanged, error, ...restProps} = props


    const finalClassName = `${s.spanChange} ${error === 'Incorrect Value!' ? s.spanError : '' }`
    const spanError = error === `Enter values and press "set"` ? `Enter values and press "set"` : 'Incorrect Value!'
    const disabledAddButton = counter >= maxValue || settingsChanged
    const disabledResetButton = counter <= minValue || settingsChanged

    return (
        <div className="wrapper">

            {settingsChanged ? <span className={finalClassName}>{spanError}</span>
                : <Display maxValue={maxValue} counter={counter}/>}

            <div className={s.buttonsWrap}>
                <Button className={s.button} disabled={disabledAddButton} name={'inc'}
                        callBack={addCount}/>
                <Button className={s.button} disabled={disabledResetButton} name={'reset'}
                        callBack={resetCount}/>
            </div>

        </div>
    );
};

