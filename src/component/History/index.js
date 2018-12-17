import React from 'react'

import './styles.scss'
import HistoryElement from '../HIstoryElement'

export default function ({data, chose}) {
    return (
        <div className='historyBlock'>
            <p>Історія</p>
            {
                data.map(item => (
                    <HistoryElement
                        name={item}
                        click={() => { chose(item) }}
                    />
                ))
            }
        </div>
    )
}