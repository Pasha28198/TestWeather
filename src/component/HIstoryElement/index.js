import React from 'react'

import './styles.scss'

export default function ({name, click}) {
    return (
        <div
            className="HistoryElement"
            onClick={click}
        >
            {name}
        </div>
    )
}