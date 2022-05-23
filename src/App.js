import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import UsersPage from "./Pages/UsersPage";
import UserPage from "./Pages/UserPage";
import EditUserPage from "./Pages/EditUserPage";
import CreateUserPage from "./Pages/CreateUserPage";
import "./App.css"
const HomePage = () => {
  return <div>Home Page</div>;
}
  const AboutPage = () => {
    return <div>About Page</div>;
  }

function App() {
  return (
    <Router>
    <div className="App">
        <NavLink to="/" exact activeClassName="active" >Home</NavLink> {" "}
        <NavLink to="/about" exact activeClassName="active"  >About</NavLink> {" "}
        <NavLink to="/users" exact activeClassName="active"  >User</NavLink> {" "}
        <NavLink to="users/create" exact activeClassName="active"  >Create User</NavLink>
      
        <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/users/create' exact component={CreateUserPage} /> 
        <Route path='/users' exact component={UsersPage} />
         <Route path='/users/:id' exact component={UserPage} />
        <Route path='/users/edit/:id' component={EditUserPage} />
        </Switch>
      </div>
      </Router>
  );
}

export default App;
