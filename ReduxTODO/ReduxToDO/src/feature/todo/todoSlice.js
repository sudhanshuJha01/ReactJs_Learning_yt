import {ReducerType, creatSlice , nanoid }from '@reduxjs/toolkit';

export const todoSlice = creatSlice({
    name:'sudhanshu Jha',
    initialState:()=>{
        todos: [{id:nonaid(),text:'First todo',completed:false}]
    },
    reducers:{
        addTodo:(state,action)=>{
           const todo = [{
            id : nanoid(),
            text: action.payload
        } ]
        state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!=action.payload)
        }

    }
});

export const {addTodo,removeTodo} = todoSlice.actions;

export default todoSlice.reducer;