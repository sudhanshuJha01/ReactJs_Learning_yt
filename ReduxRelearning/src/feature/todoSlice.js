import { createSlice , nanoid} from '@reduxjs/toolkit'

const intialState ={
    todo:[{id:1 , text:"Working in the home"}]
}

const todoSlice = createSlice({
    name:todo,
    intialState,
    reducers:{
        addTodo:(state , action)=>{
            const todo ={
                id:nanoid(),
                text:action.payload.text
            }
            state.todos.push(todo);
            
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>id=action.payload.id)
            
        }
    }
})

export const {addTodo , removeTodo} = todoSlice.actions;
export default todoSlice.reducer