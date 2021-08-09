import React from 'react'
import { getPosts, deletePost } from '../../services/posts'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import "./Posts.css"




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
          <div className='post-container'>

            <div className="post-header">
              <h2 className="username">{post.username}</h2>
            </div>
            
            <div className="post-image">
              <img src={post.imgURL} />
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
            <hr />
            <div className="post-actions">
              <IconButton>
                <Link to={`/edit-post/${post._id}`} className="edit">
                  <EditIcon />
                </Link>
              </IconButton>

              <button className="delete" value={post._id}
                onClick={handleDelete}>Delete</button>
              
            </div>

              
            
            
          </div>
        ))}
    </div>
    )
}
