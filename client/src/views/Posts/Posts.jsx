import React from 'react'
import { getPosts } from '../../services/posts'
import { useState, useEffect } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import "./Posts.css"


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
        {posts.map((post, index) => (
          <div className='post-container' key={index}>
            <div className="post-header" >
              <h2 className="username">{post.username}</h2>
            </div>
            
            <div className="post-image">
              <img src={post.imgURL} alt="user post" />
            </div>
            
            <div className="heart">
              <IconButton>
                <FavoriteIcon fontSize="large" />
              </IconButton>
            </div>

            <div className="card-content">
              <p className="caption"><span className="caption-name">{post.username}</span>{post.caption}</p>
            </div>
            <br />
          </div>
        ))}
    </div>
    )
}
