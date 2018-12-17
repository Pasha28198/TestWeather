import { combineReducers } from 'redux'
import city from './country'
import weather from './weather'
import history from './history'

export default combineReducers({
    city,
    weather,
    history
})