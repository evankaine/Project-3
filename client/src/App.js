import './App.css';

import SignUp from "./components/SignUp"
import SignIn from "./components/signin/SignIn"
import UsersPage from './views/UsersPage'
import Home from './views/Home'
import NewPost from './views/NewPost'
import { Route } from "react-router-dom"
import UserPage from './views/UserPage'


//all the routes and paths
function App() {
  return (
    <div className="App">

      <Route exact path="/signin">
        <SignIn />
      </Route>

      <Route exact path="/signup">
        <SignUp />
      </Route>

      <Route exact path="/home">
        <Home/>
      </Route>

      <Route exact path="/users">
        <UsersPage/>
      </Route>

      <Route exact path="user">
        <UserPage/>
      </Route>

      <Route exact path="/new-post">
        <NewPost/>
      </Route>

      <Route exact path="/user/:id">
        <UserPage/>
      </Route>
    </div>
  );
}

export default App;
