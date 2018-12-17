import { GET_WEATHER } from '../actions/types'

export default function (state = {}, { type, payload }) {
    switch (type) {
        case GET_WEATHER: {
            return payload
        }
        default: {
            return state
        }
    }
}