import weather from '../../api/weather';
import { GET_WEATHER, PUSH_HISTORY } from './types.js';

export default function (name) {
    return (dispathc) => {
        weather(name).then(res => {
            dispathc({type: GET_WEATHER, payload: res})
            dispathc({type: PUSH_HISTORY, payload: name})
        })
    }
}