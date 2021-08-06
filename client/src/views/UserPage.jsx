import React from 'react'
import User from '../components/User'
import Layout from "../components/Layout/Layout"


export default function UserPage(props) {
  return (
    <Layout user={props.user} setUser={props.setUser}>
    <div>
      <User/>
      </div>
    </Layout>
  )
}
