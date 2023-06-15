import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store.ts'
// import { store } from '../redux-old-school'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/*  OLD SCHOOL REDUX */}
    {/* <Provider store={store}> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
