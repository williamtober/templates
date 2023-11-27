import { View, Text, useColorScheme } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { useState } from 'react';
// REDUX IMPORTS WOULD GO HERE

const Loading = () => {
    const [loading, setLoading] = useState<Boolean>(true);
    const [attempt, setAttempt] = useState<Boolean>(true);

    const handleLoading = async () => {
        // Logic for loading here

        // global style in redux setup.

        // fetch 

        // set loading to false
        setTimeout(() => {
            setLoading(false);
            setAttempt(false);
        }, 2000)
    }

    if(attempt) handleLoading();

    return loading ? (
        <View>
            <Text>Loading</Text>
        </View>
    ) : (
        <View className="w-screen h-screen bg-red-500">
            <Text className="text-xl animate-spin">Loaded</Text>
        </View>
    )

}

export default Loading;