"use server"

export async function addStudent (formData) {
    const Mytitle = formData.get('title')
    const Myinstructions = formData.get('instructions')
    const Myingredients = formData.get('ingredients')
    const Myimage = formData.get('imageURL')

    
if (Mytitle.trim().length < 3) throw new Error("Title should not be less than 3 characters") 
if (Myinstructions.trim().length < 3) throw new Error("Title should not be less than 3 characters")
if (Myingredients.trim().length < 3) throw new Error("Title should not be less than 3 characters")
// if (Myimage.trim().length < 3) throw new Error("Title should not be less than 3 characters")
// return (
//     redirect("/")
// )
}
    