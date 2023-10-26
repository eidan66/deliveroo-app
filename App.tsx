import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as StoreProvider } from 'react-redux';

import { HomeScreen } from './src/screens/HomeScreen/HomeScreen';
import { RestaurantScreen } from './src/screens/RestaurantScreen/RestaurantScreen';
import { RootStackParamList } from './src/types/navigation';
import { store } from './store';
import { BasketScreen } from './src/screens/BasketScreen/BasketScreen';
import { PreparingOrderScreen } from './src/screens/PreparingOrderScreen/PreparingOrderScreen';
import { DeliveryScreen } from './src/screens/DeliveryScreen/DeliveryScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StoreProvider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{
              presentation: 'modal',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PreparingOrder"
            component={PreparingOrderScreen}
            options={{
              presentation: 'fullScreenModal',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Delivery"
            component={DeliveryScreen}
            options={{
              presentation: 'fullScreenModal',
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </StoreProvider>
    </NavigationContainer>
  );
}
