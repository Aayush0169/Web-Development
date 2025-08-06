import { useState } from "react";

export default function LikeBtn(){
    let [isLike,updateLike]=useState(false);
    let liked=()=>{
      updateLike(!isLike) 
    }
    let likeColor={color:"red"}
    return <div>
        <br />
        <span onClick={liked}>Click me to Like:  </span> 
        {isLike?(
            <i style={likeColor} className="fa-solid fa-heart"></i>
        ):(
            <i className="fa-solid fa-heart"></i>
        )
        }
        
    </div>
}