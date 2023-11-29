import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './Form';
import Select from './Select';
import Radio from './Radio';
import Check from './Check';
import MultiCheck from './MultiCheck';
import Validate from './Validate';
import Challenge from './Challenge';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Challenge />
    <App />
    <Form />
    <Select />
    <Radio />
    <Check />
    <MultiCheck />
    <Validate />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
