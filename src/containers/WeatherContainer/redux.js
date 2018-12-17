import weather from '../../store/actions/weather'

export const stateToProps = (state) => {
    return ({
    city: state.city.map(res => ({
        key: res.name,
        value: res.name,
        text: res.name
    })),
    history: state.history
})}
export const actionToProps = (dispatch) => ({
    getWeather: (name) => {dispatch(weather(name))}
})