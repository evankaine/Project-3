import React from 'react'
import './Home.css'
import { useState, useEffect } from 'react'
import { getPosts } from '../../services/posts'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'
export default function Home(props) {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      let data = await getPosts()
      setPosts(data)
    }
    fetchPosts()
  }, [])

  return (
    <Layout user={props.user} setUser={props.setUser}>
      <div className='home-page'>
      <div className="link-post">
        <Link to="posts">Create a post</Link>
      </div>
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
