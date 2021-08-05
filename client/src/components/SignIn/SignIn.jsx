import { useState } from 'react'
import './SignIn.css'
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import { signIn } from '../../services/users'

export default function SignIn(props) {
  const [input, setInput] = useState({email: "", password: ""})
  const {setUser} = props
  let history = useHistory()
  
    function handleChange(e) {
        let {id, value} = e.target
        setInput((prevInput) => ({
            ...prevInput,
            [id]: value,
        }))
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      const user = await signIn(input)
      setUser(user)
      history.push("/")
    }

  return (
        <div className="wrapper">
          <div className="form">
            <div className="title">
              <h1>imgNation</h1>
              <br />
              <h3>Sign In:</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input_wrap">
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
              <button className="raise" type="submit">Sign In</button>
            </form>
            <p className="linkWrap">Don't have an account? Sign up <Link to="/sign-up" className="signUpLink">Here</Link></p>
          </div>
        </div>
    )
}