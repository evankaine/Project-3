import { useState } from "react";
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
  );
}
