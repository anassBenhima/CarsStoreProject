import React from "react";
import { useHistory } from "react-router-dom";


const ProductsListGrid = ({ productItems }) => {
  const history = useHistory();

  return (
    <div className="row">
      {productItems.map((productItems, key) => {
        return (
          <div className="col-md-3 col-6" key={key} style={{ cursor: 'pointer', }} onClick={() => { history.push(`/client/productDetails/${productItems.id}`) }}>
            <div className='box'>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>-{productItems.discount}%</span>
                  <img src={productItems.cover} alt='' style={{ width: '100%', }} />
                </div>
                <div className='product-details'>
                  <h3>{productItems.name}</h3>
                  <p style={{ fontSize: 10, }}> {productItems.description.substring(0, 45)}... </p>
                  <div className='price'>
                    <h4>{productItems.price.toFixed(2)} MAD </h4>
                    <button>
                      <i className='fa fa-info-circle'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProductsListGrid
