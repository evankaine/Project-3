import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {getUser} from "../services/apiConfig"

export default function userPage() {

  let { id } = useParams
  
  const [data, setData] = useState([])
  
  useEffect(() => {
    handleData()
  }, [])
  
  async function handleData() {
    let res = await getUser(id)
    setData(res)
    console.log(res)
  }
  function handlePosts() {
    if(user.posts) {
        return (
            user.posts.map(post => {
                return (
                  <h5><Link to={`/post/${post._id}`}>
                    {post.caption}
                  </Link></h5>
                )
            })  
        ) 
    } else {
        return <h5>No Posts</h5>
    }
}
return (
    <div>
        <h3>{user.username}</h3>
        <h5>{`All posts: `}</h5>
        {handlePosts()}
    </div>
)
}