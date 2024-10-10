// import React from 'react'
import './body.css'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-3 fixed-top shadow-lg" style={{backgroundColor:'#20A39E'}}>
  <div className="container-fluid">
    <a className="navbar-brand text-light" style={{marginLeft:'50px'}} href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav d-flex gap-5">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Pricing</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
    </div>
      <button className="nav-btn btn text-light contact-btn" style={{backgroundColor:'#FF6F61'}}>
        <div className="text-btn">Contact Us</div>
      </button>
  </div>
</nav>
    </>
  )
}

export default Navbar