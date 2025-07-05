import React, { useEffect, useRef, useState } from "react"
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
      waterytteok: file(relativePath: { eq: "watery.jpg" }) {
        childImageSharp { fluid(maxWidth: 500, quality: 90) { ...GatsbyImageSharpFluid } }
      }
      thicktteok: file(relativePath: { eq: "thick.jpg" }) {
        childImageSharp { fluid(maxWidth: 500, quality: 90) { ...GatsbyImageSharpFluid } }
      }
      crispychicken: file(relativePath: { eq: "crispychicken.jpeg" }) {
        childImageSharp { fluid(maxWidth: 500, quality: 90) { ...GatsbyImageSharpFluid } }
      }
      approved: file(relativePath: { eq: "approved.jpg" }) {
        childImageSharp { fluid(maxWidth: 500, quality: 90) { ...GatsbyImageSharpFluid } }
      }
    }
  `)

  // TODO: finish updating rest of recipes

  const dishes = [
    {
      id: 1,
      name: "Strawberry Tanghulu",
      category: "dessert",
      image: data.tanghulu.childImageSharp.fluid,
      ingredients: ["handful of strawberries", "sugar", "water"],
      note: "https://www.tiktok.com/@jasmineandtea/video/7358929362017717546?lang=en",
      steps: ["wash strawberries, take off tops, and dry well", "make syrup (2:1 sugar to water ratio)", "microwave syrup for ~5 mins (30 second intervals) until light amber color", "quickly dip strawberries in syrup", "let cool on parchment paper or freezer for 10 mins"],
    },
    {
      id: 2,
      name: "Berry Chantilly Matcha Latte",
      category: "drink",
      image: data.berrychantilly.childImageSharp.fluid,
      ingredients: ["berry chantilly puree (1 tsp almond extract, 1 tsp vanilla extract, honey, handful of strawberries)", "milk (i use almond milk and whole milk)", "electric whisk", "matcha", "ice"],
      note: "inspired by the berry chantilly matcha latte from whole foods",
      steps: ["make berry chantilly puree (blend berries with honey, almond ex, vanilla ex) and store in a container", "whisk 3 tsp matcha with hot water", "layer berry puree, ice, milk, and matcha in a cute glass", "top with pink berry cream top if you'd like (whisk berry puree + whole milk)"],
    },
    {
      id: 3,
      name: "Beef Gyudon and Bok Choy",
      category: "meal",
      image: data.simpledinner.childImageSharp.fluid,
      ingredients: ["sliced beef (1 tbsp soy sauce, 1 tbsp sake, 1 tbsp mirin, 2 tsp coconut sugar/honey, 1 tsp dashi + 1/4 cup water, 1/4 sliced onion)", "bok choy (1 slice ginger, 1-2 cloves minced garlic, 1 tsp chicken bouillon/salt, 1 tsp white pepper, scallions/green onions for topping", "rice (optional)"],
      note: "https://thewoksoflife.com/gyudon-recipe-beef-rice",
      steps: ["cook sliced onions in dash of oil for a few mins", "add beef + sugar and cook until browned", "add sauce ingredients and simmer", "stir-fry bok choy with ginger, garlic, oil for 5-10 mins until tender", "season bok choy with chicken bouillon/salt and white pepper", "serve beef over rice with bok choy on the side", "top with scallions or green onions if you'd like"],
    },
    {
      id: 4,
      name: "Strawberry Matcha Latte",
      category: "drink",
      image: data.strawberrymatcha.childImageSharp.fluid,
      ingredients: ["strawberry puree (1 tsp vanilla extract, honey, handful of strawberries)", "milk (i use almond milk and whole milk)", "electric whisk", "matcha", "ice"],
      note: "similar to the berry chantilly matcha latte but with strawberry puree",
      steps: ["make strawberry puree (blend strawberries with honey and vanilla extract) and store in a container", "whisk 3 tsp matcha with hot water", "layer strawberry puree, ice, milk, and matcha in a cute glass", "top with pink berry cream top if you'd like (whisk strawberry puree + whole milk)"],
    },
    {
      id: 5,
      name: "Strawberry Balsamic Salad",
      category: "meal",
      image: data.strawbsalad.childImageSharp.fluid,
      ingredients: ["handful of strawberries", "1 tbsp balsamic vinegar", "1 tbsp olive oil", "romaine lettuce", "few sliced red onions", "handful of feta cheese/ chopped walnuts (optional)", "1 tsp salt", "1 tsp pepper"],
      note: "https://www.loveandlemons.com/strawberry-salad/",
      steps: ["wash and slice strawberries", "mix balsamic vinegar, olive oil, salt, and pepper in a bowl", "toss romaine lettuce with dressing", "top with sliced strawberries and red onions", "add feta cheese or nuts if you'd like"],
    },
    {
      id: 6,
      name: "Another Matcha Latte",
      category: "drink",
      image: data.anothermatcha.childImageSharp.fluid,
      ingredients: [],
      note: "i just like this picture, take a look at either the berry chantilly matcha latte or strawberry matcha latte for the recipe",
      steps: [],
    },
    {
      id: 7,
      name: "Matcha Strawberry Cookies",
      category: "dessert",
      image: data.matchacookies.childImageSharp.fluid,
      ingredients: [],
      note: "https://momentsofsugar.substack.com/p/marble-matcha-strawberry-cookies",
      steps: ["follow recipe, made chocolate ganache instead of strawberry icing, did not marble the cookies cause lazy, made cookies less thin to look more chubby and cute, and topped with freeze dried strawberries"],
    },
    {
      id: 8,
      name: "Mochi the Cat",
      category: "snack",
      image: data.approved.childImageSharp.fluid,
      ingredients: [],
      note: "not a recipe, she's just a cute cat that approves of the cooking",
      steps: [],
    },
    {
      id: 9,
      name: "Matcha Crepe",
      category: "dessert",
      image: data.matchacrepe.childImageSharp.fluid,
      ingredients: [],
      note: "https://www.siftandsimmer.com/matcha-crepes/#recipe",
      steps: ["follow recipe above, fold into a triangle and top with whipped cream, fruits, and/or matcha powder (i used white peaches and target's strawberry whipped cream to make cute cream flowers), and added a drizzle of honey (optional)"],
    },
    {
      id: 10,
      name: "Soupy Tteokbokki",
      category: "meal",
      image: data.waterytteok.childImageSharp.fluid,
      ingredients: ["tteokbokki (rice cakes)", "tteokbokki sauce (1 tbsp gochujang, 3 tsp gochugaru, 1/2 tbsp soy sauce, 2 tsp sugar/honey, dash of black pepper, 1 clove minced garlic, 2 cups water + anchovy tablet/1 tsp dashi powder)", "fish cakes (i used fish balls)", "handful of chopped cabbage", "scallions/green onions for topping (i used korean leeks)", "jammy egg (6-7 mins boiled, premade day before is more convenient!)"],
      note: "https://mykoreankitchen.com/tteokbokki-spicy-rice-cakes/",
      steps: ["used bibigo tteokbokki package but added extra sauce/spices (if you do not want to use prepackaged bibigo sauce at all just add more gochujang)", "boil water and add tteokbokki sauce ingredients", "add tteokbokki and cook for 5-10 mins until soft", "add fish cakes and cabbage, cook for another few mins", "top with scallions/green onions and jammy egg"],
    },
    {
      id: 11,
      name: "Thick Tteokbokki",
      category: "meal",
      image: data.thicktteok.childImageSharp.fluid,
      ingredients: ["tteokbokki (rice cakes)", "tteokbokki sauce (1 tbsp gochujang, 3 tsp gochugaru, 1/2 tbsp soy sauce, 2 tsp sugar/honey, dash of black pepper, 1 clove minced garlic, 1 cup water + anchovy tablet/1 tsp dashi powder)", "fish cakes (i used fish balls)", "handful of chopped cabbage", "scallions/green onions for topping (i used korean leeks)", "jammy egg (6-7 mins boiled, premade day before is more convenient!)"],
      note: "similar to the soupy tteokbokki but with 1 cup less water and cooked sauce longer for reduced sauce",
      steps: ["used bibigo tteokbokki package but added extra sauce/spice (if you do not want to use prepackaged bibigo sauce at all just add more gochujang)", "boil water and add tteokbokki sauce ingredients", "add tteokbokki and cook for 5-10 mins until soft", "add fish cakes and cabbage, cook for another few mins", "top with scallions/green onions and jammy egg"],
    },
    {
      id: 12,
      name: "Japanese Potato Salad",
      category: "snack",
      image: data.potatosalad.childImageSharp.fluid,
      ingredients: [],
      note: "",
      steps: [],
    },
    {
      id: 13,
      name: "Spicy Miso Ramen",
      category: "meal",
      image: data.spicymiso.childImageSharp.fluid,
      ingredients: [],
      note: "",
      steps: [],
    },
    {
      id: 14,
      name: "Pizza Toast",
      category: "snack",
      image: data.pizzatoast.childImageSharp.fluid,
      ingredients: [],
      note: "",
      steps: [],
    },
    {
      id: 15,
      name: "Pesto Arugula Pasta and Salmon",
      category: "meal",
      image: data.pestopasta.childImageSharp.fluid,
      ingredients: [],
      note: "",
      steps: [],
    },
    {
      id: 16,
      name: "Black Pepper Beef Udon",
      category: "meal",
      image: data.blackpep.childImageSharp.fluid,
      ingredients: [],
      note: "",
      steps: [],
    },
    {
      id: 17,
      name: "BLT and Sweet Potato Fries",
      category: "meal",
      image: data.blt.childImageSharp.fluid,
      ingredients: [],
      note: "",
      steps: [],
    },
    {
      id: 18,
      name: "Pink Smoothie",
      category: "drink",
      image: data.smoothie.childImageSharp.fluid,
      ingredients: [],
      note: "",
      steps: [],
    },
    {
      id: 19,
      name: "Japanese Flan",
      category: "dessert",
      image: data.flan.childImageSharp.fluid,
      ingredients: [],
      note: "",
      steps: [],
    },
    {
      id: 20,
      name: "Chive & Eggs with Sweet Potato",
      category: "meal",
      image: data.eggchives.childImageSharp.fluid,
      ingredients: [],
      note: "",
      steps: [],
    },
    {
      id: 21,
      name: "Perfect Steak",
      category: "meal",
      image: data.perfsteak.childImageSharp.fluid,
      ingredients: [],
      note: "",
      steps: [],
    },
    {
      id: 22,
      name: "Ham Sandwich and Dill Pickles",
      category: "meal",
      image: data.hamsandwich.childImageSharp.fluid,
      ingredients: [],
      note: "",
      steps: [],
    },
    {
      id: 23,
      name: "Crispy Chicken",
      category: "meal",
      image: data.crispychicken.childImageSharp.fluid,
      ingredients: [],
      note: "Need to ask mom",
      steps: [],
    }
  ]

  const categories = ["all", "dessert", "drink", "meal", "snack"]
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDish, setSelectedDish] = useState(null)

  // Filter dishes based on selected category
  const filteredDishes =
    selectedCategory === "all"
      ? dishes
      : dishes.filter((dish) => dish.category === selectedCategory)

  // Focus modal when a dish is selected
  const modalRef = useRef(null)

  useEffect(() => {
    if (selectedDish && modalRef.current) {
      modalRef.current.focus()
    }
  }, [selectedDish])
      
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
          ref={modalRef}
          role="button"
          tabIndex={0}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setSelectedDish(null)
            }
          }}
        >
            <h2>{selectedDish.name}</h2>
            <p>
              <strong>Note:</strong>{" "}
              {selectedDish.note.startsWith("http") ? (
                <a
                  href={selectedDish.note}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {new URL(selectedDish.note).hostname}
                </a>
              ) : (
                <em>{selectedDish.note}</em>
              )}
            </p>

            {selectedDish.ingredients && selectedDish.ingredients.length > 0 && (
              <>
                <h4>Ingredients:</h4>
                <ul>
                  {selectedDish.ingredients.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {selectedDish.steps && selectedDish.steps.length > 0 && (
              <>
                <h4>Steps:</h4>
                <ol>
                  {selectedDish.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </>
            )}

            <button onClick={() => setSelectedDish(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Kitchen
