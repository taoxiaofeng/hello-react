import React, { useEffect, useDebugValue } from 'react';

function useCustomHook() {
  const value = 'Custom Value';

  // 使用 useDebugValue 提供自定义标签
  useDebugValue(value, () => 'Custom Debug Label');

  useEffect(() => {
    // 在这里执行自定义钩子的逻辑
    // ...
  }, []);

  return value;
}

function Component() {
  const customValue = useCustomHook();

  return <p>{customValue}</p>;
}

export default Component;
