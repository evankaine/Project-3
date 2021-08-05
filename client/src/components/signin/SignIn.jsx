import { useState } from 'react'
import './signin.css'
<<<<<<< HEAD:client/src/components/signin/SignIn.jsx
import {getUser} from "../../services/apiConfig"
=======
>>>>>>> d01ac63323b3d9fd67111d42a0ae95c9fbb715e7:client/src/components/SignIn.jsx
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import { signIn } from '../services/users'

<<<<<<< HEAD:client/src/components/signin/SignIn.jsx

export default function SignIn() {
    let history = useHistory()
    let defaultInput = {
      username: "",
      email: "",
      password: "",
    }
    const [input, setInput] = useState(defaultInput)

    function handleChange(event) {
        let {name, value} = event.target
        setInput(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    async function handleSubmit(event) {
        event.preventDefault()
        await getUser(input)
        history.push(`/home`)
    }

    return (
      <div className="wrapper">
        <div className="form">
          <div className="title">
            <h1>imgNation</h1>
            <br />
            <h3>Sign In:</h3>
          </div>
            <form onChange={handleChange} onSubmit={handleSubmit}>
          <div className="input_wrap">
              <input type="text" name="username" placeholder="Username" value={input.username} />
              <input type="email" name="email" placeholder="Email" value={input.email} />
            <input type="password" name="password" placeholder="Password" value={input.password} />
          </div>
            <button className="raise" type="submit">Sign In</button>
            </form>
            <p className="linkWrap">Don't have an account? Sign up <Link to="/signup" className="signUpLink">Here</Link></p>
        </div>
      </div>
=======
export default function SignUp(props) {
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
            <p className="linkWrap">Don't have an account? Sign up <Link to="/signup" className="signUpLink">Here</Link></p>
          </div>
        </div>
>>>>>>> d01ac63323b3d9fd67111d42a0ae95c9fbb715e7:client/src/components/SignIn.jsx
    )
}