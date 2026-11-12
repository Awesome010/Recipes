const recipesList = [
  {
    id: 1,
    title: "Pancakes",
    image: "/pancakes.jpg",
    ingredients: ["Flour,", " Milk,", " Eggs"],
    instructions: "Mix the ingredients and cook in a pan.",
  },
  {
    id: 2,
    title: "Omelette",
    image: "/omelette.jpg",
    ingredients: ["Eggs,", " Cheese,", " Butter"],
    instructions: "Whisk the eggs, add cheese, and cook in a pan.",
  },
  {
    id: 3,
    title: "Salad",
    image: "/salad.jpg",
    ingredients: ["Lettuce,", " Tomato,", " Cucumber"],
    instructions: "Chop the vegetables and mix them together.",
  },
  {
    id: 4,
    title: "Pasta",
    image: "/pasta.jpg",
    ingredients: ["Pasta,", " Tomato Sauce,", " Garlic"],
    instructions: "Cook the pasta and mix it with the sauce.",
  },
  {
    id: 5,
    title: "Soup",
    image: "/soup.jpg",
    ingredients: ["Carrots,", " Potatoes,", " Onions"],
    instructions: "Chop the vegetables and simmer them in broth.",
  },
  {
    id: 6,
    title: "Burger",
    image: "/burger.jpg",
    ingredients: ["Bun,", " Meat,", " Lettuce,", " Tomato,", " Onion"],
    instructions: "Assemble the burger with the ingredients.",
  }
];

export async function GET () {
return Response.json ({recipesList})
}

// const searchRecipes = recipesList.filter((item) => {
//   return item.title.toLowerCase().includes(query.toLowerCase())
// } )