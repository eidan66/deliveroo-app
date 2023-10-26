import { createSlice } from '@reduxjs/toolkit';
import { RestaurantDetails } from '../types/types';

export interface RestaurantState {
  restaurant: RestaurantDetails;
}

interface State {
  restaurant: RestaurantState;
}

const initialState: RestaurantState = {
  restaurant: {
    id: '',
    imgUrl: '',
    title: '',
    rating: 0,
    genre: '',
    address: '',
    short_description: '',
    lat: 0,
    long: 0,
    dishes: [],
  },
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state: State): RestaurantDetails =>
  state?.restaurant?.restaurant;

export default restaurantSlice.reducer;
