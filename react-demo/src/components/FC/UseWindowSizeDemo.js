import React, { useState, useEffect } from 'react';
import { useWindowSize } from './useWindowSize';

const UseWindowSizeDemo = () => {
  const [count, setCount] = useState(0);
  const windowSize = useWindowSize();

  const increaseCount = () => {
    console.log(count);
    setCount(count + 1);
  };

  // 通过值来触发回调逻辑
  useEffect(increaseCount, [windowSize]);

  // useEffect(() => {
  //   window.addEventListener('resize', increaseCount);
  //   return () => {
  //     window.removeEventListener('resize', increaseCount);
  //   }
  // }, [increaseCount]);

  return <div onClick={increaseCount}>点击点击</div>
}

export default UseWindowSizeDemo;