import React from 'react'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Home() {
  return (
    <div>
      <nav>
        <header>imgNation</header>
        <form>
          <input className='search-bar' placeholder='Search...'></input>
        </form>
        <div>
          <AddAPhotoIcon className='add-photo-icon' />
          <AccountCircleIcon className='account-icon' />
        </div>
      </nav>
      {/* Posts here */}
    </div>
  )
}
