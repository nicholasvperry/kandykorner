import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ProductContext } from "./ProductProvider";
import { TypeContext } from "./TypesProvider";
import Swal from 'sweetalert2';



export const ProductForm = () => {
    const {addProduct} = useContext(ProductContext)
    const {types, getTypes} = useContext(TypeContext)
    const navigate = useNavigate()

    //product is state
    //useProduct sets initial value
    //setProduct is how we change the value of the object
    const [product, setProduct] = useState({
      name: "",
      price: 0,
      typeId: 0 
    })

    //get types for our form
    useEffect(() => {
        getTypes()
    }, [])


    //make a copy of state to manipulate
    const handleControlledInputChange = (event) => {
        //...product make a copy of current state
        const newProduct = {...product}
    
        //Change copy. ID tells which property to change
        newProduct[event.target.id] = event.target.value

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

        if (product.name === "") {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Please add product name!',
              position: `center`
            })
          } else {
          //invoke addEmployee passing employee as an argument.
          //once complete, change the url and display the employee list
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
              title: 'You have saved your new product!'
            })

        addProduct(product)
        .then(() =>navigate("/products"))
    }
}


    return (
    <form className="productForm">
    <h2 className="productFormTitle">New product</h2>
    <fieldset>
        <div className="form-group">
        <label htmlFor="name">Product name:</label>
        <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Product name" />
        </div>
    </fieldset> 
    <fieldset>
        <div className="form-group">
        <label htmlFor="price">Price: $</label>
        <input type="number" id="price" onChange={handleControlledInputChange} required className="form-control" placeholder="Price" />
        </div>
    </fieldset> 

    <fieldset>
        <div className="form-group">
            <label htmlFor="type">Select a type: </label>
                <select onChange={handleControlledInputChange} defaultValue={product.typeId} name="typeId" id="typeId" className="form-control" >
                    <option type="number" value="0">Types</option>
                      {types.map(t => (
                          <option key={t.id} value={t.id}>
                              {t.name}
                    </option>
                      ))}
                </select>
        </div>
    </fieldset>

       

  <button className="btn btn-primary"
    onClick={handleClickSaveProduct}>
    Save Product
  </button>
</form>
    )

}