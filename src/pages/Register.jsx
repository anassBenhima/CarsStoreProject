import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import Spinner from "../common/Spinner/Spinner";

const Register = () => {
  const history = useHistory();
  const currentUser = localStorage.getItem('user');
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    role: '',
    age: 'Client',
    adresse: '',
    telephone: '',
  });
  const [CrendentialsError, setCrendentialsError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (currentUser != null) {
      var role = JSON.parse(currentUser).role;
      if(role == 'Admin') {
        history.push('/admin/dashboard');
      }
      if(role == 'Client') {
        history.push('/');
      }
      if(role == 'Vendeur') {
        history.push('/vendeur/dashboard');
      }
    }
  }, []);

  useEffect(() => {
    console.log({ userData });
  }, [userData]);

  const { email, password, role, age, adresse, telephone, } = userData;

  const hundleSubmit = () => {
    setLoading(true);
    setCrendentialsError(false);
    console.log({ email, password });
    if(email == '' || password == '' || role == '' || age == '' || adresse == '' || telephone == '') {
      setCrendentialsError(true);
      setLoading(false);
    } else {
      const user = {
        email: 'test@gmail.com',
        password: 'test',
        role: 'Admin', // Admin - Client - Vendeur
      }
  
      localStorage.setItem('user', JSON.stringify(user))
      setTimeout(function (){
        setLoading(false);
        if(user.role == 'Admin') {
          history.push('/admin/dashboard');
        }
        if(user.role == 'Client') {
          history.push('/');
        }
        if(user.role == 'Vendeur') {
          history.push('/vendeur/dashboard');
        }
      }, 2000);
    }
  }

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', width: "100%", }}>
      <div style={{ width: '500px', borderRadius: '25px', backgroundColor: 'white', padding: '25px', boxShadow: '0px 0px 21px -6px rgb(0 0 0 / 20%)' }}>
        <h3 style={{ textAlign: 'center', }}>
          Inscription
        </h3>
        <input
          type="text"
          value={email}
          autoComplete="off"
          style={{
            border: '1px solid lightgray',
            borderRadius: '10px',
            height: '44px',
            paddingLeft: '5px',
            width: "100%",
            backgroundColor: 'transparent',
            color: 'black',
            marginTop: '5px',
          }}
          placeholder="Email"
          onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }}
        />
        <input
          type="password"
          value={password}
          autoComplete="off"
          style={{
            border: '1px solid lightgray',
            borderRadius: '10px',
            height: '44px',
            paddingLeft: '5px',
            width: "100%",
            backgroundColor: 'transparent',
            color: 'black',
            marginTop: '20px',
          }}
          placeholder="Mot de passe"
          onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }}
        />
        <input
          type="text"
          value={age}
          autoComplete="off"
          style={{
            border: '1px solid lightgray',
            borderRadius: '10px',
            height: '44px',
            paddingLeft: '5px',
            width: "100%",
            backgroundColor: 'transparent',
            color: 'black',
            marginTop: '20px',
          }}
          placeholder="Age"
          onChange={(e) => { setUserData({ ...userData, age: e.target.value }) }}
        />
        <input
          type="text"
          value={adresse}
          autoComplete="off"
          style={{
            border: '1px solid lightgray',
            borderRadius: '10px',
            height: '44px',
            paddingLeft: '5px',
            width: "100%",
            backgroundColor: 'transparent',
            color: 'black',
            marginTop: '20px',
          }}
          placeholder="Adresse"
          onChange={(e) => { setUserData({ ...userData, adresse: e.target.value }) }}
        />
        <input
          type="text"
          value={telephone}
          autoComplete="off"
          style={{
            border: '1px solid lightgray',
            borderRadius: '10px',
            height: '44px',
            paddingLeft: '5px',
            width: "100%",
            backgroundColor: 'transparent',
            color: 'black',
            marginTop: '20px',
          }}
          placeholder="Téléphone"
          onChange={(e) => { setUserData({ ...userData, telephone: e.target.value }) }}
        />
        <div onChange={(e) => { setUserData({ ...userData, role: e.target.value }) }} style={{ marginTop: "20px", padding: '10px', borderRadius: '10px', border: '1px solid lightgray', }}>
          <label style={{ cursor: 'pointer', width: '100%', margin: 0, }}>
            <input type="radio" value="Client" name="type" defaultChecked={true} /> Client
          </label>
          <label style={{ cursor: 'pointer', width: '100%', margin: 0, }}>
            <input type="radio" value="Vendeur" name="type" /> Vendeur
          </label>
        </div>
        <button
          style={{
            width: '100%',
            backgroundColor: '#e94560',
            borderRadius: '25px',
            color: 'white',
            height: '44px',
            marginTop: '20px',
            marginBottom: CrendentialsError ? '10px' : '0px',
            position: 'relative',
          }}
          disabled={loading}
          onClick={hundleSubmit}
        >
          Login
          {
            loading && (<Spinner style={{ position: 'absolute', top: 7, right: 7 }} />)
          }
        </button>
        {
          CrendentialsError && ( <p style={{ fontSize: 14, color: 'red', textAlign: 'center', }}> Informations Invalide ! </p> )
        }
        <div style={{ textAlign: 'center', marginTop: '10px', }}>
          <a
            href="/login"
            style={{
              textDecoration: 'underline',
              color: 'blue',
            }}
          >
            Si vous avez de compte clickez ici
          </a>
        </div>
      </div>
    </div>
  )
}

export default Register
