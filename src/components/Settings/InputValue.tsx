import React, {ChangeEvent, FC, useState} from 'react';
import s from './Settings.module.css';
import {Simulate} from 'react-dom/test-utils';
import error = Simulate.error;

export type InputValuePropsType = {
    title: string
    getCurrentValue: (value:number)=>void
    value: number
    error: string



}


export const InputValue: FC<InputValuePropsType> = ({getCurrentValue,title,value, error, ...restProps}) => {



    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        getCurrentValue(Number(e.target.value))

    }


    const finalClassName = `${s.inputDisplay} ${error === 'Incorrect Value!' ? s.inputError : ''}`

    return (
        <div className={s.inputWrap}>
            <span>{title}:</span>
            <input onChange={onChangeInputHandler} value={value} className={finalClassName} type={'number'}/>
        </div>
    );
};

