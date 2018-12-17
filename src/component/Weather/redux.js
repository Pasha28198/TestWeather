import weather from '../../store/actions/weather'

export const stateToProps = (state) => ({
    weather: state.weather
})
export const actionToProps = (dispatch) => ({
    getWeather: (name) => {dispatch(weather(name))}
})