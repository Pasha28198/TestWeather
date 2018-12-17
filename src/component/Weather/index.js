import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'

import WeatherCard from '../WeatherCard'
import { stateToProps, actionToProps } from './redux'
import './styles.scss'

class Weather extends Component {
    changeCity = (e, data) => {
        this.props.getWeather(data.value)
    }
    componentDidMount () {
        this.props.getWeather('Kiev') 
    }
    render () {
        if (!Object.keys(this.props.weather).length) {
            return (
                <div></div>
            )
        }
        return (
            <div className='weatherBlock'>
                    <Dropdown
                        placeholder='Select Country'
                        fluid search selection
                        options={this.props.city}
                        onChange={this.changeCity}
                    />
                    <WeatherCard
                        weather={this.props.weather}
                    />
            </div>
        )
    }
}

export default connect(stateToProps, actionToProps)(Weather)