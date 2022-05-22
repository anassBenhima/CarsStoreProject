import React from "react"
import ProductsListGrid from "./ProductsListGrid"
import "./style.css"

const ProductsListGrids = ({ productItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Voitures Disponible:</h1>
          </div>
          <ProductsListGrid productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default ProductsListGrids
