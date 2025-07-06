import React, { useEffect, useRef, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/styles.scss"
import pinkpolka from "../images/pinkpolka.jpeg"

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
      greentea: file(relativePath: { eq: "greentea.jpg" }) {
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
      steps: ["used bibigo tteokbokki package but added extra sauce/spices (if you do not want to use prepackaged bibigo sauce at all just add more gochujang)", "boil water and add tteokbokki sauce ingredients", "add tteokbokki and cook for 5-10 mins until soft", "add fish cakes and cabbage, cook for another few mins", "top with scallions/green onions and jammy egg", "enjoy with side radish cake (pan-fried but came frozen from asian grocery mart!)"],
    },
    {
      id: 11,
      name: "Thick Tteokbokki",
      category: "meal",
      image: data.thicktteok.childImageSharp.fluid,
      ingredients: ["tteokbokki (rice cakes)", "tteokbokki sauce (1 tbsp gochujang, 3 tsp gochugaru, 1/2 tbsp soy sauce, 2 tsp sugar/honey, dash of black pepper, 1 clove minced garlic, 1 cup water + anchovy tablet/1 tsp dashi powder)", "fish cakes (i used fish balls)", "handful of chopped cabbage", "scallions/green onions for topping (i used korean leeks)", "jammy egg (6-7 mins boiled, premade day before is more convenient!)", "bean sprout side dish (boiled bean sprouts, 1 tbsp soy sauce, 1 tbsp sesame oil, sesame seeds, 2 tsps chicken bouillon/salt, green onions/scallions)"],
      note: "similar to the soupy tteokbokki but with 1 cup less water and cooked sauce longer for reduced sauce",
      steps: ["used bibigo tteokbokki package but added extra sauce/spice (if you do not want to use prepackaged bibigo sauce at all just add more gochujang)", "boil water and add tteokbokki sauce ingredients", "add tteokbokki and cook for 5-10 mins until soft", "add fish cakes and cabbage, cook for another few mins", "top with scallions/green onions and jammy egg", "enjoy with bean sprout side dish"],
    },
    {
      id: 12,
      name: "Iced Green Tea",
      category: "drink",
      image: data.greentea.childImageSharp.fluid,
      ingredients: ["kirkland ito en green tea bags (or any other brand)", "1 tsp coconut sugar/honey (optional)", "hot water", "ice"],
      note: "refreshing and full of antioxidants like egcg!",
      steps: ["boil water and steep green tea bags for 3-5 mins", "add coconut sugar/honey if you'd like", "add ice and enjoy!"],
    },
    {
      id: 13,
      name: "Japanese Potato Salad",
      category: "snack",
      image: data.potatosalad.childImageSharp.fluid,
      ingredients: ["2-3 medium russet potatoes", "half a carrot", "1 cucumber", "1/4 onion", "6 tbsp kewpie mayo", "1 tbsp rice vinegar", "1 tsp sugar/honey", "salt and pepper to taste", "optional: boiled egg, 2 slices ham, or 1/4 can of corn"],
      note: "https://www.justonecookbook.com/japanese-potato-salad/",
      steps: ["peel and chop potatoes into small cubes, boil in salted water until soft (10-15 mins)", "while potatoes are boiling, chop cucumber, onion, carrot, ham/egg", "once potatoes are done, drain, mash them in a bowl, let them cool", "add chopped meat & veggies to the bowl and boil/microwave carrots for a few minutes", "mix kewpie mayo, rice vinegar, sugar/honey, salt, and pepper in a separate bowl", "mix dressing with the bowl of cooled potatoes, veges, and meat", "chill in the fridge for 30 mins before serving"],
    },
    {
      id: 14,
      name: "Spicy Miso Ramen",
      category: "meal",
      image: data.spicymiso.childImageSharp.fluid,
      ingredients: [],
      note: "https://www.justonecookbook.com/homemade-chashu-miso-ramen/",
      steps: ["follow recipe above, i used ground pork, mung bean noodles, and added a soft-boiled egg, scallions, and nori on top", "i used more doubanjiang to make it more spicy and instead of chicken stock i used dashi stock (dashi powder + water)", "add toppings of your choice like corn, kimchi, bamboo shoots, or bean sprouts"],
    },
    {
      id: 15,
      name: "Pesto Arugula Pasta and Salmon",
      category: "meal",
      image: data.pestopasta.childImageSharp.fluid,
      ingredients: ["2 tbsp trader joe's pesto", "1/3 cup onion", "1/2 cup arugula", "1/3 cup sliced cherry or diced roma tomatoes", "however much cooked pasta", "1 salmon fillet (1 sprig each of rosemary & thyme)", "salt and pepper to taste", "olive oil for cooking", "1 tbsp kerrygold butter (optional)", "2 tsp tomato paste (optional)"],
      note: "kerrygold butter is the best for this recipe!",
      steps: ["cook pasta according to package instructions", "while pasta is cooking, heat olive oil in a pan and cook salmon fillet with rosemary and thyme until cooked through (about 5-7 mins on each side)", "remove salmon from pan and set aside", "in the same pan, add butter, then sauté onions and tomatoes until translucent", "add pesto and can also add 2 tsp of tomato paste if you'd like here", "add arugula, cook for another 1-3 mins until arugula is wilted", "add cooked pasta to the pan, mix well", "season with salt and pepper to taste", "serve pasta topped with salmon"],
    },
    {
      id: 16,
      name: "Black Pepper Beef Udon",
      category: "meal",
      image: data.blackpep.childImageSharp.fluid,
      ingredients: ["black pepper sauce (follow tiffy cook's recipe)", "sliced beef", "frozen udon noodles", "1/3 cup canned corn", "green onions/cilantro for garnishing", "handful of sliced onions"],
      note: "https://tiffycooks.com/taiwanese-black-pepper-steak-sauce-nightmarket-style/",
      steps: ["follow recipe above to make black pepper sauce", "cook sliced onions in a pan with oil until translucent", "add sliced beef and cook until browned", "add black pepper sauce and simmer for a few mins", "cook frozen udon noodles according to package instructions (should be short that is why no need to cook it earlier)", "add cooked udon noodles to the pan, mix well", "top with corn, green onions, or cilantro if you'd like"],
    },
    {
      id: 17,
      name: "BLT and Sweet Potato Fries",
      category: "meal",
      image: data.blt.childImageSharp.fluid,
      ingredients: ["bacon", "romaine lettuce", "tomato", "bread (i used whole wheat but sourdough is yummy as well)", "fried egg, pickles, or pickled carrots (optional)", "sweet potatoes", "olive oil", "salt and pepper to taste", "optional: mayo, dijon mustard, or pesto for the sandwich sauce"],
      note: "very versatile recipe, you can add whatever toppings you like to the sandwich",
      steps: ["cook bacon in an airfryer or pan until crispy, set aside", "toast bread in the same pan with bacon grease or in a toaster", "slice tomato and wash romaine lettuce", "assemble sandwich with bacon, lettuce, tomato, and any other toppings you like (fried egg, pickles, or pickled carrots)", "for sweet potato fries, start boiling water in a pot", "cut sweet potatoes into thin strips, toss with olive oil, garlic salt, paprika, and pepper", "parboil for several minutes until slightly fork tender", "spread on a fryer sheet and airfry on 375-400F for 20-25 mins until crispy", "enjoy your BLT with sweet potato fries on the side"],
    },
    {
      id: 18,
      name: "Berry Pink Smoothie",
      category: "drink",
      image: data.smoothie.childImageSharp.fluid,
      ingredients: ["1/2 cup frozen strawberries", "1/2 cup frozen raspberries", "1 cup or more almond milk (or any milk of your choice)", "1 tsp vanilla extract", "1 tsp almond extract", "3 tsp honey (optional)", "1 tbsp collagen powder (optional)", "a bit of water if too thick"],
      note: "did you get the pun",
      steps: ["add frozen strawberries, raspberries, almond milk, vanilla extract, almond extract, honey, and collagen powder to a blender", "blend until smooth, adding a bit of water if too thick", "pour into a glass and enjoy!"],
    },
    {
      id: 19,
      name: "Japanese Flan",
      category: "dessert",
      image: data.flan.childImageSharp.fluid,
      ingredients: [],
      note: "https://www.justonecookbook.com/custard-pudding/",
      steps: ["follow recipe above exactly! i did use half the amount of sugar for caramel sauce"],
    },
    {
      id: 20,
      name: "Chive & Eggs with Sweet Potato",
      category: "meal",
      image: data.eggchives.childImageSharp.fluid,
      ingredients: ["1 bunch of chinese chives", "2-3 eggs", "1 tbsp mirin", "1/2 tsp chicken bouillon/salt", "1-3 tsp white pepper (i prefer higher end)", "1 tbsp oil", "1 sweet potato (optional)"],
      note: "https://thewoksoflife.com/chinese-chives-eggs/",
      steps: ["wash and chop chives into 1-2 inch pieces", "beat eggs in a bowl, season with chicken bouillon/salt and white pepper", "heat oil in a pan over medium heat", "add chives and stir-fry with dash of mirin for 4-6 mins until slightly wilted", "pour beaten eggs into the pan, cook until eggs are set but still soft (about 2-3 mins)", "for sweet potato, peel (optional) and chop into chunks, boil in salted water until tender (10-15 mins), then pan-fry or airfry with a bit of oil until crispy on the outside", "serve chive and eggs with sweet potato on the side"],
    },
    {
      id: 21,
      name: "Rosemary & Thyme Steak",
      category: "meal",
      image: data.perfsteak.childImageSharp.fluid,
      ingredients: ["1 steak (ribeye or sirloin)", "1-3 tbsp kerrygold butter", "1 tsp salt", "1 tsp pepper", "1 sprig of rosemary", "1 sprig of thyme", "2 cloves garlic (optional)"],
      note: "the perfect steak recipe!",
      steps: ["let steak sit at room temperature for 10-15 mins before cooking", "season both sides of the steak with salt and pepper", "heat a cast iron skillet or pan over high heat until very hot", "add kerrygold butter, rosemary, thyme, and garlic to the pan", "once butter is melted and sizzling, add the steak to the pan", "cook for 3-4 mins on each side for medium-rare (adjust time based on thickness and doneness that you prefer)", "baste the steak with the melted butter and herbs while cooking", "remove from heat and let rest for 5 mins before slicing"],
    },
    {
      id: 22,
      name: "Ham Sandwich and Dill Pickles",
      category: "meal",
      image: data.hamsandwich.childImageSharp.fluid,
      ingredients: ["2 slices of bread", "1-2 slices of ham", "1 slice of cheese (optional)", "1-2 leaves of lettuce", "1-2 slices of tomato", "dill pickles (or any pickles you like)", "2 tsp mayonnaise, 1 tsp dijon mustard, 2 tsp pesto for the sauce (not optional)"],
      note: "anything can be in this sandwich! the sauce is what matters",
      steps: ["spread mayonnaise, dijon mustard, and pesto on one side of each slice of bread", "layer ham, cheese, lettuce, and tomato on one slice of bread", "top with the other slice of bread", "cut sandwich in half and serve with dill pickles on the side", "enjoy your ham sandwich with a refreshing crunch from the pickles"],
    },
    {
      id: 23,
      name: "Crispy Chicken",
      category: "meal",
      image: data.crispychicken.childImageSharp.fluid,
      ingredients: [],
      note: "Need to ask mom",
      steps: [],
    },
    {
      id: 24,
      name: "Pizza Toast",
      category: "snack",
      image: data.pizzatoast.childImageSharp.fluid,
      ingredients: ["fluffy bread from asian bakery (i went to J.J. Bakery)", "marinara or tomato sauce", "mozzarella cheese", "pepperoni or any toppings you like", "olive oil", "oregano, garlic powder, and red pepper flakes for seasoning"],
      note: "simple but tasty! i believe this is a popular snack in japan",
      steps: ["use toaster to toast the bread a bit before we add toppings (toast on lowest setting)", "spread marinara sauce on top of the bread", "add mozzarella cheese and any toppings you like (pepperoni, veggies, etc.)", "drizzle with olive oil and sprinkle oregano, garlic salt, and red pepper flakes on top", "airfry until cheese is melted and bubbly (about 5-7 mins at 375F)", "slice and enjoy your pizza toast!"],
    },
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

    <section
      className="kitchen-bg"
      style={{
        background: `url(${pinkpolka}) repeat`,
        backgroundSize: "260px 490px",
      }}
    >
    <section className="kitchen">
    <h3>
      a kitchen journal{" "}
      <span role="img" aria-label="flan">
        🍮
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
    </section>
  )
}

export default Kitchen
