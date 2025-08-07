
import './App.css'
import Counter from './counter'
import LikeBtn from './likeBtn'
import Lottery from './lottery'




function App() {
  return (
    <div>
      <Lottery n={4} winningSum={16}/>
    </div>
  )
}

export default App
