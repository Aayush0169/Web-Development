import { useState } from "react"
import CommentForm from "./commentForm";
import "./comment.css"

export default function Comment(){
    let [comments,setComments]=useState([{
        userName:"aayush",
        review:"very good",
        rating:5
    }]);
    
    let  addNewComment =(comment)=>{
        setComments((currComments)=>[...currComments,comment])
    }
    return(
        <div>
            <h2>ALl reviews: </h2>
            {comments.map((comment,idx)=>(
            <div className="comment">
                <span>{comment.review}</span> &nbsp;
                <span> Rating: {comment.rating}</span> <br />
                <span>@{comment.userName}</span>
            </div>
            ))}
            <CommentForm addNewComment={addNewComment}/>
        </div>
    )
}