// import logo from './logo.svg';
import './App.less';
// import Todo from './components/Todo';
// import GitHubUser from './components/GitHubUser';
// import ReactRouterDemo from './components/ReactRouterDemo';
import Count from './containers/Count';
import Person from './containers/Person';
// 引入store
// import store from './redux/store';
import { Divider } from 'antd';

function App() {
  return (
    <div className="App">
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
      <Count />
      <Divider />
      <Person  />
    </div>
  );
}

export default App;
