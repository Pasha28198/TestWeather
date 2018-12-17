import React from 'react'

import './styles.scss'
import cloud from '../../assets/Vector.svg'

export default function () {
    return (
        <header className="header">
            <img
                src={cloud}
                alt='cloud'
            />
            <span>Weather</span>
        </header>
    )
}