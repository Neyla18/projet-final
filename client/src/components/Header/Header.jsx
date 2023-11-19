
import React from "react";


//link
import { Link} from "react-router-dom";
import './header.css'

import Logo from "../../assets/Logo.jsx";
import { toggle } from "./navbar";

const Header = () => {

    return (
    <header class="header">
      <Link to="/" className="logo-link">
      <Logo/>
      <div>
        <span className="span1">Bibliothèque</span>
        <span className="span2" >Emeraude</span>
        </div>
      </Link>

      <nav class="menu-principal" >
        <Link to="/">Accueil</Link>
        <Link to="/categories">Collections</Link>
        <Link to="/evenement">Évenements</Link>
        <Link to="/a-propos">À propos</Link>
        <a href="#contact">Contact</a>
      </nav>

   
  <button onClick={toggle} type="button"className="nav-toggle">
  <span className="line l1"></span>
  <span className="line l2"> </span>
  <span className="line l3"></span>
</button>


    </header>
  );
}

export default Header

