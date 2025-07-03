import { Link } from "gatsby"
import pinkBrown from "../images/pinkBrown.jpeg"

const Banner = () => {
  return (
    <div className="banner" 
    style={{ 
      background: `url(${pinkBrown}) repeat`,
      }}
      >
      <div className="container">
        <div className="row">
          <div className="main-text">Hi! I'm Emily.</div>
          <div className="main-body">
            Welcome to my personal website. I hope
             to create products that inform, support, or entertain others,
             as games and apps have done for me.
          </div>
          <div className="btn-row">
            <Link to="/projects">View my work</Link>
          </div>
        </div>
        <div className="scroll">
            <span>Scroll down</span>
        </div>
      </div>
      <div className="fixed-misc">Tea Enthusiast and Cat Lover</div>
    </div>
  )
}

export default Banner