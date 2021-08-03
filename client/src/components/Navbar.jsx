import React from 'react'
import { Link } from "react-router-dom"
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      {props.user ? (
        <>
          <header>imgNation</header>
          <div>{props.user?.username}</div>
          <Link to="new-post">Create a new post</Link>
          <form>
            <input className='search-bar' placeholder='Search...'></input>
          </form>
          <div>
            <AddAPhotoIcon className='add-photo-icon' />
            <AccountCircleIcon className='account-icon' />
          </div>
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
