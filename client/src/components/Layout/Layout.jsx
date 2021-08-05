import React from 'react'
import Navbar from "../Nav/Navbar"

export default function Layout(props) {
  return (
    <div>
      <Navbar user={props.user} setUser={props.setUser} />
      <div>{props.children}</div>
    </div>
  )
}
