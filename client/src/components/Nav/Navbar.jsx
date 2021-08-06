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
        <div className='navbar'>
          <Link to='/' className='header'>
            <header className='header'>imgNation</header>
          </Link>
          <div>

            <Link to="/new-post">
              <AddAPhotoIcon className='navbar-link icon' />
            </Link>
            {/* <Link to="/user"> */}
              <AccountCircleIcon className='navbar-link icon' />
            {/* </Link> */}
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
