import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from "react-toastify";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  images: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        // existingItem.quantity++;
        toast.error("This product already exists", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        toast.success("Product added to the cart", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        if (newItem.quantity === 0) {
          state.items.push({ ...newItem, quantity: 1 });
        } else {
          state.items.push({ ...newItem, quantity: newItem.quantity });
        }
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    incrementQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
export const selectCartTotal = (state: any) => state.cart.items.reduce((total: number, item: any) => total + item.price * item.quantity, 0);

