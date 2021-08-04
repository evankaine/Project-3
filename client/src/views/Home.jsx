import React from 'react'
import Navbar from '../components/Navbar'
import './Home.css'
import { useState, useEffect } from 'react'
import {getPosts} from '../services/apiConfig'

export default function Home() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      let data = await getPosts()
      setPosts(data)
    }
    fetchPosts()
  })
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
