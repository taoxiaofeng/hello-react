/**
 * https://zh-hans.reactjs.org/tutorial/tutorial.html#setup-for-the-tutorial
 */
import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './components/FC/MyComponent.js';
import Game from './components/Game/Game';
import Count from './components/Count/Count';
import './index.css';
import UseRefDemo from './components/UseRef/useRef';
import App from './components/App/App';
import UseWindowSizeDemo from './components/FC/UseWindowSizeDemo';
import MyEditor from './components/DraftDemo2/MyEditor';
import BraftEditor from './components/BraftEditor/BraftEditor';
// ========================================

// import  MyComponent  from './components/FC/MyComponent';

console.log(<Game />)
ReactDOM.render(
    // <Game />,
    // <MyComponent />,
    // <UseRefDemo />,
    // <App />,
    // <UseWindowSizeDemo />,
    // <MyEditor />,
    <BraftEditor />,
    document.getElementById('root')
); 