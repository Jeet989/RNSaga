export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export const INCREMENT_COUNTER_REDUCER = 'INCREMENT_COUNTER_REDUCER'
export const DECREMENT_COUNTER_REDUCER = 'DECREMENT_COUNTER_REDUCER'

export interface CounterReducerType {
    counter: {
        value: number
    }
}