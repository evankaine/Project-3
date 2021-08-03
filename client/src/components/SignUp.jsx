import {useState} from 'react'
import {createUser} from "../services/apiConfig"
import { useHistory } from "react-router-dom"


export default function SignUp() {
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
        await createUser(input)
        history.push("/users")
    }

    return (
        <div className="form-container">
          <h3>Sign Up</h3>

          <form onChange={handleChange} onSubmit={handleSubmit}>

                <input type="text" name="username" placeholder="Username" value={input.username} />
          <br />
          <br />
                
                <input type="email" name="email" placeholder="Email" value={input.email} />
          <br />
          <br />
                
                <input type="password" name="password" placeholder="Password" value={input.password} />
          <br />
          <br />

                <button type="submit">Sign Up</button>
            </form>
        
        </div>
    )
}