import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  const currentUser = localStorage.getItem('user');
  const role = JSON.parse(currentUser).role;
  return (
    <>
      <header className='header'>
        <div className='container d_flex justify-content-center'>
          <div className='navlink'>
              {/* Clients */}
              {
                role == 'Client' && (
                  <ul className="link f_flex capitalize">
                    <li>
                      <Link to='/'>Acceuil</Link>
                    </li>
                    <li>
                      <Link to='/client/commandes'>Mes Réservations</Link>
                    </li>
                  </ul>
                )
              }
              {/* Admin */}
              {
                role == 'Admin' && (
                  <ul className="link f_flex capitalize">
                    <li>
                      <Link to='/admin/dashboard'>Dashboard</Link>
                    </li>
                    <li>
                      <Link to='/admin/clients'>Clients</Link>
                    </li>
                    <li>
                      <Link to='/admin/vendeurs'>Vendeurs</Link>
                    </li>
                    <li>
                      <Link to='/admin/commandes'>Historique de Réservations</Link>
                    </li>
                  </ul>
                )
              }
              {/* Vendeurs */}
              {
                role == 'Vendeur' && (
                  <ul className="link f_flex capitalize">
                    <li>
                      <Link to='/vendeur/dashboard'>Historique de Réservations</Link>
                    </li>
                    <li>
                      <Link to='/vendeur/produits'>Mes Voitures</Link>
                    </li>
                  </ul>
                )
              }
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
