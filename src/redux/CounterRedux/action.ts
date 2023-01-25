import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./types"

export const IncrementData = () => {
    return {
        type: INCREMENT_COUNTER
    }
}

export const DecrementData = () => {
    return {
        type: DECREMENT_COUNTER
    }
}