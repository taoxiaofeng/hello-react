import { Button } from "antd"
import React from "react"

const TestButton = React.memo((props:any)=>{
  console.log(props.title)
  return <Button color='primary' onClick={props.onClick} style={props.title === 'useCallback点击' ? {
  marginLeft: 20
  } : undefined}>{props.title}</Button>
})

export default TestButton;