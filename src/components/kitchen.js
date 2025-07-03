import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/styles.scss"


const Kitchen = () => {
  const data = useStaticQuery(graphql`
    query {
      strawberrymatcha: file(relativePath: { eq: "matcha.png" }) {
        childImageSharp { fluid(maxWidth: 500, quality: 90) { ...GatsbyImageSharpFluid } }
      }
      tanghulu: file(relativePath: { eq: "tanghulu.jpg" }) {
        childImageSharp { fluid(maxWidth: 500, quality: 90) { ...GatsbyImageSharpFluid } }
      }
      berrychantilly: file(relativePath: { eq: "berrychantilly.jpg" }) {
        childImageSharp { fluid(maxWidth: 500, quality: 90) { ...GatsbyImageSharpFluid } }
      }
      simpledinner: file(relativePath: { eq: "simpledinner.jpg" }) {
        childImageSharp { fluid(maxWidth: 500, quality: 90) { ...GatsbyImageSharpFluid } }
      }
      anothermatcha: file(relativePath: { eq: "matcha2.jpg" }) {
        childImageSharp { fluid(maxWidth: 500, quality: 90) { ...GatsbyImageSharpFluid } }
      }
      matchacookies: file(relativePath: { eq: "matchacookies.jpg" }) {
        childImageSharp { fluid(maxWidth: 500, quality: 90) { ...GatsbyImageSharpFluid } }
      }
      matchacrepe: file(relativePath: { eq: "matchacrepe.jpeg" }) {
        childImageSharp { fluid(maxWidth: 500, quality: 90) { ...GatsbyImageSharpFluid } }
      }
      strawbsalad: file(relativePath: { eq: "strawbsalad.jpg" }) {
        childImageSharp { fluid(maxWidth: 500, quality: 90) { ...GatsbyImageSharpFluid } }
      }
      potatosalad: file(relativePath: { eq: "potatosalad.jpg" }) {
        childImageSharp { fluid(maxWidth: 500, quality: 90) { ...GatsbyImageSharpFluid } }
      }
      spicymiso: file(relativePath: { eq: "spicymiso.jpg" }) {
        childImageSharp { fluid(maxWidth: 500, quality: 90) { ...GatsbyImageSharpFluid } }
      }
      pizzatoast: file(relativePath: { eq: "pizzatoast.jpeg" }) {
        childImageSharp { fluid(maxWidth: 500, quality: 90) { ...GatsbyImageSharpFluid } }
      }
      pestopasta: file(relativePath: { eq: "pestopasta.jpg" }) {
        childImageSharp { fluid(maxWidth: 500, quality: 90) { ...GatsbyImageSharpFluid } }
      }
      blackpep: file(relativePath: { eq: "blackpep.jpg" }) {
        childImageSharp { fluid(maxWidth: 500, quality: 90) { ...GatsbyImageSharpFluid } }
      }
      blt: file(relativePath: { eq: "blt.jpg" }) {
        childImageSharp { fluid(maxWidth: 500, quality: 90) { ...GatsbyImageSharpFluid } }
      }
      smoothie: file(relativePath: { eq: "smoothie.jpg" }) {
        childImageSharp { fluid(maxWidth: 500, quality: 90) { ...GatsbyImageSharpFluid } }
      }
      flan: file(relativePath: { eq: "flan.jpg" }) {
        childImageSharp { fluid(maxWidth: 500, quality: 90) { ...GatsbyImageSharpFluid } }
      }
      eggchives: file(relativePath: { eq: "eggchives.jpg" }) {
        childImageSharp { fluid(maxWidth: 500, quality: 90) { ...GatsbyImageSharpFluid } }
      }
      perfsteak: file(relativePath: { eq: "perfsteak.jpeg" }) {
        childImageSharp { fluid(maxWidth: 500, quality: 90) { ...GatsbyImageSharpFluid } }
      }
      hamsandwich: file(relativePath: { eq: "hamsandwich.jpg" }) {
        childImageSharp { fluid(maxWidth: 500, quality: 90) { ...GatsbyImageSharpFluid } }
      }
    }
  `)

  // TODO: Replace with actual ingredients, stories, and steps
  // This is just placeholder data for now

  const dishes = [
    {
      id: 1,
      name: "Strawberry Tanghulu",
      category: "dessert",
      image: data.tanghulu.childImageSharp.fluid,
      ingredients: ["Matcha powder", "Strawberries", "Cream"],
      story: "Made this on a rainy Sunday!",
      steps: ["Make crust", "Whisk matcha filling", "Top with strawberries"],
    },
    {
      id: 2,
      name: "Berry Chantilly Matcha Latte",
      category: "drink",
      image: data.berrychantilly.childImageSharp.fluid,
      ingredients: ["Egg", "Bread", "Scallions"],
      story: "Quick breakfast before class.",
      steps: ["Toast bread", "Fry egg", "Garnish with scallions"],
    },
    {
      id: 3,
      name: "Beef Gyudon and Bok Choy",
      category: "meal",
      image: data.simpledinner.childImageSharp.fluid,
      ingredients: ["Egg", "Bread", "Scallions"],
      story: "Quick breakfast before class.",
      steps: ["Toast bread", "Fry egg", "Garnish with scallions"],
    },
    {
      id: 4,
      name: "Strawberry Matcha Latte",
      category: "drink",
      image: data.strawberrymatcha.childImageSharp.fluid,
      ingredients: ["Egg", "Bread", "Scallions"],
      story: "Quick breakfast before class.",
      steps: ["Toast bread", "Fry egg", "Garnish with scallions"],
    },
    {
      id: 5,
      name: "Strawberry Balsamic Salad",
      category: "meal",
      image: data.strawbsalad.childImageSharp.fluid,
      ingredients: ["Egg", "Bread", "Scallions"],
      story: "Quick breakfast before class.",
      steps: ["Toast bread", "Fry egg", "Garnish with scallions"],
    },
    {
      id: 6,
      name: "Another Matcha Latte",
      category: "drink",
      image: data.anothermatcha.childImageSharp.fluid,
      ingredients: ["Egg", "Bread", "Scallions"],
      story: "Quick breakfast before class.",
      steps: ["Toast bread", "Fry egg", "Garnish with scallions"],
    },
    {
      id: 7,
      name: "Matcha Shortbread Cookies",
      category: "dessert",
      image: data.matchacookies.childImageSharp.fluid,
      ingredients: ["Egg", "Bread", "Scallions"],
      story: "Quick breakfast before class.",
      steps: ["Toast bread", "Fry egg", "Garnish with scallions"],
    },
    {
      id: 8,
      name: "Matcha Crepe",
      category: "dessert",
      image: data.matchacrepe.childImageSharp.fluid,
      ingredients: ["Egg", "Bread", "Scallions"],
      story: "Quick breakfast before class.",
      steps: ["Toast bread", "Fry egg", "Garnish with scallions"],
    },
    {
      id: 9,
      name: "Japanese Potato Salad",
      category: "snack",
      image: data.potatosalad.childImageSharp.fluid,
      ingredients: ["Egg", "Bread", "Scallions"],
      story: "Quick breakfast before class.",
      steps: ["Toast bread", "Fry egg", "Garnish with scallions"],
    },
    {
      id: 10,
      name: "Spicy Miso Ramen",
      category: "meal",
      image: data.spicymiso.childImageSharp.fluid,
      ingredients: ["Egg", "Bread", "Scallions"],
      story: "Quick breakfast before class.",
      steps: ["Toast bread", "Fry egg", "Garnish with scallions"],
    },
    {
      id: 10,
      name: "Pizza Toast",
      category: "snack",
      image: data.pizzatoast.childImageSharp.fluid,
      ingredients: ["Egg", "Bread", "Scallions"],
      story: "Quick breakfast before class.",
      steps: ["Toast bread", "Fry egg", "Garnish with scallions"],
    },
    {
      id: 11,
      name: "Pesto Arugula Pasta",
      category: "meal",
      image: data.pestopasta.childImageSharp.fluid,
      ingredients: ["Egg", "Bread", "Scallions"],
      story: "Quick breakfast before class.",
      steps: ["Toast bread", "Fry egg", "Garnish with scallions"],
    },
    {
      id: 12,
      name: "Black Pepper Udon",
      category: "meal",
      image: data.blackpep.childImageSharp.fluid,
      ingredients: ["Egg", "Bread", "Scallions"],
      story: "Quick breakfast before class.",
      steps: ["Toast bread", "Fry egg", "Garnish with scallions"],
    },
    {
      id: 13,
      name: "BLT Sandwich with Fries",
      category: "meal",
      image: data.blt.childImageSharp.fluid,
      ingredients: ["Egg", "Bread", "Scallions"],
      story: "Quick breakfast before class.",
      steps: ["Toast bread", "Fry egg", "Garnish with scallions"],
    },
    {
      id: 14,
      name: "Pink Smoothie",
      category: "drink",
      image: data.smoothie.childImageSharp.fluid,
      ingredients: ["Egg", "Bread", "Scallions"],
      story: "Quick breakfast before class.",
      steps: ["Toast bread", "Fry egg", "Garnish with scallions"],
    },
    {
      id: 15,
      name: "Japanese Flan",
      category: "dessert",
      image: data.flan.childImageSharp.fluid,
      ingredients: ["Egg", "Bread", "Scallions"],
      story: "Quick breakfast before class.",
      steps: ["Toast bread", "Fry egg", "Garnish with scallions"],
    },
    {
      id: 16,
      name: "Chive & Eggs with Sweet Potato",
      category: "meal",
      image: data.eggchives.childImageSharp.fluid,
      ingredients: ["Egg", "Bread", "Scallions"],
      story: "Quick breakfast before class.",
      steps: ["Toast bread", "Fry egg", "Garnish with scallions"],
    },
    {
      id: 17,
      name: "Perfect Steak",
      category: "meal",
      image: data.perfsteak.childImageSharp.fluid,
      ingredients: ["Egg", "Bread", "Scallions"],
      story: "Quick breakfast before class.",
      steps: ["Toast bread", "Fry egg", "Garnish with scallions"],
    },
    {
      id: 18,
      name: "Ham Sandwich and Dill Pickles",
      category: "meal",
      image: data.hamsandwich.childImageSharp.fluid,
      ingredients: ["Egg", "Bread", "Scallions"],
      story: "Quick breakfast before class.",
      steps: ["Toast bread", "Fry egg", "Garnish with scallions"],
    }
  ]

  const categories = ["all", "dessert", "drink", "meal", "snack"]
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDish, setSelectedDish] = useState(null)

  const filteredDishes =
    selectedCategory === "all"
      ? dishes
      : dishes.filter((dish) => dish.category === selectedCategory)

  return (
    <section className="kitchen">
    <h3>
      a kitchen journal{" "}
      <span role="img" aria-label="cloud">
        ☁️
      </span>
    </h3>
      <p><em>so i don't forget the recipes</em></p>

      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="gallery">
        {filteredDishes.map((dish) => (
          <div
          className="dish-card"
          role="button"
          tabIndex={0}
          onClick={() => setSelectedDish(dish)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setSelectedDish(dish)
            }
          }}
          >
            <Img fluid={dish.image} alt={dish.name} />
            <div className="caption">{dish.name}</div>
          </div>
        ))}
      </div>

      {selectedDish && (
        <div
          className="modal-overlay"
          role="button"
          tabIndex={0}
          onClick={() => setSelectedDish(null)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setSelectedDish(null)
            }
          }}
        >
        <div
          className="modal-content"
          role="button"
          tabIndex={0}
          onClick={() => setSelectedDish(null)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setSelectedDish(null)
            }
          }}
        >

            <h2>{selectedDish.name}</h2>
            <p><strong>Story:</strong> {selectedDish.story}</p>
            <p><strong>Ingredients:</strong></p>
            <ul>
              {selectedDish.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p><strong>Steps:</strong></p>
            <ol>
              {selectedDish.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
            <button onClick={() => setSelectedDish(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Kitchen
