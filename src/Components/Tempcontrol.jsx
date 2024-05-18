import React, { useState } from 'react'
import './Tempcontrol.css'

const Tempcontrol = () => {

    const [temp, setTemp] = useState(0)
    const [color, updateColor] = useState('cold')

    const increment = () => {
        setTemp(temp + 1)

        temp >= 20?updateColor('hot'):updateColor('cold')
    }

    const decrement = () => {
        setTemp(temp-1)

        temp < 20?updateColor('cold'):updateColor('hot')
    }
  return (
    <div className='main'>
        <h2>I am Temp Control app</h2>
        <h2 className={`temp-display ${color}`}>
            {temp} &#176; C <br/>
            {
                temp >= 20? <span>&#128560;</span>:<span>&#128512;</span>
            }
        </h2>
        <div>
            {
                temp>=20?<p>Its Too Hot</p>:<p>Its Normal Temp</p>
            }
        </div>
        <div>
            <button className='btn' onClick={increment}>+</button>
            <button className='btn' onClick={decrement}>-</button>

        </div>
    </div>
  )
}

export default Tempcontrol