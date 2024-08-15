import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    count: number
}
const initialState: CounterState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addOne(state) {
            state.count++;
        },
        substractOne(state) {
            state.count--;
        },
        resetCount(state, action: PayloadAction<number>) {
           if(action.payload<0) state.count=0;
           state.count=action.payload;
        }
    }
});

export const { addOne, substractOne, resetCount} = counterSlice.actions;

export default counterSlice.reducer;