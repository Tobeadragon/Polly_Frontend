import React, {useState} from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";
import PollyLogo from '../../img/pollylogo.png'


const Navbar = () => {
  
  const [isMobile, setIsMobile] = useState(false)

  return (
    <div className="navContainer">
    <nav className="navbar">
      <Link to="/"><img src={PollyLogo} alt="" className="Logo"/></Link>
      
      
      <ul className={isMobile ? "nav-links-mobile": "nav-links"}
      onClick={()=> setIsMobile(false)}
      >
        <Link to="/" className="main">
            <li>Main</li>
        </Link>

        <Link to="/hilfeseite" className="hilfe">
            <li>Hilfe</li>
        </Link>
        
        <Link to="/login" className="login">
            <li>Login</li>
        </Link>
        
        <Link to="/signup" className="signup">
            <li>Sign Up</li>
        </Link>
      </ul>
      <button className="mobile-menu-icon"
      onClick={()=>setIsMobile(!isMobile)}
      
      >
          {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
    </div>

  );
};

export default Navbar;