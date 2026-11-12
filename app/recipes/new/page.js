"use client"
import Image from 'next/image'
import React, {useState, useEffect} from 'react'

const API_URL = "http:localhost:3001/api/recipes"

export default function AddRecipePage() {

  const [recipe, setRecipe] = useState(
    {
      title: "",
      ingredients: "",
      instructions: "",
      imageURL: "",
    }
  )

  const [loading, setLoading] = useState (false)
  // const [recipes, setRecipes] = useState([])
  // const [fetching, setFetching] = useState (true)
  // const [error, setError] = useState("")

  //to update the form fields
  const handleChange = (e) => {
    setRecipe ({
      ...recipe, [e.target.name]: e.target.value,
    })
  }

  //submit the recipe
  const newRecipe = async (e) => {
    e.preventDefault()

    try{
      setLoading(true)
    const response = await fetch ("http://localhost:3001/api/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(recipe)
    })

    if (!response.ok) {
    throw new Error ("Failed to fetch")
  }
   const data = await response.json()
   //to display the new recipe on the page
   setRecipes((prevRecipes) => [
    data, ...prevRecipes 
   ])
    console.log ("Recipe added successfully", data)
    
    alert ("Recipe added successfully!")

    //clear the form
    setRecipe(
      {
      title: "",
      ingredients: "",
      instructions: "",
      imageURL: "",
    }
    )
  } catch (error) {
    console.error("Error adding recipe", error),
    alert("Failed to add recipe. Check your API route and try again.")
  } finally {
    setLoading(false)
  } }
  
    
  

  return (
    <div>
      <h1 className='text-2xl text-center mt-5'>Add a Recipe</h1>
      <p className='text-xl text-center mb-2.5'>You can add your own recipe here</p>

      <form className='flex flex-col gap-5 my-5 justify-center items-center' onSubmit={newRecipe}>
        {/* <label>Recipe Title</label> <br/> */}
        <input placeholder='Enter your recipe title' className='border p-2.5 rounded-xl w-[75%]' name='title' value={recipe.title} onChange={handleChange} required />

        {/* <label>Ingredients</label>  */}
        <textarea placeholder='Enter your preferred ingredients' className='border p-2.5 rounded-xl w-[75%]' name='ingredients' value={recipe.ingredients} onChange={handleChange} required />

        {/* <label>Instructions</label> <br/> */}
        <textarea placeholder='Enter the instructions' className='border p-2.5 rounded-xl w-[75%]' name='instructions' value={recipe.instructions} onChange={handleChange} required />

        {/* <label>Image URL</label> <br/> */}
        <input placeholder='Upload the image URL here' className='border p-2.5 rounded-xl w-[75%]' type='url' name='imageURL' value={recipe.imageURL} onChange={handleChange} required />

        <div className='flex justify-end'>
        <button disabled={loading} type='submit' className='p-2.5 bg-slate-700 text-white rounded-xl'> {loading ? "Adding Recipe" : "Submit Form"} </button>
      </div>
      </form>

      {/* <section className="mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          My Recipes
        </h2>

        {recipes.length === 0 ? (
          <p className="text-center text-gray-500">
            No recipes added yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((item, index) => (
              <div
                key={item.id ?? item._id ?? index}
                className="border rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={item.imageUrl}
                  alt='title' width={50} height={50}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <h4 className="font-semibold">
                    Ingredients
                  </h4>
                  <p className="mb-3 whitespace-pre-line">
                    {Array.isArray(item.ingredients)
                      ? item.ingredients.join(", ")
                      : item.ingredients}
                  </p>

                  <h4 className="font-semibold">
                    Instructions
                  </h4>
                  <p className="whitespace-pre-line">
                    {item.instructions}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section> */}
      
      
    </div>
  )
}
