import { createSlice } from '@reduxjs/toolkit';
import { DishRow } from '../types/types';

export interface BasketState {
  items: DishRow[];
}

interface State {
  basket: BasketState;
}

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as it's not in basket!`
        );
      }

      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state: State): DishRow[] =>
  state?.basket?.items || [];

export const selectBasketItemsWithId = (state: State, id: string): DishRow[] =>
  selectBasketItems(state)?.filter((item) => item.id === id);

export const selectBasketTotalPrice = (state: State) =>
  selectBasketItems(state)?.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
