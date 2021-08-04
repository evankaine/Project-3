import './App.css';
import Login from "./views/Login"
import UsersPage from './views/UsersPage'
import Home from './views/Home'
import NewPost from './views/NewPost'
import {Route} from "react-router-dom"
//all the routes and paths
function App() {
  return (
    <div className="App">

      <Route exact path="/">
        <Login/>
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
