import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { verify } from "../services/users"

export default function User() {

  let { id } = useParams
  
  const [user, setUser] = useState([])
  
  useEffect(() => {
    handleData()
  }, [])
  
  async function handleData() {
    let res = await verify(id)
    setUser(res)
    console.log(res)
  }

  function handlePosts() {
    if (user.posts) {
      return (
        user.posts.map(post => {
          return (
            <h5 className='single-post'>
              <Link to={`/post/${post._id}`}>
                {post.caption}
              </Link>
            </h5>
          )
        })
      )
    } else {
      return <h5>No Posts</h5>
    }
}
return (
  <div>
    <div>
      {/* Profile Picture */}
    </div>
      <h5>{`All posts: `}</h5>
      {handlePosts()}
    </div>
)
}