import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>  // 检查 App 及 App子组件中的代码是否合理
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
