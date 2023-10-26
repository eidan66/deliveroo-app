import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RestaurantDetails } from './types';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Restaurant: RestaurantDetails;
  Basket: undefined;
  PreparingOrder: undefined;
  Delivery: undefined;
};

export type RestaurantNavigationType = NativeStackScreenProps<
  RootStackParamList,
  'Restaurant'
>['navigation'];

export type BasketNavigationType = NativeStackScreenProps<
  RootStackParamList,
  'Basket'
>['navigation'];

export type PreparingOrderNavigationType = NativeStackScreenProps<
  RootStackParamList,
  'PreparingOrder'
>['navigation'];

export type DeliveryNavigationType = NativeStackScreenProps<
  RootStackParamList,
  'Delivery'
>['navigation'];

export type RestaurantRouteProps = RouteProp<RootStackParamList, 'Restaurant'>;
