import { useState } from "react";
import {createPost} from "../services/posts"
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
    <Layout user={props.user} setUser={props.setUser}>
      <div>
        New Post
        <form onSubmit={handleSubmit}>
          <label>userName</label>
          <br />
          <input id="username" value={input.username} onChange={handleChange} />
          <br />
          <label>imgURL</label>
          <br />
          <input id="imgURL" value={input.imgURL} onChange={handleChange} />
          <br />
          <label>caption</label>
          <br />
          <input id="caption" value={input.caption} onChange={handleChange} />
          <br />
          <button>Create new Post</button>
        </form>
      </div>
    </Layout>
  );
}
