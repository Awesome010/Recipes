import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function POST (request) {
    const body = await request.json()

    if (!body.title || !body.instructions || !body.ingredients) {
        return Response.json(
            {message: "Title, instructions or ingredients is missing"},
            {status: 400},
        )
    }

    if (typeof body.imageURL!== "string") {
        return Response.json (
            {message: "The image must be uploaded with a URL link"},
            {status: 400}
        )
    }
    // if (typeof body.ingredients!== "object") {
    //     return Response.json (
    //         {message: "The image must be uploaded with a URL link"},
    //         {status: 400}
    //     )
    // }

    return Response.json(
        {message: "Recipe added successfully",
            user: body
        },
       {status: 201},
    //    redirect("/"),
    //    revalidatePath("/")
    )
}