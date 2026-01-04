import React, { useState, useRef } from 'react';
import { View, Text } from 'react-native';

const App = () => {
    const [time, setTime] = useState(0)
    let timer = useRef(null)


    const startTime = () => {
        timer.current = setInterval(() => {
            setTime((timer) => timer + 1)
        }, 1000)
    }

    const stopTime = () => {
        clearInterval(timer.current)
        // setTime(0)
    }
    return (
        <View>
            <Text> {time}</Text>
            <Botton title='Start' onPress={startTime} />
            <Botton title='Stop' onPress={stopTime} />
            <Botton />
        </View>
    )
}
export default App