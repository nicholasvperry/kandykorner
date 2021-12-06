import React from "react"
import "./Product.css"

//added class name of product in order to target each individual card
//Added {} and return() to card in order to make function

export const ProductCard = ({product}) =>{
    //added productClassName which removes any spaces(.split) then joins all words(.join) and then makes all letters lowercase(.toLowerCase)   
    const productClassName = product.name.split(" ").join("-").toLowerCase()
    return (
    <section className={`product ${productClassName}`} >
        <h3 className="productName">{product.name}</h3>
        <div className="productPrice">Price: ${product.price}</div>
        <div className="productType">Type: {product.type.name}</div>
        
    </section>
)}


//This is how the card would be without the class addition

// export const ProductCard = ({product}) => (
 
//  <section className={`product ${productClassName}`} >
//         <h3 className="productName">{product.name}</h3>
//         <div className="productPrice">Price: ${product.price}</div>
//         <div className="productType">Type: {product.types.name}</div>
        
//     </section>
// )