import React from 'react'
import { getPosts } from '../../services/posts'
import { useState, useEffect } from 'react'



export default function Posts(props) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      let res = await getPosts()
      
      setPosts(res)
    }
    fetchPosts()
  }, [])
  
  return (
      <div className='all-posts'>
        {posts.map((post) => (
          <div className='post'>
            <h2>{post.username}</h2>
            <img src={post.imgURL} width="300" height="300" />
            <p>{post.caption}</p>
            </div>
        ))}
      </div>
  )
}
