"use client";
import { React, useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SearchInput({ recipes }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const searchT = searchTerm.toLowerCase();

    return (
      recipe.title?.toLowerCase().includes(searchT) ||
      recipe.ingredients?.toString().toLowerCase().includes(searchT)
    );
  });

  return (
    <div className="bg-white text-black">
      <div className="flex relative my-3 justify-center gap-5">
        <Search className="absolute lg:left-82 md:left-70 left-7.5 top-3 pointer-events-none " />
        <input
          type="text"
          className="border border-slate-800 pl-10 py-2.5 mx-5 lg:w-[50%] w-full rounded-xl  outline-none"
          placeholder="Search recipes"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredRecipes.length === 0 ? (
        <p>No recipes found. Try another search</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-fit gap-10 items-center mx-5">
          {filteredRecipes.map((pick) => (
            <Link key={pick.id} href={`/recipes/${pick.id}`} className="hover:scale-105 transition-transform duration-300"> 
            <div className="object-cover shadow-lg rounded-3xl p-2.5 items-center h-120"
            >
              <div className="flex justify-center items-center">
                <Image src={pick.image} alt="image" width={220} height={50} />
              </div>

              <h2 className="font-semibold text-center text-xl">
                {pick.title}
              </h2>
              <p className="space-x-5 text-center">
                <span className="font-semibold">Ingredients:</span>{" "}
                {pick.ingredients}
              </p>
              <p className="text-center">
                {" "}
                <span className="font-semibold">Instructions:</span>{" "}
                {pick.instructions}
              </p>
            </div>
            </Link>
          ))}
        </div>
            
      )}
    </div>
  );
}
