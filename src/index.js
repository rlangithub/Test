import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import JudgeSlice from './store/judgeSlice';

const myStore=configureStore({
  reducer:{
    JudgeSlice

  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
     <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
