import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slice/productsSlice';
import cartReducer from './slice/cartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;