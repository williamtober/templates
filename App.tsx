import { NavigationContainer } from '@react-navigation/native';
import { NativeWindStyleSheet } from 'nativewind';
// REDUX
import { Provider } from 'react-redux';
// defined router
import Router from './router';
import store from './redux/';

// set the output to native for nativewind
NativeWindStyleSheet.setOutput({
  default: 'native'
});

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* ROUTER HERE */}
        <Router />
      </NavigationContainer>
    </Provider>
    
  );
}

