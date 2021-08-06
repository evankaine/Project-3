import { useState } from "react";
import {createPost} from "../../services/posts"
import { useHistory } from "react-router";
import Layout from "../../components/Layout/Layout"

export default function NewPost(props) {
  const [input, setInput] = useState({ username: `${props.user}`, imgURL: "", caption: ""});
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
    
    console.log(await createPost(input))
    history.push("/");
  };
  
  return (
    <Layout user={props.user} setUser={props.setUser}>
      <div>
        <form onSubmit={handleSubmit}>
        {/* <input placeholder="username" id="username" value={input.username} onChange={handleChange} /> */}
          <br />
          <input placeholder="Image URL" id="imgURL" value={input.imgURL} onChange={handleChange} />
          <br />
          <input placeholder="Write a Caption..." id="caption" value={input.caption} onChange={handleChange} />
          <br />
          <button>Create new Post</button>
        </form>
      </div>
    </Layout>
  );
}
