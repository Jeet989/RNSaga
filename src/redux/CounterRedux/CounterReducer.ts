import { DECREMENT_COUNTER_REDUCER, INCREMENT_COUNTER_REDUCER } from "./types"

interface CounterDataType {
    value: number
}

const counterData: CounterDataType = {
    value: 0
}



export const CounterReducerData = (state = counterData, action: { type: string }) => {
    switch (action.type) {
        case INCREMENT_COUNTER_REDUCER:
            return { value: state.value + 1 };

        case DECREMENT_COUNTER_REDUCER:

            if (state.value === 0)
                return state;
            return { value: state.value - 1 }

        default:
            return state;
    }
}