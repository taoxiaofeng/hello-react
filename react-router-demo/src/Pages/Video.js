import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import ReactPage from './video/ReactPage';
import Flutter from './video/Flutter';
import Vue from './video/Vue';

function Video() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li>
            <Link to="/video/reactpage/">React教程</Link>
            <Link to="/video/flutter/">Vue教程</Link>
            <Link to="/video/vue/">Flutter教程</Link>
          </li>
        </ul>
      </div>
      <div className="videoContent">
        <div>
          <h3>视频教程</h3>
        </div>
        <Routes>
          <Route path="/video/reactpage/" element={<ReactPage />} />
          <Route path="/video/flutter/" element={<Flutter />} />
          <Route path="/video/vue/" element={<Vue />} />
        </Routes>
      </div>

    </div>
  )
}

export default Video;