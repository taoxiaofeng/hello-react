import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Index from './Pages';
import './index.css';
import Video from './Pages/Video'

function AppRouter() {
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            <li>
              <Link to="/">博客首页</Link>
            </li>
            <li>
              <Link to="/video">视频教程</Link>
            </li>
            <li>
              <Link to="">职场技能</Link>
            </li>
          </ul>
        </div>
        <Routes className="rightMain">
          <Route path="/" exact element={<Index />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </div>
    </Router>
  )
}

export default AppRouter;