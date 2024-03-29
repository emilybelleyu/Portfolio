import React from "react"

// Socials
import linkedin from "../images/linkedin.png"
import instagram from "../images/instagram.png"
import github from "../images/github.png"
import resume from "../images/resume.png"
// import facebook from "../images/facebook.png"
import floralTile from "../images/floralTile.png"
// import gingham from "../images/gingham.jpeg"

const Footer = () => {
  return (
    <footer>
      {/* <div className="featured-companies">
        <div className="container">
          <ul>
            {featured.map(({ name, image }) => (
              <li key="name">
                <img src={image} alt={name} />
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      <div className="footer" style={{ background: `url(${floralTile}) repeat` }}>
        <div className="inner" style={{ background: `url(${floralTile}) repeat` }}>
          <span>© {new Date().getFullYear()} Emily Yu</span>
          <div className="socials">
            <a href="https://www.linkedin.com/in/emily-yu-074a5a1b0" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} height="40" alt="Linkedin" />
            </a>
            <a href="https://www.instagram.com/emibelleyu" target="_blank" rel="noopener noreferrer">
              <img src={instagram} height="40" alt="Instagram" />
            </a>
            <a href="https://github.com/emilybelleyu" target="_blank" rel="noopener noreferrer">
              <img src={github} height="40" alt="Github" />
            </a>
            <a href="https://docs.google.com/document/d/1Vg_EObawIOqcuAnC4M7j243M5KJB1Dl_1UOVMxNCgFM/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
              <img src={resume} height="40" alt="Resume" />
            </a>
          </div>
          <div className="myemail">
            <a href="mailto:emilyyu331@gmail.com" target="_blank" rel="noopener noreferrer">emilyyu331@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer