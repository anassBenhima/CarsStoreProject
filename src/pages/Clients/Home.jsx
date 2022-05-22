import React, { useEffect } from "react";
import ProductsListGrids from "../../components/ProductsListGrid/ProductsListGrids";
import { useHistory } from 'react-router-dom';

const Home = ({ productItems, addToCart, }) => {

  const history = useHistory();
  const currentUser = localStorage.getItem('user');
  useEffect(() => {
    if (currentUser != null) {
      var role = JSON.parse(currentUser).role;
      if(role != 'Client') {
        history.push('/login');
      }
    }
  }, []);

  return (
    <>
      <ProductsListGrids productItems={productItems} addToCart={addToCart} />
    </>
  )
}

export default Home
