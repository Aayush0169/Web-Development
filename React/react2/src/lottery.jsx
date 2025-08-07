import { use, useState } from "react"
import './lottery.css'
import { generateTicket,sumOfArr } from "./helper"
import Ticket from "./Ticket";

export default function Lottery({n=3,winningSum=15}){

    let [ticket,setTicket]=useState(generateTicket(n));
    let isWinning=sumOfArr(ticket)==winningSum;

    let newTicket=()=>{
        setTicket(generateTicket(n));
    }
    return (
        <div>
             <h1>Try your luck here</h1>
             <div className="ticket">
                <Ticket ticket={ticket} />
            </div>  <br />
            <button onClick={newTicket}>Get a new ticket 🎟️ </button>   
            <h3>{isWinning&&"Congratulation you won 🥳 "}</h3>
        </div>
    )
}