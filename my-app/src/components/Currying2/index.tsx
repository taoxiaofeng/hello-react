import React, { useEffect } from 'react'

// 柯里化自定义Hook
const useLogging = (logType: string) => {
  useEffect(() => {
    console.log(`${logType} mounted`);
    return () => {
      console.log(`${logType} unmounted`);
    };
  }, [logType]);
}

const BasicComponent = () => {
  useLogging('BasicComponent');
  return <div>BasicComponent</div>;
}

const AnotherComponent = () => {
  useLogging('AnotherComponent');
  return <div>AnotherComponent</div>;
}

const Currying2 = () => {
  return (
    <div>
      <BasicComponent />
      <AnotherComponent />
    </div>
  )
}

export default Currying2
