import React, { createContext, useState } from "react"

// The context is imported and used by individual components that need data
//EmployeeContext stores date used in application
export const EmployeeContext = createContext()

// This component allows other components to use the context data
export const EmployeeProvider = (props) => {
    //useState hook defines a variable that holds the state of the compnent and a function to update it
    const [employees, setEmployee] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees?_expand=locations")
        .then(res => res.json())
        .then(setEmployee)
    }
    //setEmployee puts the data from the api into the array of animals

    const addEmployee = employeeObj => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(getEmployees)
    }

    /*
        You return a context provider which has the
        `employees` state, `getemployees` function,
        and the `addemployee` function as keys. This
        allows any child elements to access them.
    */
    return (
        <EmployeeContext.Provider value={{
            employees, getEmployees, addEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )}