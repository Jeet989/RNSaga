import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { DecrementData, IncrementData } from '../redux/CounterRedux/action';
import { CounterReducerType } from '../redux/CounterRedux/types';

interface Props { }

const Counter: React.FC<Props> = (props: Props) => {
    const store = useSelector((data: CounterReducerType) => data)

    // this hook is used to dispatch a action
    const dispatch = useDispatch()

    const onPressIncrease = () => {
        // with help of dispatch we will call our action creator IncrementData(). this is the first method which will be called to store our data in redux. 
        dispatch(IncrementData())
    }

    const onPressDecrease = () => {
        // similar to above method
        dispatch(DecrementData())
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                {/* This tag is used to display text */}
                <Text style={{ color: 'black' }}>Counter Value: {store.counter.value}</Text>

                {/* This tag is used for button */}
                <TouchableOpacity onPress={onPressIncrease}>
                    <Text style={{ color: 'black' }}>Increase</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={onPressDecrease}>
                    <Text style={{ color: 'black' }}>Decrease</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Counter;