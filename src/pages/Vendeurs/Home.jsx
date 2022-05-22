import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Data from '../../components/Data';
import './Home.css';
import Select from 'react-select';

const HistoryCommande = () => {

  const options = [
    { value: 'Nouvelle', label: 'Nouvelle' },
    { value: 'Annulee', label: 'Annulée' },
    { value: 'EnDiscussion', label: 'En Discussion' },
    { value: 'Accepte', label: 'Accepté' },
  ];


  return (
    <div style={{ minHeight: '80vh', padding: '40px', }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', }}>
        <div className="row" style={{ justifyContent: 'space-between' }}>
          {
            Data.productItems.map((item, key) => {
              return (
                <div className="col-md-6" key={key}>
                  <div className="row" style={{ alignItems: "center", border: "1px solid lightgray", borderRadius: '25px', marginBottom: 10, width: "99.99%", padding: 5, }}>
                    <div className="col-md-3">
                      <img src={`../.${item.cover}`} style={{ width: '100%', }} />
                    </div>
                    <div className="clo-md-1"></div>
                    <div className="col-md-8">
                      <h5 style={{ margin: 0, }}>
                        {item.name}
                      </h5>
                      <p style={{ margin: 0, fontSize: 12, }}>
                        {`Réservé par Nom Prénom`}
                      </p>
                      <p style={{ margin: 0, fontSize: 12, }}>
                        {`Informations personnelle: `}
                      </p>
                      <p style={{ margin: 0, fontSize: 12, color: '#e94560', }}>
                        {`+212 633 33 33 33 - nom.prenom@gmail.com`}
                      </p>
                      <p style={{ margin: 0, fontSize: 12, }}>
                        {`Le: 14-05-2022`}
                      </p>
                      <div style={{ margin: 0, fontSize: 12, display: 'flex', alignItems: 'center', marginTop: 15, }}>
                        <p style={{ fontSize: 15, marginBottom: 0, marginRight: 10, width: '30%', }}>
                          {`Status`}
                        </p>
                        <div
                          style={{
                            width: '70%',
                          }}
                        >
                          <Select
                            defaultValue={{ label: "Nouvelle", value: "Nouvelle" }}
                            onChange={(e) => { console.log(e); }}
                            options={options}
                          />
                        </div>
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

export default HistoryCommande
