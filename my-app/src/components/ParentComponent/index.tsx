import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// 子组件
const ChildComponent = forwardRef((props, ref) => {
  const childRef = useRef(null);

  // 使用 useImperativeHandle 暴露给父组件的实例值和方法
  useImperativeHandle(ref, () => ({
    childMethod: () => {
      console.log('Child method called');
    },
    childValue: childRef.current,
  }));

  return <div ref={childRef}>Child Component</div>;
});

// 父组件
function ParentComponent() {
  const childRef = useRef(null);

  const handleClick = () => {
    childRef.current.childMethod();
    console.log('Child value:', childRef.current.childValue);
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleClick}>Call Child Method</button>
    </div>
  );
}

export default ParentComponent;
