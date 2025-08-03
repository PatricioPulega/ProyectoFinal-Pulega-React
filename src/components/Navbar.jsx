import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark w-100">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Mi <strong>Tienda</strong>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex flex-row gap-4 align-items-center mb-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/smartphones">
                Smartphones
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/laptops">
                Laptops
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/fragrances">
                Fragancias
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                Acerca de Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">
                Contacto
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/checkout">
                Finalizar compra
              </NavLink>
            </li>
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
