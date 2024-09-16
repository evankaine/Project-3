import { useState } from "react";
<<<<<<< HEAD
import {createPost} from "../services/posts"
=======
import "./newpost.css"
>>>>>>> dev
import { useHistory } from "react-router";
import Layout from '../components/Layout/Layout'

export default function NewPost(props) {
  const [input, setInput] = useState({ username: "", imgURL: "", caption: ""});
  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(input);
    history.push("/home");
  };
  
  return (
<<<<<<< HEAD
    <Layout user={props.user} setUser={props.setUser}>
      <div>
        New Post
=======
      <div className="form">
        <h1 className="title">Make a Post</h1>
>>>>>>> dev
        <form onSubmit={handleSubmit}>
      <div className="input_wrap">
          
          <input id="username" placeholder="username" value={input.username} onChange={handleChange} />
          
          <input id="imgURL" placeholder="imgURL" value={input.imgURL} onChange={handleChange} />
          
          <input id="caption" placeholder="caption" value={input.caption} onChange={handleChange} />
          
          {/* <input id="user_id" placeholder="ID" value={input.user_id} onChange={handleChange} /> */}
      </div>
          <div className="postbutton">
          <button className="raise">Create new Post</button>
          </div>
          
        </form>
      </div>
<<<<<<< HEAD
    </Layout>
=======
      </div>
>>>>>>> dev
  );
}
