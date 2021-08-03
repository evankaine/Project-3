import React from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
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
