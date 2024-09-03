'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header: React.FC = () => {
  const pathname = usePathname();
  return (
    <header className="fixed-top header nav-bg">
      {/* <!-- top header --> */}
      <div className="top-header py-2 bg-white">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-4 text-center text-lg-left">
              <Link className="text-color mr-3" href="callto:+443003030266">
                <strong>CALL</strong> +44 300 303 0266
              </Link>
              <ul className="list-inline d-inline">
                <li className="list-inline-item mx-0">
                  <Link className="d-inline-block p-2 text-color" href="#">
                    <i className="ti-facebook"></i>
                  </Link>
                </li>
                <li className="list-inline-item mx-0">
                  <Link className="d-inline-block p-2 text-color" href="#">
                    <i className="ti-twitter-alt"></i>
                  </Link>
                </li>
                <li className="list-inline-item mx-0">
                  <Link className="d-inline-block p-2 text-color" href="#">
                    <i className="ti-linkedin"></i>
                  </Link>
                </li>
                <li className="list-inline-item mx-0">
                  <Link className="d-inline-block p-2 text-color" href="#">
                    <i className="ti-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- navbar --> */}
      <div className="navigation w-100">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark p-0">
            <Link className="navbar-brand" href="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
            <button
              className="navbar-toggler rounded-0"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navigation">
              <ul className="navbar-nav ml-auto text-center">
                <li className={`nav-item ${pathname ==='/' ? 'active' : ''}`}>
                  <Link className="nav-link" href="/">
                    Home
                  </Link>
                </li>
                <li className={`nav-item ${pathname ==='/about' ? 'active' : ''}`}>
                  <Link className="nav-link" href="/about">
                    About
                  </Link>
                </li>
                <li className={`nav-item ${pathname ==='/courses' ? 'active' : ''}`}>
                  <Link className="nav-link" href="/courses">
                    COURSES
                  </Link>
                </li>
                <li className={`nav-item ${pathname ==='/contact' ? 'active' : ''}`}>
                  <Link className="nav-link" href="/contact">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
