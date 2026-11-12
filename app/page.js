import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchInput from "../components/Search.jsx"

// import { recipeList } from "./api/recipes/route";


const getRecipes = async () => {
  // "use cache"
  const response = await fetch  ("http://localhost:3001/api/recipes")
  if (!response.ok) {
    throw new Error ("Failed to fetch")
  }
  return response.json()
}


export default async function Home() {
  

  const data = await getRecipes()
  return (
    <div className= 'bg-white text-black'>
      <h1 className="text-3xl flex justify-center mt-5">Recipes</h1>

      <div >

        {/* <div className="flex relative my-3 justify-center gap-5">
          <Search className="absolute lg:left-82 md:left-70 left-7.5 top-3 pointer-events-none " />
          <input
            type="text"
            className="border border-slate-300 pl-10 py-2.5 mx-5 lg:w-[50%] w-full rounded-xl  outline-none"
            placeholder="Search recipes" 
          />
        </div> */}

        <div className="flex lg:justify-end md:justify-center justify-center mb-2.5">
          <Link href='/recipes/new' className="border p-2.5 mr-5 rounded-xl bg-slate-800 text-white mb-2">Create your own Recipe</Link>
        </div>

      </div>
      
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-fit gap-10 items-center mx-5">
        {data.recipesList.map ((pick) => (
        <div key={pick.id} className="object-cover shadow-lg rounded-3xl p-2.5 items-center h-120">
          <div className="flex justify-center items-center">
            <Image src={pick.image} alt="image" width={220} height={50} />
          </div>
          
          <h2 className="font-semibold text-center text-xl">{pick.title}</h2>
          <p className="space-x-5 text-center"><span className="font-semibold">Ingredients:</span> {pick.ingredients}</p>
          <p className="text-center"> <span className="font-semibold">Instructions:</span> {pick.instructions}</p>
        </div>
      ) ) }
      </div>
       */}

       <SearchInput recipes={data.recipesList ?? []} />
    </div>
  );
}
