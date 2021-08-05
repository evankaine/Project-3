import React from 'react'
import Navbar from '../components/navbar/Navbar'
import './Home.css'
import { useEffect, useState } from 'react'
import { getPosts } from '../services/apiConfig'

export default function Home() {
  const [posts, setPost] = useState([])

  useEffect(() => {
    const fetchAllPosts = async () => {
      let data = await getPosts()
      setPost(data)
    }
    fetchAllPosts()
  }, [])
 
  return (
    <Layout user={props.user} setUser={props.setUser}>
    <div className='home-page'>
      <div className='all-posts'>
      {posts.map((post) => {
        return (
          <div className='post'>
            {post}
          </div>
        )
      })}
      </div>
    </div>
    </Layout>
  )
}
