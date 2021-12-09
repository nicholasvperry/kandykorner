import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ProductContext } from "./ProductProvider";
import { TypeContext } from "./TypesProvider";
import Swal from 'sweetalert2';



export const ProductForm = () => {
    const {addProduct, updateProduct, getProductById, getProducts} = useContext(ProductContext)
    const {types, getTypes} = useContext(TypeContext)
    const navigate = useNavigate()

    //product is state
    //useProduct sets initial value
    //setProduct is how we change the value of the object
    const [product, setProduct] = useState({
      name: "",
      price: "",
      typeId: 0 
    })

    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const {productId} = useParams()



    //get types for our form
    useEffect(() => {
        getTypes()
    }, [])


    //make a copy of state to manipulate
    const handleControlledInputChange = (event) => {
        //...product make a copy of current state
        const newProduct = {...product}
    
        //Change copy. name tells which property to change
        newProduct[event.target.name] = event.target.value

        //update corrent copy state
        setProduct(newProduct)

        
    }
    
    const handleClickSaveProduct = (event) => {
        //Prevent the browser from submitting the form
        event.preventDefault() 

        //Pull foreign keys from form to save in json
        const typeId = parseInt(product.typeId)
        product.typeId = typeId

        const price = parseFloat(product.price)
        product.price = price
        
        //Using swal make windows pop up if input is empty
        if (product.name === "") {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Please add product name!',
              position: `center`
            })
            
          } else if (parseFloat(product.price) === 0) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Please add product price!',
              position: `center`
            })
            
          } else if (parseInt(product.typeId) === 0) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Please add product type!',
              position: `center`
            })
            
          } 
          
          else {
          //invoke addEmployee passing employee as an argument.
          //once complete, change the url and display the employee list
          //disable the button - no extra clicks
        setIsLoading(true);
        
       
        if (productId){
          //PUT - update
          updateProduct({
              id: product.id,
              name: product.name,
              price: product.price,
              typeId: product.typeId
            })
            .then(() => navigate(`/products/detail/${product.id}`))
          }else {
            //POST - add
            addProduct({
                name: product.name,
                price: product.price,
                typeId: product.typeId
            })
            .then(() => navigate("/products"))
          }

          const Toast = Swal.mixin({
              toast: true,
              position: 'center',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: false,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })         
             
            Toast.fire({
              icon: 'success',
              title: 'You have saved your product!'
            })
    }
    }

    // Get products. If productId is in the URL, getProductById
    useEffect(() => {
      getProducts().then(() => {
        if (productId){
          getProductById(productId)
          .then(product => {
              setProduct(product)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])

    return (
    <form className="productForm">
    <h2 className="productFormTitle">{productId ? "Edit product" : "New product"}</h2>
    <fieldset>
        <div className="form-group">
        <label htmlFor="productName">Product name:</label>
        <input type="text" id="name" name="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Product name" defaultValue={product.name}/>
        </div>
    </fieldset> 
    <fieldset>
        <div className="form-group">
        <label htmlFor="price">Price: $</label>
        <input type="number" id="price" name="price" onChange={handleControlledInputChange} required className="form-control" placeholder="Price" defaultValue={product.price}/>
        </div>
    </fieldset> 

    <fieldset>
        <div className="form-group">
            <label htmlFor="type">Select a type: </label>
                <select onChange={handleControlledInputChange} value={product.typeId} name="typeId" id="typeId" className="form-control" >
                    <option type="number" >Types</option>
                      {types.map(t => (
                          <option key={t.id} value={t.id} >
                              {t.name}
                    </option>
                      ))}
                </select>
        </div>
    </fieldset>

       

  <button className="btn btn-primary"
    onClick={handleClickSaveProduct}>
    {productId ? "Edit product" : "Save product"}
  </button>
</form>
    )

}