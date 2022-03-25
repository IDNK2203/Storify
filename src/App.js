import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Cart from "./pages/Cart";
import Signin from "./pages/Signin";
import Register from "./pages/Signup";
import "./App.css";
import Success from "./pages/Success";

function App() {
  const user = false;

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <Home></Home>
          </Route>
          <Route path={"/cart"}>
            <Cart></Cart>
          </Route>
          <Route path={"/product/:id"}>
            <Product></Product>
          </Route>
          <Route path={"/products/:category"}>
            <ProductList></ProductList>
          </Route>
          <Route path={"/login"}>
            {user ? <Redirect to={"/"} /> : <Signin />}
          </Route>
          <Route path={"/register"}>
            {user ? <Redirect to={"/"} /> : <Register />}
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
