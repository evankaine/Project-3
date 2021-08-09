import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { verify } from "../services/users"
import "./user.css"
import React from 'react'
import { getPosts, deletePost } from '../services/posts'
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';


export default function User() {

  let { id } = useParams

  const [user, setUser] = useState([id])

  const [post, setPost] = useState([])

  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const fetchPost = async (id) => {
      let response = await getPosts(id)
      
      setPost(response)
      console.log(response)
    }
    fetchPost()
}, [])
  
  useEffect(() => {
    handleData()
  }, [])

  // const uploadImage = React.useRef(null)
  // const imageBox = React.useRef(null)

  // const handleProfilePic = (e) => {
  //   const [file] = e.target.files
  //   if (file) {
  //     const reader = new FileReader()
  //     const { current } = uploadImage
  //     current.file = file
  //     reader.onload = (e) => {
  //       current.src = e.target.result
  //     }
  //     reader.readAsDataURL(file)
  //   }
  // }
  
  async function handleData() {
    let res = await verify(id)
    setUser(res)
    console.log(res)
  }

  async function handleDelete(event) {
    await deletePost(event.target.value)
    setToggle(prevState => !prevState)
  }

  function handlePosts() {
    if (post) {
      return (
          post.map((posts) => {
            return (
              <div className='post-container' >

                <div className="post-header">
                  <h2 className="username">{posts.username}</h2>
                </div>

                <div className="post-image">
                  <img src={posts.imgURL} />
                </div>

                <div className="card-content">
                  <p className="caption"><span className="caption-name">{posts.username}</span>{posts.caption}</p>
                </div>
                <br />
                <hr />
                <div className="post-actions">
                  <IconButton>
                    <Link to={`/edit-post/${posts._id}`} className="edit">
                      <EditIcon />
                    </Link>
                  </IconButton>
                  <button className="delete" value={post._id}
                onClick={handleDelete}>Delete</button>
                </div>
              </div>
            )
          })
      )
    } else {
      return <div className="empty-container">
        <h5 className='empty-post'>No Posts</h5>
      </div>
    }
  }
  
  return (
  <div>
      <div>
        {/* <div className ='profile-container'>
        <div className="input-container">
          <input className="input" type='file' accept='image/*' onChange={handleProfilePic} ref={imageBox} />
        <div className="picture-container" onClick={() => imageBox.current.click()}>
          <img className="profile-picture" ref={uploadImage} />
          </div>
          Click to upload your profile image
        </div>
          <h1 className="username-text">{user.username}</h1>
        </div>         */}
        <h1 className="username-text">{user.username}</h1>
    </div>
      <h5>{`All post:`}</h5>
      {handlePosts()}
      </div>
)
}

