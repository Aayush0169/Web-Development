
import './App.css'
import Counter from './counter'
import { sumOfArr } from './helper'
import LikeBtn from './likeBtn'
import Lottery from './lottery'
import Ticket from './Ticket'


function App() {
  let winCondition=(ticket)=>{
    return sumOfArr(ticket)===15;
  }
  return (
    <div>
      <Lottery n={4}winCondition={winCondition}/>
    </div>
  )
}

export default App
