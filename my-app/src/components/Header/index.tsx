import { Button } from 'antd';
import React from 'react';
import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {

  const navigate = useNavigate();
  console.log(`Header -- `, props)

  const back = () => {
    // props.history.goBack();
    navigate(-1);
  }

  const forward = () => { 
    // props.history.goForward();
    navigate(1);
  }

  const go = () => {
    // 正数 1 前进   负数 -1 后退  
    // props.history.go(-1);
    navigate(2);
  }


  return (
    <div className={styles.wrap}>
      <div>
        <Button type="primary" onClick={back} style={{ width: 100 }}>前进</Button>
        <Button type="default" onClick={forward} style={{ width: 100 }}>后退</Button>
        <Button type="default" onClick={go} style={{ width: 100 }}>GO</Button>
      </div>
      <div>React 路由测试</div>
      <div> </div>
    </div>
  )
}

export default Header;

// export default withRouter(Header);
