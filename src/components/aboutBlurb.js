import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import { Link } from "gatsby"
import floralTile from "../images/floralTile.png"
// import gingham from "../images/gingham.jpeg"

const AboutBlurb = () => {
  const data = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "emiCafe.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div id="about" className="about-blurb" style={{ background: `url(${floralTile}) repeat` }}>
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>About Me</h3>
            <p>
                I'm currently studying at the University of California, Los Angeles as a Computer Science major. I have an unhealthy addiction to matcha, but a healthy obsession for cats.  
            </p>
            <div className="btn-row">
              <a href="mailto:emilyyu331@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a>
              {/* <Link to="/contact">Contact</Link> */}
            </div>
          </div>
          <div className="images">
            <div className="top-right">
              <Img fluid={data.me.childImageSharp.fluid} />
            </div>
          </div>
        </div>
        <div className="spotify-embed">
          <iframe title="Spotify Embed" src="https://open.spotify.com/embed/playlist/6m8EBuKc9pJpvkf40xnndL?utm_source=generator" width="45%" height="352" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          {/* <iframe title="Video Player" src="https://open.spotify.com/embed/playlist/7LwmPOTG6EUc8eABfimv71?utm_source=generator" width="45%" height="352" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" ></iframe> */}
        </div>
        <div className="spotify-content">
          <p>
            These are my favourite songs at the moment!<span role="img" aria-label="strawberry">🍓</span><span role="img" aria-label="heartpulse">💗</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutBlurb