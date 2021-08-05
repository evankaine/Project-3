import React from 'react'
<<<<<<< HEAD:client/src/views/Home/Home.jsx
import './Home.css'
import { useState, useEffect } from 'react'
import { getPosts } from '../../services/posts'
import Layout from '../../components/Layout/Layout'

export default function Home(props) {

  const [posts, setPosts] = useState([])
=======
import Navbar from '../components/navbar/Navbar'
import './Home.css'
import { useEffect, useState } from 'react'
import { getPosts } from '../services/apiConfig'

export default function Home() {
  const [posts, setPost] = useState([])
>>>>>>> dev:client/src/views/Home.jsx

  useEffect(() => {
    const fetchAllPosts = async () => {
      let data = await getPosts()
      setPost(data)
    }
<<<<<<< HEAD:client/src/views/Home/Home.jsx
    fetchPosts()
  }, [])

=======
    fetchAllPosts()
  }, [])
 
>>>>>>> dev:client/src/views/Home.jsx
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
