import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id: "1",
            todo: "message",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    editTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const TodoContextProvider = TodoContext.Provider

export const useTodo = () =>{
    return useContext(TodoContext)
} 