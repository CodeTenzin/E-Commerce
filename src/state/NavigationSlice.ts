import { createSlice } from "@reduxjs/toolkit";

interface NavigationState {
  cart: number;
}

const initialState: NavigationState = {
  cart: 0,
};

const NavigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    increment: (state) => {
      state.cart += 1;
    },
    decrement: (state) => {
      state.cart += 1;
    },
  },
});

export const { increment, decrement } = NavigationSlice.actions;
export default NavigationSlice.reducer;
