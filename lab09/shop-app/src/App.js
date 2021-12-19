import logo from './logo.svg';
import './App.css';

//In react-router-dom v6, "Switch" is replaced by routes "Routes".
import {
  BrowserRouter as Router,
  Route, Switch,
  Link
} from "react-router-dom";

import UserList from './ui/users/UserList';
import UserDetails from './ui/users/UserDetails';

import ProductList from "./ui/products/ProductList";
import ProductDetails from "./ui/products/ProductDetails";
import EditProduct from './ui/products/EditProduct';

import Dashboard from './ui/core/Dashboard'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>


        <Switch>
        <Route exact path="/users" component={UserList}/>
        <Route exact path="/users/:idUser" component={UserDetails}/>

        <Route exact path="/products" component={ProductList}/>
        <Route exact path="/products/:id" component={ProductDetails}/>
        <Route exact path="/products/:id/edit" component={EditProduct}/>

        <Route exact path="/" component={Dashboard}/>
        </Switch>

      </div>
    </Router>
   
  );
}
//and in Route change component={...} to element={...}

export default App;
