import React from "react"
import "./Product.css"
import { Navigate, useNavigate } from "react-router"
import { useContext } from "react/cjs/react.development"
import { ProductContext } from "./ProductProvider"
import Swal from 'sweetalert2';



//added class name of product in order to target each individual card
//Added {} and return() to card in order to make function

export const ProductCard = ({product}) =>{
    const {deleteProduct} = useContext(ProductContext)
    const navigate = useNavigate()
    
    //added productClassName which removes any spaces(.split) then joins all words(.join) and then makes all letters lowercase(.toLowerCase)  
    const productClassName = product.name.split(" ").join("-").toLowerCase()

    

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to undelete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              ).then(deleteProduct(product.id).then(() => {
            navigate("/products")
          }))
            }
          })
          
      }

    return (
    <section className={`product ${productClassName}`} >
        <h3 className="productName">{product.name}</h3>
        <div className="productPrice">Price: ${product.price}</div>
        <div className="productType">Type: {product.type.name}</div>
        <button onClick={() => {
          navigate(`/products/edit/${product.id}`)}}>Edit</button>
       <button onClick={handleDelete}>Delete Product</button>   
       <button >Purchase</button>   
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