import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      {props.user ? (
        <>
          <div>{props.user?.username}</div>
          <Link to="new-post">Create a new post</Link>
          
        </>
      ) : (
        <div>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/sign-in">Sign In</Link>
        </div>
      )}
    </div>
  )
}
