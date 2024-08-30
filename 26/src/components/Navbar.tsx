import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="menu navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img
            src="https://cdn.shopify.com/s/files/1/1824/4681/t/3/assets/h2_logo.png?0"
            alt="Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav ml-auto">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Catalog</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Chair</a>
            </li>
            <li>
              <a href="/">Lamp</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
