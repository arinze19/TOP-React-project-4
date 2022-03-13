import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from './helpers/ScrollToTop';
import TheHeader from "./components/layout/TheHeader";
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import ProductsPage from "./pages/ProductsPage"
import CheckoutPage from "./pages/CheckoutPage"
import AuthPage from "./pages/AuthPage";


const Routes = () => {
  return (
    <div>
      <ScrollToTop />
      <TheHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/product/:productId" render={(props) => <ProductPage {...props} />} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/auth" component={AuthPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Routes;
