import React from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftSquare } from 'lucide-react'

const getRecipes = async () => {
  // "use cache"
  const response = await fetch  ("http://localhost:3001/api/recipes")
  if (!response.ok) {
    throw new Error ("Failed to fetch")
  }
  return response.json()
}

export default async function IdPage({params}) {
    
    const {id} = await params

    const data = await getRecipes()

    const recipe = data.recipesList?.find(
        (item) => String(item.id) === String(id)
    )
    if (!recipe) {
        notFound()
    }
  return (
    <main className="max-w-3xl mx-auto px-5 py-10 bg-black text-white">
      <Link href='/' className='text-slate-400 hover:underline flex'> <ArrowLeftSquare /> Back to Recipes</Link>

      <h1 className='flex justify-center text-2xl py-2 font-bold'>{recipe.title}</h1>

      <div className='flex justify-center mb-8'>
        <Image src={recipe.image} alt={recipe.title} width={200} height={100} className='rounded-2xl object-cover' />
      </div>

      <section className='mb-6'>
        <h2>Ingredients</h2>
        <p>{recipe.ingredients}</p>
      </section>
      
      <section className='mb-6'>
        <h2>Instructions</h2>
        <p>{recipe.instructions}</p>
      </section>
    </main>
  )
}
