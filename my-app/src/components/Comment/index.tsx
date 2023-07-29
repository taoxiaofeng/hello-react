import React from 'react'
import data from './mock'

const Comment = ({ id, content = '', parentId = null}) => {
  return (
    <div className='shadow pl-2 m-4'>
        {content}
        {data.filter(item => item.parentId === id).map(item => <Comment key={item.id} {...item} />)}
    </div>
  )
}

export default Comment;
