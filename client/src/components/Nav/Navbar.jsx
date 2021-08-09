import React from 'react'
import { Link } from "react-router-dom"
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import './Navbar.css'
import { signOut } from "../../services/users";
import { useHistory } from "react-router-dom"

export default function Navbar(props) {
let history = useHistory()

  const handleSignOut = () => {
    signOut();
    props.setUser(null);
    history.push("/")
  };


  return (
    <div className='accountNav'>
      {props.user ? (
      <>
        <div className='navbar'>
          <Link to='/' className='header'>
            <header className='header'>imgNation</header>
          </Link>
          <div className="icons">
            <Link to="/new-post">
              <AddAPhotoIcon fontSize="large" className='navbar-link icon'>
                <p>New Post</p>
              </AddAPhotoIcon>
              </Link>
            <Link to="/profile"> 
              <AccountBoxIcon fontSize="large" className='navbar-link icon' />
            </Link> 
          </div>
          </div>
          <div className='nav-account'>
            <div className='nav-logged-in'>Logged in as: <span className='nav-username'>{props.user?.username}</span></div>
            <button onClick={handleSignOut} className='sign-out'>Sign Out</button>

          </div>
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
