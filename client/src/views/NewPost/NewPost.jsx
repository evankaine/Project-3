import { useState } from "react";
import {createPost} from "../../services/posts"
import { useHistory } from "react-router";
import Layout from "../../components/Layout/Layout"
import "./NewPost.css"

export default function NewPost(props) {
  const [input, setInput] = useState({ username: `${props.user.username}`, imgURL: "", caption: ""});
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
      <div className="wrapper-post">
        <div className="form-post">
          <form onSubmit={handleSubmit}>
            <div className="input-post">
              <input placeholder="Image URL"
                id="imgURL"
                value={input.imgURL}
                onChange={handleChange} />
              <input className="post-caption" type="textarea"
                placeholder="Write a Caption..."
                id="caption"
                value={input.caption}
                onChange={handleChange} />
            </div>
            <button className="raise">Create new Post</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
