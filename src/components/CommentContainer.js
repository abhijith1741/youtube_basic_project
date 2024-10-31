import React from 'react'
import Comment from './Comment'
import { commentData } from '../utils/commentData'

const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
    <h1 className='text-2xl font-bold'>Comments:</h1>
    <Comment data={commentData[0]}/>
    </div>
  )
}

export default CommentContainer