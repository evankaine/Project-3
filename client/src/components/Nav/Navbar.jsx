import React from 'react'
import { Link } from "react-router-dom"
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Navbar.css'
import { signOut } from "../../services/users";

export default function Navbar(props) {


  const handleSignOut = () => {
    signOut();
    props.setUser(null);
  };


  return (
    <div className='accountNav'>
      {props.user ? (
        <>
          <div className='accountNav-links'>
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
        <div className='siteNav'>
          
          <div className='siteLink'>
              <Link to="/sign-in" className='siteLogo'>
                imgNation
                <br />
                <p className="siteLink-tag">Enter Site</p>
              </Link>
          
          </div>
        </div>
      )}
    </div>
  )
}
