import { useDispatch, useSelector } from "react-redux"
import AddForm from "./AddForm";
import { deleteTodo } from "../features/todo/todoSlice";


export default function ToDo(){
    const todos = useSelector((state) => state.todos);
    console.log(todos)
    const dispatch=useDispatch();
    const clickHandler=(id)=>{
        console.log(id);
        dispatch(deleteTodo(id));
    }
    return(
        <>
        <h2>ToDo</h2>
        <ul>
            {todos.map((todo)=>(<li key={todo.id}> {todo.task}
            <button onClick={()=>clickHandler(todo.id)}>Delete</button>
            </li>))}
        </ul>
        <AddForm/>
        </>

    )
}