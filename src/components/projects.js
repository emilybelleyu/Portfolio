import React from "react"
import '../styles/styles.scss'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import { Link } from "gatsby"

const Projects= () => {
  const data = useStaticQuery(graphql`
    query {
      mobileapp: file(relativePath: { eq: "mobileapp.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
        ces: file(relativePath: { eq: "ces.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      castway: file(relativePath: { eq: "castway.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fruity: file(relativePath: { eq: "fruity.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portfolio: file(relativePath: { eq: "portfolio.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      foodies: file(relativePath: { eq: "foodies.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      choruslapilli: file(relativePath: { eq: "chorus-lapilli.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pythonshuf: file(relativePath: { eq: "shuf.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div id="projects" className="projects">
          <div className="blog">
             <article>
                 <Img fluid={data.choruslapilli.childImageSharp.fluid} className="blog-img"/>
             </article>
            <div className="blog-card">
                <h4>Chorus Lapilli <span role="img" aria-label="rome">🕌</span></h4>
                <p>Implementation of a variant of terni lapilli. Grab a friend and try to play!</p>
                <div className="blog-footer">
                    <a href="https://github.com/emilybelleyu/chorus-lapilli" target="_blank" rel="noopener noreferrer">View Github</a>
                </div>
            </div>
         </div>

         <div className="blog">
             <article>
                 <Img fluid={data.portfolio.childImageSharp.fluid} className="blog-img"/>
             </article>
            <div className="blog-card">
                <h4>Em's Portfolio <span role="img" aria-label="rabbit">🐇</span><span role="img" aria-label="shavedice">🍧</span></h4>
                <p>A responsive web application using React, GraphQL, and SCSS. It serves as a medium for my own creative 
                  design and a platform to feature my past projects. Coincidentally, it is the website you are on!</p>
                <div className="blog-footer">
                    <a href="https://github.com/emilybelleyu/Portfolio" target="_blank" rel="noopener noreferrer">View Github</a>
                    <a href="https://emilybelleyu.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
         </div>

          <div className="blog">
             <article>
                 <Img fluid={data.foodies.childImageSharp.fluid} className="blog-img"/>
             </article>
            <div className="blog-card">
                <h4>The Foodies <span role="img" aria-label="juice">🧃</span></h4>
                <p>At UCLA, there is a lack of a reliable resource for making informed decisions regarding food options 
                  available on campus. This platform enables students to learn more about different dining halls and restaurants
                  on and near campus based on the experiences of fellow students, UCLA faculty, and staff. Created the frontend 
                  with React and Node.js and backend is integrated with Firebase (authentication and database).</p>
                <div className="blog-footer">
                    <a href="https://github.com/GMochman/cs35l-project" target="_blank" rel="noopener noreferrer">View Github</a>
                </div>
            </div>
         </div>

         <div className="blog">
             <article>
                 <Img fluid={data.pythonshuf.childImageSharp.fluid} className="blog-img"/>
             </article>
            <div className="blog-card">
                <h4>Python GNU Shuf<span role="img" aria-label="shuffle"> 🔀 </span></h4>
                <p>Python implementation of GNU shuf. Shuf is an integral component of the textutils package within the GNU 
                  Core Utilities suite. The command-line utility can produce randomized permutations of lines extracted from 
                  input files, as well as generating random numbers within defined numerical ranges. Its versatile functionality 
                  is applicable to a wide range of use cases, including data shuffling, random sampling, and the generation of arbitrary sequences. 
                  My professor Dr. Paul Eggert was actually the one who made shuf!</p>
                <div className="blog-footer">
                    {/* <a href="https://github.com/emilybelleyu/Portfolio" target="_blank" rel="noopener noreferrer">View Github</a> */}
                    {/* <a href="https://emilybelleyu.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">View Project</a> */}
                </div>
            </div>
         </div>

         <div className="blog">
             <article>
                 <Img fluid={data.mobileapp.childImageSharp.fluid} className="blog-img"/>
             </article>
            <div className="blog-card">
                <h4>Arcadia High Mobile <span role="img" aria-label="phone">📱</span></h4>
                <p>A mobile news app used to help my high school's students and parents stay updated on important school 
                  announcements and deadlines--instead of scouring through the school's website and social medias. Uses Swift for 
                   its frontend and Firebase for its backend. Namely, it uses Firebase’s database and cloud messaging 
                   services to populate the news feed and subscribe users to push notifications.</p>
                <div className="blog-footer">
                    <a href="https://github.com/AHSAppDevTeam/AHS2020app" target="_blank" rel="noopener noreferrer">View Github</a>
                    <a href="https://apps.apple.com/us/app/arcadia-high-mobile/id1305220468" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
         </div>

         <div className="blog">
             <article>
                 <Img fluid={data.ces.childImageSharp.fluid} className="blog-img"/>
             </article>
            <div className="blog-card">
                <h4>Content Editing System <span role="img" aria-label="envelope">💌</span></h4>
                <p>A CRUD web application created as the content editing system for the Arcadia High Mobile app. 
                  Uses Google’s Firebase API for backend and HTML, CSS, Javascript for frontend. Specifically, it
                  uses Firebase’s hosting, authentication, database, and cloud messaging services to deploy the website, 
                  authenticate content editors, populate the article feed, and send notifications to mobile app users.</p>
                <div className="blog-footer">
                    <a href="https://github.com/emilybelleyu/AHSWebsite" target="_blank" rel="noopener noreferrer">View Github</a>
                    <a href="https://arcadia-high-mobile.web.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
         </div>

         <div className="blog">
             <article>
                 <Img fluid={data.castway.childImageSharp.fluid} className="blog-img"/>
             </article>
            <div className="blog-card">
                <h4>Castway <span role="img" aria-label="laptop">💻</span></h4>
                <p>An open source video conferencing web application using React, Node.js, Express, and Typescript. 
                  I implemented a multipeer connection using WebRTC protocol to introduce users/peers to each other via a signaling server.</p>
                <div className="blog-footer">
                    {/* <a href="https://github.com/pocket-coders/castway-client" target="_blank" rel="noopener noreferrer">View Github</a> */}
                    <a href="https://www.youtube.com/watch?v=RRO1xZRwhhQ" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
         </div>

         <div className="blog">
             <article>
                <Img fluid={data.fruity.childImageSharp.fluid} className="blog-img"/>
             </article>
            <div className="blog-card">
                <h4>Fruity Friends <span role="img" aria-label="cherry">🍒</span></h4>
                <p>A mystery narrative game programmed in C# and made with the Unity game engine. A 
                  final project created while attending the California State Summer School for Mathematics 
                  & Science (COSMOS) '19 within the Game Design and Development cluster.</p>
                <div className="blog-footer">
                    <a href="https://play.unity.com/mg/other/fruity-friends" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
         </div>

    </div>

  )
}

export default Projects
