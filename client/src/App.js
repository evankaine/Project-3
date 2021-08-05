import './App.css';
import SignUp from "./components/SignUp/SignUp"
import SignIn from "./components/SignIn/SignIn"
import UsersPage from './views/UsersPage'
import Home from './views/Home/Home'
import NewPost from './views/NewPost'
import { Route } from "react-router-dom"
import UserPage from './views/UserPage'
import { useState, useEffect } from 'react'
import { verify } from './services/users'

//all the routes and paths
function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const verifyUser = async () => {
      setUser(await verify())
    }
    verifyUser()
  }, [])

  return (
    <div className="App">

      <Route exact path="/">
        <Home user={user} setUser={setUser} />
      </Route>
      {user && (
        <>
          <Route exact path="/users">
            <UsersPage user={user} setUser={setUser} />
          </Route>

          <Route exact path="/posts">
            <NewPost user={user} setUser={setUser} />
          </Route>

          <Route exact path="/user/:id">
            <UserPage user={user} setUser={setUser} />
          </Route>
        </>
      )}
      {!user && (
        <>
          <Route exact path="/sign-in">
            <SignIn user={user} setUser={setUser} />
          </Route>

          <Route exact path="/signup">
            <SignUp user={user} setUser={setUser} />
          </Route>
        </>
      )}
    </div>
  );
}

export default App;
