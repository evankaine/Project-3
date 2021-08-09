import React from 'react'
import { updatePost, getPosts } from '../../services/posts'
import { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import Layout from "../../components/Layout/Layout"



export default function EditPost(props) {
  const [post, setPost] = useState({ caption: "" })
  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const getInput = async () => {
      const post = await getPosts(id)
      setPost(post)
    }
    getInput()
  }, [id])

  const handleChange = (e) => {
    const { id, value } = e.target
    setPost(prevInput => ({
      ...prevInput,
      [id]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updated = await updatePost(id, post);
    setUpdated(updated)

  }

  if (isUpdated) {
    return <Redirect to={`/`} />
  }



  return (
    <Layout user={props.user} setUser={props.setUser}>
      <div>
        <form onSubmit={handleSubmit}>
          <br />
          <br />
          <label>Edit Caption:</label>
          <br />
          <br />
          <input id="caption" value={post.caption} name="caption" onChange={handleChange} />
          <br />
          <br />
          <button>submit</button>
        </form>
      </div>
    </Layout>
  )
}