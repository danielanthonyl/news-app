import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {views} from './views';

const Stack = createNativeStackNavigator();
export const PublicNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {views.map(({component, name}) => (
        <Stack.Screen key={name} {...{name}} component={component} />
      ))}
    </Stack.Navigator>
  );
};
