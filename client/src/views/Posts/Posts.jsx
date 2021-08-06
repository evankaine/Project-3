import React from 'react'
import { getPosts, deletePost } from '../../services/posts'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"



export default function Posts(props) {
  const [posts, setPosts] = useState([])
  const [toggle, setToggle] = useState(false)


  useEffect(() => {
    const fetchPosts = async () => {
      let res = await getPosts()
      
      setPosts(res)
    }
    fetchPosts()
  }, [])

  async function handleDelete(event) {
    await deletePost(event.target.value)
    setToggle(prevState => !prevState)
  }
  
  
  
  return (
    
      <div className='all-posts'>
        {posts.map((post) => (
          <div className='post'>
            <h2>{post.username}</h2>
            <img src={post.imgURL} width="300" height="300" />
            <p>{post.caption}</p>
          <Link to="/edit-post">
            <button>
                Edit
            </button>
          </Link>  
            <button value={post._id}
              onClick={handleDelete}>Delete</button>
          </div>
        ))}
      </div>
    )
}
