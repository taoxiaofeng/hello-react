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
// import BasicComponent from "./components/BasicComponent/index";
// import withTimestamp from "./components/BasicComponent/withTimestamp";
// import ClassCmp from "./components/ClassCmp";
// import { IDirectVoucher } from "./components/CardList";
// const BasicComponent = React.lazy(() => import("./components/BasicComponent/index"));
// const CardList = React.lazy(() => import("./components/CardList/index"));

// const cardDataList: IDirectVoucher[] = [
//   {
//     brandName: '弄堂里',
//     brandLogo:
//       'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*anNdQqA_I_AAAAAAAAAAAAAAARQnAQ',
//     distanceDesc: '500m',
//     campImage:
//       'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*U29sSqgeU-4AAAAAAAAAAAAAARQnAQ',
//     promoLogo: [
//       'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*y6CTRo9L2oEAAAAAAAAAAAAAARQnAQ',
//       'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*Q1d4SIoeKRkAAAAAAAAAAAAAARQnAQ',
//     ],
//     voucherDesc: '弄堂里14元超值优惠券包x2',
//     benefitAmount: '1',
//     oriPriceAmount: '28',
//     discountDesc: '0.6折',
//     voucherStockNum: '库存888份',
//   },
//   {
//     brandName: '弄堂里',
//     brandLogo:
//       'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*anNdQqA_I_AAAAAAAAAAAAAAARQnAQ',
//     distanceDesc: '500m',
//     campImage:
//       'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*U29sSqgeU-4AAAAAAAAAAAAAARQnAQ',
//     promoLogo: [
//       'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*Q1d4SIoeKRkAAAAAAAAAAAAAARQnAQ',
//     ],
//     voucherDesc: '弄堂里14元超值优惠券包x2',
//     benefitAmount: '1',
//     discountDesc: '0.6折',
//   },
//   {
//     brandName: '飞猪',
//     brandLogo:
//       'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*dCL5Q4oBaQsAAAAAAAAAAAAAARQnAQ',
//     campImage:
//       'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*MZ7VSaNZXRYAAAAAAAAAAAAAARQnAQ',
//     promoLogo:
//       'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*90WEQLmnKdkAAAAAAAAAAAAAARQnAQ',
//     voucherDesc: '南方航空20元优惠券',
//     benefitAmount: '20',
//   },
// ];

import Demo from "./components/Demo";
import RotateCards from "./components/RotateCards";

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
    <div className="w-screen h-screen flex flex-col">
      <Demo />
      {/* <BasicComponent /> */}
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
      {/* <CardList list={cardDataList} /> */}
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
      <RotateCards />
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
      {/* <ClassCmp /> */}
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
