import React from 'react'
import './Home.css'
import Layout from '../../components/Layout/Layout'
import Posts from "../Posts/Posts"

export default function Home(props) {


  return (
    <>
    <Layout user={props.user} setUser={props.setUser}> 
    </Layout>
    <Posts />
    </>
  )
}
