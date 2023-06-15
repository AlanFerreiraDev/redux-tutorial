/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import {
  decrement,
  decrementAmount,
  increment,
  incrementAmount,
} from './features/counter/counter-slice'
import { useAppSelector } from './hooks'
import { Loading } from './components'

// OLD SCHOOL REDUX
// function App({ count, increment, incrementAmount}) {
function App() {
  // OLD SCHOOL REDUX
  // const count = useSelector((state) => state.counter.value)
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function handleOnClick() {
    // OLD SCHOOL REDUX
    // increment()
    // dispatch({ type: 'counter/increment' })
    dispatch(increment())
  }

  function handleOnClickAmount() {
    // OLD SCHOOL REDUX
    // incrementAmount(5)
    // dispatch({ type: 'counter/incrementAmount', payload: 5 })
    dispatch(incrementAmount(5))
  }

  function handleClickDecrement() {
    dispatch(decrement())
  }

  function handleClickDecrementAmount() {
    dispatch(decrementAmount(5))
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1 className="card-item-1">{count}</h1>
        <div className="card-item-2">
          <button className="card-button" onClick={handleOnClick}>
            Increment to one in one
          </button>
          <button className="card-button" onClick={handleOnClickAmount}>
            Increment Amount
          </button>
        </div>
        <div className="card-item-3">
          <button className="card-button" onClick={handleClickDecrement}>
            Decrement to one in one
          </button>
          <button className="card-button" onClick={handleClickDecrementAmount}>
            Decrement Amount
          </button>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

// OLD SCHOOL REDUX

// const mapStateToProps = (state: { counter: { value: any } }) => {
//   return {
//     count: state.counter.value,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'counter/increment' }),
//     incrementAmount: (amount) =>
//       dispatch({ type: 'counter/incrementAmount', payload: amount }),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
