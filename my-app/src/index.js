import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import 'antd/dist/antd.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from "react-router-dom";
// 引入 store
import store from './redux/store';
import { Provider } from 'react-redux';
import router from './router';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} >
      {/* 此处需要使用Provider包裹App, 目的是让App所有的后代容器组件都能接收到store */}
      <Provider store={store}>
        <App />
      </Provider>
    </RouterProvider>
  </React.StrictMode>
);

// 使用redux时需要通过  store.subscribe 监听变化更新 App
// store.subscribe(() => {
//   root.render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </React.StrictMode>
//   );
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
