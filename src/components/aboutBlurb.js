import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import { Link } from "gatsby"

const AboutBlurb = () => {
  const data = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "em.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div id="about" className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>About Me</h3>
            <p>
                I'm currently studying at the University of California, Los Angeles as a Computer Science major. I have an unhealthy addiction to matcha, but a healthy obsession with cats. ;)  
            </p>
            <div className="btn-row">
              <a href="mailto:emilyyu331@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a>
              {/* <Link to="/contact">Contact me</Link> */}
            </div>
          </div>
          <div className="images">
            <div className="top-right">
              <Img fluid={data.me.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutBlurb