import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartDetailsData {
    id: number,
    name: string,
    url: string | null,
    weight: number | null,
    icon: string | null,
    count: number,
}

interface CartState {
    loading: boolean,
    cartList: CartDetailsData[],
    error: string | null | undefined
}

const initialState : CartState = {
    loading: false,
    cartList: [],
    error: null
}

const cartSlice = createSlice ({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartDetailsData[]>) => {
            state.cartList = action.payload;            
        },
        incrementCount: (state, action: PayloadAction<CartDetailsData>) => {
            state.cartList.forEach((cart) => {
                if (cart.id === action.payload.id) {
                    cart.count++;
                    return;
                }
            })
        },
        decrementCount: (state, action: PayloadAction<CartDetailsData>) => {
            state.cartList.forEach((cart) => {
                if (cart.id === action.payload.id) {
                    cart.count--;
                    return;
                }
            })
        },
        removeItem: (state, action: PayloadAction<CartDetailsData>) => {
            state.cartList = state.cartList.filter((item) => item.id !== action.payload.id);
        },
    },
    });

export const { addToCart, incrementCount, decrementCount, removeItem } = cartSlice.actions;
export default cartSlice.reducer;