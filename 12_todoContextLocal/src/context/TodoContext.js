import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            title: "Learn React",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updatedTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext);
}

// export const TodoProvider1 = ({ children, value }) => {
//     return (
//         <TodoContext.Provider value={value}>
//             {children}
//         </TodoContext.Provider>
//     );
// };

export const TodoProvider = TodoContext.Provider;

// what is the difference between TodoProvider1 and TodoProvider2
// TodoProvider1 is a custom provider that takes children and value as props
// TodoProvider2 is the default provider from the context API
// TodoProvider1 is used to provide a value to the context
// TodoProvider2 is used to provide a value to the context without any additional logic 


