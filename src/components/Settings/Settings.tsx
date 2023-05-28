import React, {ChangeEvent, FC, useState} from 'react';
import {Button} from '../../../../../It-incubator/my-upper-counter/src/components/Button';
import '../../../../../It-incubator/my-upper-counter/src/App.css';
import s from './Settings.module.css'
import {InputValue} from './InputValue';

export type SettingsPropsType = {
    counter: number
    minValue: number
    maxValue: number
    getMaxValue: (value: number) => void
    getMinValue: (value: number) => void
    settingsChanged: boolean
    setCounter: (value: number)=>void
    setSettingsChanged: (status: boolean)=>void
    error: string


}

export const Settings: FC<SettingsPropsType> = (props) => {
        const {counter, minValue, maxValue, getMaxValue, getMinValue,settingsChanged,setCounter,
            setSettingsChanged, error, ...restProps} = props

        const settingsChangeStatusHandler = () =>{
            localStorage.setItem('minCounterValue', JSON.stringify(minValue))
            localStorage.setItem('maxCounterValue', JSON.stringify(maxValue))
            setCounter(minValue)
           setSettingsChanged(false)
        }

        const minError = minValue < 0 || maxValue <= 0 || maxValue <= minValue ? 'Incorrect Value!' : ''
        const maxError = minValue < 0 || maxValue <= minValue ? 'Incorrect Value!' : ''
        const disabledButton = minValue < 0 || maxValue <= minValue

        return (
            <div className="wrapper">
                    <div className={s.counterItem}>
                        <InputValue error={minError} getCurrentValue={getMaxValue} title={'maxValue'} value={maxValue} />
                        <InputValue error={maxError} getCurrentValue={getMinValue} title={'startValue'} value={minValue} />
                    </div>


                <div className={s.buttonWrap}>
                    <Button disabled={disabledButton}  className={s.button} name={'set'}
                            callBack={settingsChangeStatusHandler}/>
                </div>

            </div>
        );
    }
;



