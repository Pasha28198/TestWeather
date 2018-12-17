import React from 'react'

import './styles.scss'
import iconCold from '../../assets/snowflake.svg'
import iconSunny from '../../assets/sunny.svg'

export default function ({weather}) {
    return (
        <div className="weatherCard">
            <p>
                <span>{weather.name}</span>
                <span>{parseInt(weather.main.temp - 272)}</span>
            </p>
            <img
                src={parseInt(weather.main.temp - 272) > 0 ? iconSunny : iconCold}
                alt="icon"
            />
        </div>
    )
}