import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import Spinner from "../common/Spinner/Spinner";

const Login = () => {
  const history = useHistory();
  const currentUser = localStorage.getItem('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
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

  const hundleSubmit = () => {
    setLoading(true);
    setEmailError(false);
    setPasswordError(false);
    setCrendentialsError(false);
    console.log({ email, password });
    if(email == '') {
      setEmailError(true);
      setLoading(false);
    }
    if(password == '') {
      setPasswordError(true);
      setLoading(false);
    } else {
      const user = {
        email: 'test@gmail.com',
        password: 'test',
        role: email, // Admin - Client - Vendeur
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
      }, 500);
    }
  }

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', width: "100%", }}>
      <div style={{ width: '500px', borderRadius: '25px', backgroundColor: 'white', padding: '25px', boxShadow: '0px 0px 21px -6px rgb(0 0 0 / 20%)' }}>
        <h3 style={{ textAlign: 'center', }}>
          Login
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
          onChange={(e) => { setEmail(e.target.value) }}
        />
        {
          emailError && ( <p style={{ fontSize: 8, color: 'red', }}> Champ Vide ! </p> )
        }
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
          onChange={(e) => { setPassword(e.target.value) }}
        />
        {
          passwordError && ( <p style={{ fontSize: 8, color: 'red', }}> Champ Vide ! </p> )
        }
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
            href="/register"
            style={{
              textDecoration: 'underline',
              color: 'blue',
            }}
          >
            Inscrivez-vous si vous n'avez pas de compte
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
