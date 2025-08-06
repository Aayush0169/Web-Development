
import './App.css'
import Counter from './counter'
import LikeBtn from './likeBtn'

function doSomething(){
  console.log("clicked")
}
function App() {
  return (
    <div>
      <h2>React States</h2>
      <Counter/>
      <LikeBtn/>

    </div>
  )
}

export default App
