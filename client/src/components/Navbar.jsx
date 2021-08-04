import React from 'react'
import { Link } from "react-router-dom"
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Navbar.css'

export default function Navbar(props) {
  return (
    <div className='navbar'>
      {props.user ? (
        <>
          <div className='link'>
            <Link to="/home">Home</Link>
          </div>
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
        <>
          <div className='links'>
            <header className='header'>imgNation</header>
            <div className='link'>
              <Link to="/home">Home</Link>
            </div>
            <div className='link'>
              <Link to="/sign-up">Sign Up</Link>
            </div>
            <div className='link'>
              <Link to="/sign-in">Sign In</Link>
              </div>
              <div className='link'>
              <Link to="/user/:id">User</Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
