import './App.css';
import Login from "./views/Login"
import UsersPage from './views/UsersPage'
import {Route} from "react-router-dom"
//all the routes and paths
function App() {
  return (
    <div className="App">

      <Route exact path="/">
        <Login/>
      </Route>

      <Route exact path="/users">
        <UsersPage/>
      </Route>
    </div>
  );
}

export default App;
