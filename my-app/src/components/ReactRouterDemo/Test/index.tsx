import React from 'react'

interface Props {

}

function Test(props: Props) {
 console.log(`test -- `, props)

  return (
    <div>我是Test页面</div>
  )
}

export default Test
