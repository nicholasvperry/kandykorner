import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./ProductCard"
import "./Product.css"

// The context is imported and used by individual components that need data
//AnimalContext stores date used in application
export const ProductList = () => {
    // This state changes when `getProducts()` is invoked below
    const { products, getProducts } = useContext(ProductContext)
    const navigate = useNavigate()
      
    //useEffect - reach out to the world for something.
    //In this case it is reaching out to the api call for products
    useEffect(() => {
      console.log("ProductList: useEffect - getProducts")
      getProducts()
  
    }, [])
  
  
    return (
        <>
        <h2>Products</h2>
    <button onClick={() => {navigate("create")}}>
            Add Product
        </button>
        <div className="products">
        {
          <div className="products">
    {console.log("ProductList: Render", products)}
    {
      products.map(productObj => {
      
        
        //return
        return <ProductCard key={productObj.id}
        
        product={productObj} />
      })
    }
  </div>
        }
        </div>
    </>
    )
  }