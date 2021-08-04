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
    <div className='home-page'>
      <Navbar />
      <div className='all-posts'>
      {posts.map((post) => {
        <div className='post'>
          {post}
        </div>
      })}
      </div>
    </div>
  )
}
