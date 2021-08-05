import {useState} from 'react'
import {signUp} from "../../services/users"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import "./SignUp.css"

export default function SignUp(props) {
    let history = useHistory()
    const [input, setInput] = useState({username: "", email: "", password: ""})

    const handleChange = (e) => {
        let {id, value} = e.target
        setInput((prevInput) => ({
            ...prevInput,
            [id]: value,
        }))
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      const user = await signUp(input)
      props.setUser(user)
      history.push("/")
    }

  return (
        <div className="wrapper">
          <div className="form">
            <div className="title">
              <h1>imgNation</h1>
              <br />
              <h3>Sign Up:</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input_wrap">
              
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={input.username}
                  onChange={handleChange}
                />
          
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={input.email}
                  onChange={handleChange}
                />
          
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={input.password}
                  onChange={handleChange}
                />
              
              </div>
              <button className="raise" type="submit">Sign Up</button>
            </form>
            <p className="linkWrap">
              <Link to="/sign-in" className="signInLink">Back to Sign In</Link>
            </p>
          </div>
        </div>
    )
}