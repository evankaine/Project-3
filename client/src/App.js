import './App.css';

import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import UsersPage from './views/UsersPage'
import Home from './views/Home'
import {Route} from "react-router-dom"
//all the routes and paths
function App() {
  return (
    <div className="App">

      <Route exact path="/">
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

      <Route exact path="/new-posts">
        <NewPost/>
      </Route>
    </div>
  );
}

export default App;
