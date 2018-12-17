import React, { Component } from 'react'
import { connect } from 'react-redux'

import { stateToProps, actionToProps } from './redux'

import History from '../../component/History'
import Weater from '../../component/Weather'
import './styles.scss'

class WeatherContainer extends Component {
    render () {
        const { history, getWeather, city} = this.props
        return (
            <div className='weather'>
                <Weater
                    city={city}
                />
                <History
                    data={history}
                    chose={getWeather}
                />
            </div>
        )
    }
}

export default connect(stateToProps, actionToProps)(WeatherContainer)