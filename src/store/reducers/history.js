import { PUSH_HISTORY } from '../actions/types'

export default function (state = [], { type, payload }) {
    switch (type) {
        case PUSH_HISTORY: {
            return [...state, payload]
        }
        default: {
            return state
        }
    }
}