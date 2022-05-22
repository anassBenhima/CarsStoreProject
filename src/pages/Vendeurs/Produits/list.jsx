import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Data from '../../../components/Data';

const ListProduits = () => {

  const history = useHistory();

  return (
    <div style={{ minHeight: '80vh', padding: '40px', }}>
      <div className="row" style={{ justifyContent: 'center', marginBottom: 20, }}>
        <button
          style={{ backgroundColor: "#e94560", color: 'white', fontWeight: 'bold', height: '40px', width: '200px', borderRadius: '50px', outline: 'none', border: '2px solid lightgray', position: 'relative', }}
          onClick={() => { history.push('/vendeur/produit/form'); }}
        >
          Ajouter
        </button>
      </div>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', }}>
        <div className="row" style={{ justifyContent: 'space-between' }}>
          {
            Data.productItems.map((item, key) => {
              return (
                <div className="col-md-6" key={key}>
                  <div className="row" style={{ alignItems: "center", border: "1px solid lightgray", borderRadius: '25px', marginBottom: 10, width: "99.99%", padding: 5, }}>
                    <div className="col-md-2">
                      <img src={`../.${item.cover}`} style={{ width: '100%', }} />
                    </div>
                    <div className="col-md-7">
                      <h5 style={{ margin: 0, }}>
                        {item.name}
                      </h5>
                      <p style={{ margin: 0, fontSize: 9, }}>
                        {item.description}
                      </p>
                    </div>
                    <div className="col-md-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          background: '#f3f5f9',
                          borderRadius: '100%',
                          display: 'flex',
                          padding: 5,
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: 5,
                        }}
                        onClick={() => { history.push(`/vendeur/produit/form/${item.id}`); }}
                      >
                        <i className='fa fa-edit' style={{ cursor: 'pointer', }}></i>
                      </div>
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          background: '#f3f5f9',
                          borderRadius: '100%',
                          display: 'flex',
                          padding: 5,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        onClick={() => { history.push(`/vendeur/produit/view/${item.id}`); }}
                      >
                        <i className='fa fa-eye' style={{ cursor: 'pointer', }}></i>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ListProduits
