import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import JudgeSlice from './store/judgeSlice';
import ProsecutorsSlice from './store/prosecutorSlice';
import AnsweringsSlice from './store/answeringSlice';

const myStore=configureStore({
  reducer:{
    JudgeSlice,
    ProsecutorsSlice,
    AnsweringsSlice

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
