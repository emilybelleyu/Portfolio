import React from "react"
import '../styles/styles.scss'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
      kkslider: file(relativePath: { eq: "kkslider.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lunite: file(relativePath: { eq: "lunite.png" }) {
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
                 <Img fluid={data.lunite.childImageSharp.fluid} className="blog-img"/>
             </article>
            <div className="blog-card">
                <h4>Lunite App</h4>
                <p>Lunite is a modern, responsive weather dashboard built with React, TypeScript, and Tailwind CSS. It fetches real-time data from the OpenWeather API and Current UV Index API to display current weather, forecasts, and UV index information. I structured all API logic into a centralized WeatherAPI class, which makes requests to endpoints such as /weather, /forecast, and /uv using user-provided or stored coordinates. The app handles formatting and displaying temperature, humidity, wind speed, and UV index data across clean UI components built with Shadcn UI. I used TanStack Query for efficient data fetching and caching. Additional features include a favorites system using localStorage for storing preferred cities, and an interactive temperature chart built with Recharts, which visualizes upcoming temperature trends. Overall, Lunite delivers a personalized and informative weather-checking experience. </p>
                <div className="blog-footer">
                    <a href="https://github.com/emilybelleyu/lunite" target="_blank" rel="noopener noreferrer">View Github</a>
                </div>
            </div>
         </div>

        <div className="blog">
             <article>
                 <Img fluid={data.kkslider.childImageSharp.fluid} className="blog-img"/>
             </article>
            <div className="blog-card">
                <h4>K.K. Slider Concert</h4>
                <p>I built a fully animated, interactive K.K. Slider concert using Three.js, WebGL, and the Web Audio API. I modeled the character from scratch with a hierarchical structure to enable expressive animations, including real-time mouth movement synced to music. I implemented a physics-based particle system with THREE.BufferGeometry and THREE.Points to simulate dynamic concert effects like floating dust and sparkles. Interactive features include responsive camera motions, confetti sound effects, and stage lighting with real-time shadows. The intro sequence guides users through interactive elements, with custom fonts and animated dialogue mimicking the Animal Crossing aesthetic.</p>
                <div className="blog-footer">
                    <a href="https://github.com/naketriskirk/cs_174a_project" target="_blank" rel="noopener noreferrer">View Github</a>
                    <a href="https://www.youtube.com/watch?v=lqfPvo3LgFQ" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
         </div>

         <div className="blog">
             <article>
                 <Img fluid={data.portfolio.childImageSharp.fluid} className="blog-img"/>
             </article>
            <div className="blog-card">
                <h4>Em's Portfolio <span role="img" aria-label="shavedice">🍧</span></h4>
                <p>A responsive web application using React, GraphQL, and SCSS. It serves as a medium for my own creative 
                  design and a platform to feature my past projects. It is also the website you are on.</p>
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
                <p>This web platform helps students discover UCLA dining halls and nearby restaurants through reviews from fellow students, faculty, and staff. I developed the frontend using React and managed backend services with Node.js and Firebase. The platform integrates Firebase Authentication for secure user login (frontend integration with backend handling), and uses Firebase Realtime Database (or Firestore) to store and manage user-generated content.</p>
                <div className="blog-footer">
                    <a href="https://github.com/GMochman/cs35l-project" target="_blank" rel="noopener noreferrer">View Github</a>
                </div>
            </div>
         </div>

          <div className="blog">
             <article>
                 <Img fluid={data.choruslapilli.childImageSharp.fluid} className="blog-img"/>
             </article>
            <div className="blog-card">
                <h4>Chorus Lapilli <span role="img" aria-label="rome">🕌</span></h4>
                <p>Implementation of a variant of terni lapilli. Grab a friend and feel free to play.</p>
                <div className="blog-footer">
                    <a href="https://github.com/emilybelleyu/chorus-lapilli" target="_blank" rel="noopener noreferrer">View Github</a>
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
                  input files, as well as generating random numbers within defined numerical ranges. It is applicable to a wide
                  range of use cases, including data shuffling, random sampling, and the generation of arbitrary sequences.</p>
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
                <h4>Arcadia High Mobile</h4>
                <p>A mobile news app designed to keep students and parents informed about school announcements and deadlines—consolidating updates from the school website and social media into one place. Built with Java for the Android frontend, and Firebase for the backend. It leverages Firebase Realtime Database (or Firestore) to populate the news feed and Firebase Cloud Messaging (FCM) to send targeted push notifications based on user subscriptions. (Used the ahsappdevprogrammers account!)</p>
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
                <h4>Arcadia CMS <span role="img" aria-label="bag">💼</span></h4>
                <p>A CRUD web application created as the content editing and management system for the Arcadia High Mobile app. 
                  Uses Google’s Firebase API for backend and HTML, CSS, Javascript for frontend. Specifically, it
                  uses Firebase’s hosting, authentication, database, and cloud messaging services to deploy the website, 
                  authenticate content editors, populate the article feed, and send notifications to mobile app users.</p>
                <div className="blog-footer">
                    <a href="https://github.com/emilybelleyu/AHSWebsite" target="_blank" rel="noopener noreferrer">View Github</a>
                    {/* <a href="https://arcadia-high-mobile.web.app/" target="_blank" rel="noopener noreferrer">View Project</a> */}
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
                <h4>Fruity Friends <span role="img" aria-label="strawberry">🍓</span></h4>
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
