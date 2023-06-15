import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction'
import { createSlice } from '@reduxjs/toolkit'

interface ICounterStateProps {
  value: number
}

const initialState: ICounterStateProps = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    incrementAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decrement: (state) => {
      state.value -= 1

      if (state.value < 0) {
        state.value = 0
      }
    },
    decrementAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload

      if (state.value < 0) {
        state.value = 0
      }
    },
  },
})

export const { increment, incrementAmount, decrement, decrementAmount } =
  counterSlice.actions
export const counterReducer = counterSlice.reducer
