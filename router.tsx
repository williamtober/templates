// core imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// view imports
import Loading from './views/loading';
// init a stack navigator
const Stack = createNativeStackNavigator();

// create the router
const Router = () => {
    return (
        <Stack.Navigator screenOptions={
            {
                headerShown: true,
                contentStyle: {
                    backgroundColor: 'white',
                },
                animation: 'slide_from_right',
                headerTitle: "Compendium of Sorts"
                // headerRight would be for the right side of the head icon
                // headerLeft would be for the left side of the head icon
            }
            // initialRouteName is Loading, because we want to run some checks before we load the app... usually?
        } initialRouteName={'Loading'}>
            {/* ROUTES HERE */}
            <Stack.Screen 
                name="Loading"
                component={Loading}
            />
        </Stack.Navigator>
    )
}

export default Router;