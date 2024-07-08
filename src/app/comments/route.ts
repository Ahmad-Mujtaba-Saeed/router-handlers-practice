import { type NextRequest } from "next/server";
import { comments } from "./data";
export async function GET(request : NextRequest){
    const Searchparams = request.nextUrl.searchParams;
    const search = Searchparams.get("search");
    const filteredComments = search ?
    comments.filter(comment => comment.text.includes(search)) : 
    comments;
    return Response.json(filteredComments);
}

// GOTO Thunder Client to make GET request to this URL http://localhost:3000/comments

export async function POST(request : Request){
    const comment = await request.json();
    const NewComment = {
        id : comments.length + 1,
        text : comment.text
    }
    comments.push(NewComment);
    return new Response(JSON.stringify(comments),{
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    });
}

// GOTO Thunder Client to make POST request to this URL http://localhost:3000/comments 
// And send the body as JSON LIKE THIS
// {
//     "text":"New Comment"
// }



