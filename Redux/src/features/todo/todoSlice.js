import {createSlice,nanoid} from '@reduxjs/toolkit'


const initialState={
    todos:[{id:"abc",task:"demo-task",isDone: false}]
};

export const todoSLice=createSlice({
    name: "todo",
    initialState,
    reducers:{

        addTodo:(state,action)=>{
            const newTOdo={
                id:nanoid(),
                task:action.payload,
                isDone:false
            }
            state.todos.push(newTOdo);
        },

        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>{todo.id!=action.payload})
        },

        markAsDone: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
               todo.isDone = true;
                 }
             }
    }
});

export const{addTodo,deleteTodo,markAsDone}=todoSLice.actions;
export default todoSLice.reducer;