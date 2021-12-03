import React, { createContext, useState } from "react"

// The context is imported and used by individual components that need data
//ProductContext stores date used in application
export const ProductContext = createContext()

// This component allows other components to use the context data
export const ProductProvider = (props) => {
    //useState hook defines a variable that holds the state of the compnent and a function to update it
    const [products, setProducts] = useState([])

    //we need to expand this fetch to allow for the product type
    const getProducts = () => {
        return fetch("http://localhost:8088/products?_expand=types")
        .then(res => res.json())
        .then(setProducts)
    }
//setProducts puts the data from the api into the array of animals
    const addProduct = productObj => {
        return fetch("http://localhost:8088/product", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productObj)
        })
        .then(getProducts)
    }

        /*
        You return a context provider which has the
        `products` state, `getproducts` function,
        and the `addproduct` function as keys. This
        allows any child elements to access them.
    */
    return (
        <ProductContext.Provider value={{
            products, getProducts, addProduct
        }}>
            {props.children}
        </ProductContext.Provider>
    )}