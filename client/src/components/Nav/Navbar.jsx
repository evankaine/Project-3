import React from 'react'
import { Link } from "react-router-dom"
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Navbar.css'
import { signOut } from "../../services/users";

export default function Navbar(props) {

<<<<<<< HEAD:client/src/components/Navbar.jsx
=======

  const handleSignOut = () => {
    signOut();
    props.setUser(null);
  };


>>>>>>> 3e3eae09ba00b1eceb2dc503ce09ded1227de354:client/src/components/Nav/Navbar.jsx
  return (
    <div className='navbar'>
      {props.user ? (
        <>
          <div className='link'>
            <Link to="/">Home</Link>
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
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <div className='nav'>
          <header className='title'>imgNation</header>
          <div className='links'>
          <div className='link'>
            <Link to="/">Home</Link>
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
        </div>
      )}
    </div>
  )
}
