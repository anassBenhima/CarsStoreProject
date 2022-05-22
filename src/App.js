import React, { useEffect, useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom"
import Header from "./common/header/Header"
import Home from "./pages/Clients/Home"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ListCommandesClient from "./pages/Clients/ListCommandes"
import ProductDetailsClients from "./pages/Clients/ProductDetails"
import Dashboard from "./pages/Admin/Dashboard"
import ListClients from "./pages/Admin/Clients/List"
import ListVendeurs from "./pages/Admin/Vendeurs/List"
import HistoryCmd from "./pages/Admin/Commandes/History"
import ListProduits from "./pages/Vendeurs/Produits/list"
import HistoryCommande from "./pages/Vendeurs/Home"
import ViewProduits from "./pages/Vendeurs/Produits/View"
import FormPage from "./pages/Vendeurs/Produits/Form"


function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;

  return (
    <>
      <Router>
        <Header />
        <Switch>
          {/* Clients */}
          <Route path='/' exact>
            <Home productItems={productItems} shopItems={shopItems} />
          </Route>
          <Route path='/client/commandes' exact>
            <ListCommandesClient />
          </Route>
          <Route path='/client/productDetails/:id' exact>
            <ProductDetailsClients />
          </Route>
          {/* Admin */}
          <Route path='/admin/dashboard' exact>
            <Dashboard />
          </Route>
          <Route path='/admin/clients' exact>
            <ListClients />
          </Route>
          <Route path='/admin/vendeurs' exact>
            <ListVendeurs />
          </Route>
          <Route path='/admin/commandes' exact>
            <HistoryCmd />
          </Route>
          {/* Vendeurs */}
          <Route path='/vendeur/dashboard' exact>
            <HistoryCommande />
          </Route>
          <Route path='/vendeur/produits' exact>
            <ListProduits />
          </Route>
          <Route path='/vendeur/produit/view/:id' exact>
            <ViewProduits />
          </Route>
          <Route path='/vendeur/produit/form/:id' exact>
            <FormPage />
          </Route>
          <Route path='/vendeur/produit/form' exact>
            <FormPage />
          </Route>
          {/* Login/Register */}
          <Route path='/login' exact>
            <Login />
          </Route>
          <Route path='/register' exact>
            <Register />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
