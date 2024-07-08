export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { comments } from "../data";
import { headers , cookies } from "next/headers";



export async function GET(_request: Request, {params}:{params: {id : string}}){
    if(parseInt(params.id) > comments.length){
        redirect('/comments');
    }
    cookies().set("Email","ahamdmujtabap70@gmail.com");
    console.log(cookies().get("Email"));
    const headerList = headers();
    if(headerList.get("Authentication") == "Bearer 1342456"){
        redirect('/comments');
    }
    const comment = comments.find(comment => comment.id == parseInt(params.id))
    return Response.json(comment);
}
//http://localhost:3000/comments/2 get request to this url





export async function PATCH(request: Request, {params}:{params: {id : string}}){
    const body = await request.json();
    const {text} = body;
    const index = comments.findIndex(comment => comment.id === parseInt(params.id));
    comments[index].text = text;
    return Response.json(comments[index]);
} 
// http://localhost:3000/comments/2 patch request to this URL with body contains updated comment text 




export async function DELETE(_request: Request, {params}:{params: {id : string}}){
    const index = comments.findIndex(comment => comment.id === parseInt(params.id));
    const DELETEComment = comments[index]
    comments.splice(index, 1)
    return Response.json(DELETEComment);
} 
// http://localhost:3000/comments/2 to delete comment