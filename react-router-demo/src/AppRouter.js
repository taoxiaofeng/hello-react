import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';
import Loading from './pages/loading'
// import Index from './Pages/Index';
// import Video from './Pages/Video';
// import Workplace from './Pages/Workplace'

// 路由懒加载
const Index = lazy(() => import('./pages/home'));
const Video = lazy(() => import('./pages/video'));
const Workplace = lazy(() => import('./pages/Workplace'));

function AppRouter() {
  //mock 路由数据
  const routeConfig = [{
    path: '/',
    title: '博客首页',
    exact: true,
    component: Index,
  }, {
    path: '/video',
    title: '视频教程',
    exact: false,
    component: Video,
  }, {
    path: '/workplace',
    title: '职场技能',
    exact: false,
    component: Workplace,
  }];


  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>  
            {/* <li>
              <Link to="/">博客首页</Link>
            </li>
            <li>
              <Link to="/video">视频教程</Link>
            </li>
            <li>
              <Link to="/workplace">职场技能</Link>
            </li> */}
            {
              routeConfig.map((item, index) => {
                return (<li key={index}>
                  <Link to={item.path}>{item.title}</Link>
                </li>)
              })
            }
          </ul>
        </div>
        <div className="rightMain">
          {/* <Route path="/" exact component={Index} />
          <Route path="/video" component={Video} />
          <Route path="/workplace" component={Workplace} /> */}
          {
            routeConfig.map((item, index) => {
              return (
                <Suspense fallback={<Loading />} key={index} >
                  <Route path={item.path} exact={item.exact} component={item.component} />
                </Suspense>
              )
            })
          }
        </div>
      </div>
    </Router>
  )
}

export default AppRouter;