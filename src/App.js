import React from "react"
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login"
import Product from "./pages/Product"
import Customer from "./pages/Customer"
import Transaction from "./pages/Transaction"
import Home from "./pages/Home"
import Admin from "./pages/Admin"

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/customer" component={Customer} />
        <Route exact path="/transaction" component={Transaction} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    )
  }
}