import React from "react"
import { Link } from "gatsby"
// import scrollTo from 'gatsby-plugin-smoothscroll';

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/#about",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects",
  },
  // {
  //   id: 4,
  //   text: "contact",
  //   url: "/contact/",
  // },
  // {
  //   id: 5,
  // text: "blog",
  // url: "/blog/",
  // },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}