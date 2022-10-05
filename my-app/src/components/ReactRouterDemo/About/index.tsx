import React from 'react'

interface Props {}

function About(props: Props) {
 console.log(`props -- `, props)

  return (
    <div>我是About页面</div>
  )
}

export default About
