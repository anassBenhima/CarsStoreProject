import React from "react";

const Search = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  const currentUser = localStorage.getItem('user');

  return (
    <>
      <section className='search' style={{ boxShadow: currentUser == null && '0px 0px 21px -6px rgb(0 0 0 / 20%)' }}>
        <div className='container c_flex'>
          <div className='logo' onClick={() => { window.location.href = '/'; }} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', }}>
            <h1>
              MaVoiture.com
            </h1>
          </div>

          {
            currentUser != null && (
              <div className='search-box f_flex'>
                <i className='fa fa-search'></i>
                <input type='text' placeholder='Chercher votre voiture...' />
              </div>
            )
          }

          {
            currentUser != null && (
              <div className='icon f_flex width' onClick={() => { localStorage.removeItem('user'); window.location.reload(); }}>
                <i className='fa fa-sign-out icon-circle' style={{ cursor: 'pointer', }}></i>
              </div>
            )
          }
        </div>
      </section>
    </>
  )
}

export default Search
