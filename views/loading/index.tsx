import { View, Text, useColorScheme } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { useState } from 'react';
// REDUX IMPORTS WOULD GO HERE
import { useSelector, useDispatch } from 'react-redux';
import { selectItemLoading, setLoading as setStateLoading } from '../../redux/item';

const Loading = () => {
    // loading page will directly follow the redux setup for item
    const loading = useSelector(selectItemLoading);

    // init dispatch
    const dispatch = useDispatch();

    const handleLoading = async () => {
        // Logic for loading here

        // global style in redux setup.

        // fetch 
        // set loading to false
        setTimeout(() => {
            dispatch(setStateLoading(false));
        }, 2000)
    }
    
    if(loading) handleLoading();

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