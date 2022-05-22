import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Data from '../../components/Data';

const ListCommandesClient = () => {

  const history = useHistory();

  return (
    <div style={{ minHeight: '80vh', padding: '40px', }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', }}>
        <div style={{ width: '60%', }}>
          {
            Data.productItems.map((item, key) => {
              return (
                <div className="row" key={key} onClick={() => { history.push(`/client/productDetails/${item.id}`) }} style={{ alignItems: "center", border: "1px solid lightgray", borderRadius: '25px', marginBottom: 10, cursor: 'pointer', }}>
                  <div className="col-md-3">
                    <img src={`../.${item.cover}`} style={{ width: '100%', }} />
                  </div>
                  <div className="clo-md-1"></div>
                  <div className="col-md-8">
                    <h3 style={{ margin: 0, }}>
                      {item.name}
                    </h3>
                    <p style={{ margin: 0, }}>
                      {`Réservé le: 14-05-2022`}
                    </p>
                    <p style={{ margin: 0, }}>
                      {`Status: Confirmé`}
                    </p>
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

export default ListCommandesClient
