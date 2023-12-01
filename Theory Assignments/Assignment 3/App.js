import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationScreen from './Screen/Register';
import LoginScreen from './Screen/Login';
import CVFormScreen from './Screen/CV';
import CVDisplayScreen from './Screen/CVShow';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CVForm" component={CVFormScreen} />
        <Stack.Screen name="CVDisplay" component={CVDisplayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
