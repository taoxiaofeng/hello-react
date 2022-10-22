import { Button } from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './index.module.less';

/**
 * withRouter => 为一般组件加上路由组件特有的属性
 * withRouter => 返回值是一个新组件
 */

const Header = (props) => {

  console.log(`Header -- `, props)

  const back = () => {
    props.history.goBack();
  }


  const forward = () => {
    props.history.goForward();
  }

  const go = () => {
    // 正数 1 前进   负数 -1 后退  
    props.history.go(-1);
  }


  return (
    <div className={styles.wrap}>
      <div>
        <Button type="default" onClick={back} style={{ width: 100 }}>前进</Button>
        <Button type="default" onClick={forward} style={{ width: 100 }}>后退</Button>
        <Button type="default" onClick={go} style={{ width: 100 }}>GO</Button>
      </div>
      <div>React 路由测试</div>
      <div> </div>
    </div>
  )
}

export default withRouter(Header);
