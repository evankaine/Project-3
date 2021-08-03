import React from 'react'
import Navbar from '../components/Navbar'
import './Home.css'

export default function Home() {
  return (
    <div className='home-page'>
      <Navbar />
      <div className='all-posts'>
      {/* {posts.map((post) => {
        <div className='post'>
          {post}
        </div>
      })} */}
      </div>
    </div>
  )
}
