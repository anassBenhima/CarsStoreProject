import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import Data from '../../../components/Data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spinner from "../../../common/Spinner/Spinner";

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}

const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}

const ViewProduits = () => {

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  var data = Data.productItems.filter(item => { return item.id == id })[0];

  console.log(data);

  const commander = () => {
    setLoading(true);
    console.log('Commander le produit: ', id);
    history.push('/client/commandes');
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
      <div style={{ minHeight: '80vh', padding: '40px', }}>
        <div className="container">
          <div className="row" style={{ marginTop: 20, justifyContent: 'end', }}>
            <button
              style={{ backgroundColor: "#e94560", color: 'white', fontWeight: 'bold', width: 200, height: '50px', borderRadius: '25px', outline: 'none', border: '2px solid lightgray', position: 'relative', }}
              onClick={() => { history.push(`/vendeur/produit/form/${data.id}`); }}
            >
              Modifier
            </button>
          </div>
          <div className="row">
            <div className="col-md-5">
              <Slider {...settings}>
                <img src={`../../.${data.cover}`} />
                <img src={`../../.${data.cover}`} />
                <img src={`../../.${data.cover}`} />
                <img src={`../../.${data.cover}`} />
              </Slider>
            </div>
            <div className="col-md-7" style={{ display: 'flex', alignItems: 'center', }}>
              <div>
                <h2 style={{ color: "#e94560", }}>
                  {data.name}
                </h2>
                <p style={{ color: 'gray', }}>
                  {data.description}
                </p>
                <div className="container">
                  <div className="row" style={{ marginBottom: '10px', alignItems: 'center', }}>
                    <label className="col-md-5 col-5" style={{ margin: '0', textAlign: 'left', }}>
                      Marque:
                    </label>
                    <h5 className="col-md-6 col-6" style={{ marginBottom: '0', }}>
                      {data.price.toFixed(2)}Dhs
                    </h5>
                  </div>
                  <div className="row" style={{ marginBottom: '10px', alignItems: 'center', }}>
                    <label className="col-md-5 col-5" style={{ margin: '0', textAlign: 'left', }}>
                      Model:
                    </label>
                    <h5 className="col-md-6 col-6" style={{ marginBottom: '0', }}>
                      {data.price.toFixed(2)}Dhs
                    </h5>
                  </div>
                  <div className="row" style={{ marginBottom: '10px', alignItems: 'center', }}>
                    <label className="col-md-5 col-5" style={{ margin: '0', textAlign: 'left', }}>
                      Année:
                    </label>
                    <h5 className="col-md-6 col-6" style={{ marginBottom: '0', }}>
                      {data.price.toFixed(2)}Dhs
                    </h5>
                  </div>
                  <div className="row" style={{ marginBottom: '10px', alignItems: 'center', }}>
                    <label className="col-md-5 col-5" style={{ margin: '0', textAlign: 'left', }}>
                      Moteur:
                    </label>
                    <h5 className="col-md-6 col-6" style={{ marginBottom: '0', }}>
                      {data.price.toFixed(2)}Dhs
                    </h5>
                  </div>
                  <div className="row" style={{ marginBottom: '10px', alignItems: 'center', }}>
                    <label className="col-md-5 col-5" style={{ margin: '0', textAlign: 'left', }}>
                      Accidenté:
                    </label>
                    <h5 className="col-md-6 col-6" style={{ marginBottom: '0', }}>
                      Oui/Non
                    </h5>
                  </div>
                  <div className="row" style={{ marginBottom: '10px', alignItems: 'center', }}>
                    <label className="col-md-5 col-5" style={{ margin: '0', textAlign: 'left', }}>
                      Couleur Exterieur:
                    </label>
                    <h5 className="col-md-6 col-6" style={{ marginBottom: '0', }}>
                      Oui/Non
                    </h5>
                  </div>
                  <div className="row" style={{ marginBottom: '10px', alignItems: 'center', }}>
                    <label className="col-md-5 col-5" style={{ margin: '0', textAlign: 'left', }}>
                      Couleur Interieur:
                    </label>
                    <h5 className="col-md-6 col-6" style={{ marginBottom: '0', }}>
                      Oui/Non
                    </h5>
                  </div>
                  <div className="row" style={{ marginBottom: '10px', alignItems: 'center', }}>
                    <label className="col-md-5 col-5" style={{ margin: '0', textAlign: 'left', }}>
                      Prix:
                    </label>
                    <h5 className="col-md-6 col-6" style={{ marginBottom: '0', }}>
                      {data.price.toFixed(2)}Dhs
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ViewProduits
