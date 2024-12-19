import React from 'react'
import PostItem from '../PostITem/PostItem'
import {posts} from '../../dummyData';
const PostList = () => {
  return (
    <div className='post-list'>
      {posts.map((item) => < PostItem post={item}   key={item._id} />)}
    </div>
  )
}

export default PostList