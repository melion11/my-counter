import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import s from '../src/components/Counter.module.css'
import {Settings} from './components/Settings/Settings';


function App() {

    const startMinValue = Number(localStorage.getItem('minCounterValue')) || 0
    const startMaxValue = Number(localStorage.getItem('maxCounterValue')) || 5

    const [minValue, setMinValue] = useState(startMinValue)
    const [maxValue, setMaxValue] = useState(startMaxValue)

    const [counter, setCounter] = useState<number>(() => {
        return Number(localStorage.getItem('counterValue')) || 0
    })

    const [settingsChanged, setSettingsChanged] = useState(false)
    const [error, setError] = useState(`Enter values and press "set"`)

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
    }, [counter])


    const addCount = () => setCounter(counter + 1)
    const resetCount = () => {
        if (minValue < 0) {
            setCounter(0)
        } else {
            setCounter(minValue)
        }

    }

    const getMaxValue = (max: number) => {
        if (minValue < 0 || max <= 0 || max <= minValue) {
            setError('Incorrect Value!')
        } else {
            setError(`Enter values and press "set"`)
        }
        setMaxValue(max)
        setSettingsChanged(true)

    }
    const getMinValue = (min: number) => {
        if (min < 0 || maxValue <= min) {
            setError('Incorrect Value!')
        } else {
            setError(`Enter values and press "set"`)
        }
        setMinValue(min)
        setSettingsChanged(true)
    }


    return (
        <div className="App">

            <div className="counterWrapper">
                <Counter minValue={minValue} maxValue={maxValue}
                         addCount={addCount} resetCount={resetCount}
                         counter={counter} settingsChanged={settingsChanged}
                         error={error}/>
                <Settings getMinValue={getMinValue} getMaxValue={getMaxValue}
                          minValue={minValue} maxValue={maxValue}
                          counter={counter} settingsChanged={settingsChanged}
                          setCounter={setCounter} setSettingsChanged={setSettingsChanged}
                          error={error}
                />
            </div>
        </div>
    );
}

export default App;
