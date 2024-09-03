// import logo from './logo.svg';
import React, { useContext, useId } from "react";
import { Link, NavLink, Outlet } from 'react-router-dom';
import "./App.less";
// import TabCmp from "./components/TabCmp/index";
// import Editor from "./components/Editor/index";
// import MarkdownDemo from "./components/MarkdownDemo/index";
// import Todo from './components/Todo';
// import GitHubUser from './components/GitHubUser';
// import ReactRouterDemo from './components/ReactRouterDemo';
// import Count from "./containers/Count"; // 引入的是Count的容器组件
// import Person from "./containers/Person"; // 引入的是Person的容器组件
// 引入store
// import store from './redux/store';
// import { Divider } from "antd";
// import { XTerm } from 'xterm-for-react';
// import { useEffect, useRef } from 'react';
// import { Terminal } from "react-xterm";
// import "xterm/css/xterm.css";
// import { FitAddon } from "xterm-addon-fit";
// import { AttachAddon } from "xterm-addon-attach";
// import WebConsole from './components/WebConsole'
// import UsePow from './components/UsePow'\
// import MockMemo from './components/MockMemo/index';
// import Parent from "./components/Parent";
// import RenderProps from "./components/RenderProps/Index";
// import ErrorBoundaries from "./components/ErrorBoundaries/index";
// import Comment from "./components/Comment/index";
// import data  from "./components/Comment/mock";
// import Header from "./components/Header/index";
// import Children from "./components/Children/index";
// import Demo from "./components/Demo/index";
// import Component from './components/Component/index';
// import ParentComponent from './components/ParentComponent/index';
// import UseTransition from "./components/UseTransition/index";
// import UseLayoutEffect from "./components/UseLayoutEffect/index";
import BasicComponent from "./components/BasicComponent/index";
import withTimestamp from "./components/BasicComponent/withTimestamp";

// const EnhancedComponent = withTimestamp(BasicComponent);

// 创建一个Context
// const ThemeContext = React.createContext("light");

// 在组件中使用Context
// function ThemeConsumer() {
//   // 使用useContext来访问Context的值
//   const theme = useContext(ThemeContext);

//   return <p>当前主题：{theme}</p>;
// }

function App() {
  // const termRef = useRef();
  // useEffect(() => {
  //   // xtermRef.current.terminal.writeln("Hello, World!")
  //   const term = termRef.current.terminal;
  //   const fitAddon = new FitAddon();
  //   const attachAddon = new AttachAddon(new WebSocket("ws://localhost:8080"));
  //   term.loadAddon(fitAddon);
  //   term.loadAddon(attachAddon);
  //   term.open(termRef.current);
  //   fitAddon.fit();
  // }, []);
  // console.log(`UseTransition -- `, UseTransition);

  return (
    <div className="w-screen h-screen">
      {/* <ThemeContext.Provider value="自定义">
        <ThemeConsumer />
      </ThemeContext.Provider> */}
      {/* <Header />
      <Children /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Todo /> */}
      {/* <GitHubUser /> */}
      {/* <ReactRouterDemo /> */}
      {/* <Count />
      <Divider />
      <Person  /> */}
      {/* <Parent /> */}
      {/* <XTerm ref={xtermRef} /> */}
      {/* <Terminal ref={termRef} /> */}
      {/* <WebConsole /> */}
      {/* <UsePow /> */}
      {/* <MockMemo />     */}
      {/* <RenderProps /> */}
      {/* <ErrorBoundaries /> */}
      {/* <h2>纯水精灵怎么打？</h2>
      <hr />
      {data.filter(item => !item.parentId).map(item => <Comment key={item.id} {...item} />)} */}
      {/* <Demo /> */}
      {/* <Component /> */}
      {/* <ParentComponent /> */}
      {/* <UseTransition /> */}
      {/* <Currying /> */}
      {/* <Currying2 /> */}
      {/* <UseLayoutEffect /> */}
      {/* <Children /> */}
      {/* <TabCmp /> */}
      {/* <Editor /> */}
      {/* <MarkdownDemo /> */}
      {/* <EnhancedComponent /> */}
      <nav>
        <ul>
          <li>
            {/* <Link to="/">Home</Link> */}
            <NavLink to="/" >Home</NavLink>
          </li>
          <li>
            {/* <Link to="/about">About</Link> */}
            <NavLink to="/about" >About</NavLink>
          </li>
          <li>
            {/* <Link to="/home">Home</Link> */}
            <NavLink to="/home" >Home</NavLink>
          </li>
          <li>
            {/* <Link to="/pageA">PageA</Link> */}
            <NavLink to="/pageA" >PageA</NavLink>
          </li>
          <li>
            <NavLink to="/pageB" >PageB</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
