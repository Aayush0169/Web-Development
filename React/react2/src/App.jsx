import './App.css'
import Counter from './counter'
import { sumOfArr } from './helper'
import LikeBtn from './likeBtn'
import Lottery from './lottery'
import Form from './form'
import Comment from './comment'
import Counter2 from './Counter2'
import Jokes from './Jokes'

function App() {
  let winCondition=(ticket)=>{
    return sumOfArr(ticket)===15;
  }
  return (
    <div>
      <Jokes/>
    </div>
  )
}

export default App
