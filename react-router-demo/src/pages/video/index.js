import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactPage from './ReactPage'
import Flutter from './Flutter'
import Vue from './Vue'
import '../index.css';

function Video() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li>
            <Link to="/video/reactpage">React教程</Link>
          </li>
          <li>
            <Link to="/video/flutter">Vue教程</Link>
          </li>
          <li>
            <Link to="/video/vue">Flutter教程</Link>
          </li>
        </ul>
      </div>
      <div className="videoContent">
        <div>
          <h3>视频教程</h3>
        </div>
        <div>
          <Route path="/video/reactpage" component={ReactPage} />
          <Route path="/video/flutter" component={Flutter} />
          <Route path="/video/vue" component={Vue} />
        </div>
      </div>
    </div>

  )
}

export default Video;  