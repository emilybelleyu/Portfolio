import React, { useLayoutEffect } from "react"
import { Link } from "gatsby"
import pinkBrown from "../images/pinkBrown.jpeg"
import heart from "../images/heart.png";

const Banner = () => {

    useLayoutEffect(() => {
    const container = document.querySelector(".petal-animation");
    const petals = [];

    for (let i = 0; i < 15; i++) {
      const petal = document.createElement("div");
      petal.className = "petal";
      const rotation = Math.floor(Math.random() * 360);
      petal.style.setProperty('--rotate-end', `${rotation + 360}deg`);

      // size 
      const size = 30 + Math.random() * 30;
      petal.style.width = `${size}px`;
      petal.style.height = `${size}px`;

      // position
      petal.style.left = `${Math.random() * 100}vw`;
      petal.style.animationDuration = `${10 + Math.random() * 10}s`;
      petal.style.animationDelay = `${Math.random() * 8}s`;
      
      petal.style.backgroundImage = `url(${heart})`;
      container.appendChild(petal);
      petals.push(petal);
    }

    return () => {
      petals.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div className="banner" 
    style={{ 
      background: `url(${pinkBrown}) repeat`,
      }}
      >
      <div className="petal-animation"></div>
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