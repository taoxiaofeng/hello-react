import { Button } from 'antd'
import React from 'react'

const Demo = () => {

  const handleClick = async () => {
    Promise.resolve('data').then(res => {
      setTimeout(() => {
        // console.log(a)
        throw Error('error')
      }, 1000)
    }).catch(err => {
      console.log(`err -- `, err)
    })
  }

  return (
    <div style={{
      width:100,
      height:100,
      backgroundColor:'red'
    }}>
      <Button type="primary" onClick={() => handleClick()}>点击获取数据</Button>
    </div>
  )
}

export default Demo
