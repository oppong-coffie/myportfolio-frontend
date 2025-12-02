import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Polyfill for navigator.userAgentData
if (typeof window !== 'undefined' && window.navigator && window.navigator.userAgentData) {
  if (!window.navigator.userAgentData.brands) {
    try {
      Object.defineProperty(window.navigator.userAgentData, 'brands', {
        value: [],
        writable: true
      });
    } catch (e) {
      console.warn('Failed to polyfill navigator.userAgentData.brands', e);
    }
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
