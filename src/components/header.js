import { Link } from "gatsby"
// import scrollTo from 'gatsby-plugin-smoothscroll';
import React from "react"
import { GiHamburgerMenu } from "react-icons/gi"
//Import Images
import daisy from "../images/daisy.png"
// import floralTile from "../images/floralTile.png"
// import pinkFloral from "../images/pinkFloral.jpeg"
// import floral from "../images/floral.jpeg"
import pinkBrown from "../images/pinkBrown.jpeg"

const Header = ({ toggleSidebar }) => (
  <header 
        style={{ 
        background: `url(${pinkBrown}) repeat-x`,
      }}
    >
    <div className="container">
      <div className="inner-header"> 
            <img className="daisy" src={daisy} width="45" height="40" alt="Daisy"/>
            <div className="logo">
              <Link to="/">Emily Yu</Link>
            </div>
            <button type="button" className="toggle-btn" onClick={toggleSidebar}>
              <GiHamburgerMenu></GiHamburgerMenu>
            </button>

        <div className="navigation">
          <nav>
            <Link to="/">Home</Link>
            {/* <button id="abt-btn" onClick={() => scrollTo('#about')}>About</button> */}
            <Link to="/#about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/kitchen">My Kitchen</Link>
            {/* <Link to="/contact">Contact</Link> */}
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
