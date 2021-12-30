import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from './helpers/ScrollToTop';
import TheHeader    from "./components/layout/TheHeader";
import HomePage     from "./components/pages/HomePage"
import ProductPage  from "./components/pages/ProductPage"
import ProductsPage from "./components/pages/ProductsPage"
import CheckoutPage from "./components/pages/CheckoutPage"
import AuthPage from "./components/pages/AuthPage";


const Routes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <TheHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/product/:productId" render={(props) => <ProductPage {...props} />}/>
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/auth" component={AuthPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
