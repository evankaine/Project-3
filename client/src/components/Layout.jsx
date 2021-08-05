import React from 'react'
import Navbar from "./Navbar"

export default function Layout(props) {
  return (
    <div>
      <Navbar user={props.user} setUser={props.setUser} />
      <div>{props.children}</div>
    </div>
  )
}
