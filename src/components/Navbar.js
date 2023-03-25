import React, {useState} from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);

    const closeMobileMenu = () => setClick(false);
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
        <Link style= {{textDecoration : 'none'}} to="/" className="navbar-logo" onClick={closeMobileMenu}>
        {/* <img src="images/Logo (4)." width={155} height={50} alt="UFA" /> */}
        <h1>UFA</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/options"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Options
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/heatwave"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                HEATWAVE/AQI
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link
                to="/login"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                LOGIN
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link
                to="/team"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Team
              </Link>
            </li> */}
          </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar