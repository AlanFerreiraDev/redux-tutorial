import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction'
import { createSlice } from '@reduxjs/toolkit'

type TCounterProps = {
  value: number
}
interface ICounterStateProps {
  counter: TCounterProps
}

const initialState: ICounterStateProps = {
  counter: {
    value: 0,
  },
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter.value += 1
    },
    incrementAmount: (state, action: PayloadAction<number>) => {
      state.counter.value += action.payload
    },
  },
})

export const { increment, incrementAmount } = counterSlice.actions
export default counterSlice.reducer
