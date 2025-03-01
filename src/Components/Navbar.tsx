import React from 'react'

function Navbar() {
  return (
  <>
  <nav className="navbar navbar-expand-lg " data-bs-theme='light'>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Kingsagrominerals</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#headerSection">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about-section">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about-section">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#mission-section">Our Philosphy</a>
        </li>
        <li className="nav-item">
          <button className="btn btn-success"><a href='tel:08056008168'>Contact Us</a></button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar