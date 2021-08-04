import { useState } from "react";
import "./newpost.css"
import {createPost} from "../services/apiConfig"
// import { createTodo } from "../../services/todos";
import { useHistory } from "react-router";

export default function NewPost(props) {
  const [input, setInput] = useState({ username: "", imgURL: "", caption: "" , user_id: ""});
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
    <div className="wrapper" user={props.user} setUser={props.setUser}>
      <div className="form">
        <h3>New Post</h3>
        <form onSubmit={handleSubmit}>
          <label>userName</label>
          <br />
          <input id="username" placeholder="username" value={input.username} onChange={handleChange} />
          <br />
          <label>imgURL</label>
          <br />
          <input id="imgURL" placeholder="imgURL" value={input.imgURL} onChange={handleChange} />
          <br />
          <label>caption</label>
          <br />
          <input id="caption" placeholder="caption" value={input.caption} onChange={handleChange} />
          <br />
          <label>ID</label>
          <br/>
          <input id="user_id" placeholder="ID" value={input.user_id} onChange={handleChange} />
          <br />
          <div className="postbuttom">
          <button>Create new Post</button>
          </div>
          
        </form>
      </div>
    </div>
  );
}
