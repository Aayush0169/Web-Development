import { use, useEffect, useState } from "react";

export default function Jokes(){
    const url="https://official-joke-api.appspot.com/random_joke";
    let [joke,setJoke]=useState({});

    const getJoke=async ()=>{
        let result= await fetch(url);
        let jsonResult=await result.json();
        setJoke({setup: jsonResult.setup , punchline: jsonResult.punchline});
    }

    useEffect(()=>{
        async function getNewJoke(){
        let result= await fetch(url);
        let jsonResult=await result.json();
        setJoke({setup: jsonResult.setup , punchline: jsonResult.punchline});
        }
        getNewJoke();
    },
    []
)

return(
    <div>
        <h3>Joke:</h3>
        <p>{joke.setup}</p>
        <p>{joke.punchline}</p>
        <button onClick={getJoke}>Get a new Joke😁</button>
    </div>
)

}