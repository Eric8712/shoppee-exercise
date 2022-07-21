import React from "react";
import HomePage from './Pages/HomePage';
import ProductPage from "./Pages/ProductPage";
import ProductCollectionPage from './Pages/ProductCollectionPage';
import CartPage from './Pages/CartPages'
import CheckoutPage from './Pages/CheckOutPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Redirect,
} from "react-router-dom";
const App = () => {
  return (
   <BrowserRouter>
   <Switch>
   <Route path='/' exact>
    {/* 返回首頁 */}
      <Redirect to='/mall'/>
    </Route>
    <Route path='/mall' exact>
      <HomePage />
    </Route>
    <Route path='/cart' exact>
      <CartPage />
    </Route>
    <Route path='/checkout' exact>
      <CheckoutPage />
    </Route>
    <Route path='/mall/:categoryName'>
      <ProductCollectionPage />
    </Route>
    <Route path='/:productName'>
      <ProductPage />
    </Route>
   </Switch>
   </BrowserRouter>
  );
}

export default App;
