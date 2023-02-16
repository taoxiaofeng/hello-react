import React, { useState, useCallback } from 'react';
import { Button } from 'antd';
import TestButton from './TestButton';

const MockMemo: React.FC<any> = () => {
  const [count,setCount] = useState(0)
  const [show,setShow] = useState(true)

  const  add = useCallback(()=>{
    setCount(count + 1)
  },[count])
  // const  add = ()=>{
  //   setCount(count + 1)
  // }

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'flex-start'}}>
        <TestButton title="普通点击" onClick={() => setCount(count + 1) }/>
        <TestButton title="useCallback点击" onClick={add}/>
      </div>
      <div style={{marginTop: 20}}>count: {count}</div>
      <Button onClick={() => {setShow(!show)}}> 切换</Button>
    </div>
  )
}



export default MockMemo;