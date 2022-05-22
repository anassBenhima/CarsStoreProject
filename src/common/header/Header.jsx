import React, { useEffect } from "react";
import "./Header.css";
import Search from "./Search";
import Navbar from "./Navbar";
import { useHistory, useLocation } from "react-router-dom";

const Header = () => {

  const history = useHistory();
  const location = useLocation();
  const currentUser = localStorage.getItem('user');

  useEffect(() => {
    if (currentUser == null && location.pathname != '/login' && location.pathname != '/register') {
      history.push('/login');
    }
  }, []);

  return (
    <>
      <Search />
      {
        currentUser != null && (
          <Navbar />
        )
      }
    </>
  )
}

export default Header
