import React, { createContext, useState } from "react"

// The context is imported and used by individual components that need data
//TypeContext stores date used in application
export const TypeContext = createContext()

//This componenet allows other componenets to use the context data
export const TypeProvider = (props) => {
    //useState hook defines a variable that holds the state of the compnent and a function to update it
    const [types, setTypes] = useState([])

    const getTypes = () => {
        return fetch("http://localhost:8088/types")
        .then(res => res.json())
        .then(setTypes)
    }   

    return (
        <TypeContext.Provider value={{
            types, getTypes
        }}>
            {props.children}
        </TypeContext.Provider>
    )}