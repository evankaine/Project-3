import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { verify } from "../services/users"
import "./user.css"
import React from 'react'
import { getPosts } from '../services/posts'


export default function User() {

  let { id } = useParams

  const [user, setUser] = useState([id])

  const [post, setPost] = useState([])
  
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

useEffect(() => {
    const fetchPost = async (id) => {
      let response = await getPosts(id)
      
      setPost(response)
      console.log(response)
    }
    fetchPost()
}, [])
  
  
  function handlePosts() {
    if (post) {
      return (
          post.map((posts) => {
            return (
              < h5 className='single-post' >
                <img src={posts.imgURL} width="300" height="300"  />
                <h1>{posts.caption}</h1>
                {/* <Link to={`/post/${post}`}>
              {post.caption}
            </Link> */}
              </h5 >
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

