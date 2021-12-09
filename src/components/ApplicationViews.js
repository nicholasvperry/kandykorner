import React from "react"
import { Route, Routes } from "react-router-dom"
import { EmployeeProvider } from "./Employees/EmployeeProvider"
import { Home } from "./Home"
import {LocationList} from "./Locations/LocationList"
import {LocationProvider} from "./Locations/LocationProvider"
import { LocationForm } from "./Locations/LocationForm"
import { ProductList } from "./Products/ProductList"
import { ProductProvider } from "./Products/ProductProvider"
import { EmployeeList } from "./Employees/EmployeeList"
import { EmployeeForm } from "./Employees/EmployeeForm"
import { ProductForm } from "./Products/ProductForm"
import { TypeProvider } from "./Products/TypesProvider"
import { LocationDetail } from "./Locations/LocationDetail"

export const ApplicationViews = () => {
    return (
        <LocationProvider>
        <ProductProvider>
        <EmployeeProvider>
        <TypeProvider>
        <Routes>
            {/* Render the home page when http://localhost:3000/ */}
            <Route exact path="/" element={<Home />} />

            {/* Location list render when http://localhost:3000/locations */}
            <Route exact path="locations/*" element={ <LocationList />} />

            {/* location details card */}
            <Route path="locations/detail/:locationId/*" element={<LocationDetail />} />

            {/* new location form */}
            <Route path="locations/create/*" element={<LocationForm />} />

            {/* editLocation form */}
            <Route path="locations/edit/:locationId/*" element={<LocationForm />} />

            {/* location details card */}
            <Route path="locations/detail/:locationId/*" element={<LocationDetail />} />

            
            
            {/* Product list render when http://localhost:3000/products */}
            <Route exact path="products/*" element={ <ProductList />} />

            {/* Render the product form when http://localhost:3000/product/create */}
            <Route path="products/create/*" element={<ProductForm />} />
            
            {/* Udate product */}
            <Route path="products/edit/:productId/*" element={<ProductForm />} />


                
            {/* Render the employee list when http://localhost:3000/employees */}
            <Route exact path="employees/*" element={< EmployeeList />} />

            {/* Render the employee form when http://localhost:3000/employee/create */}
            <Route path="employees/create/*" element={<EmployeeForm />} />
                
            
        </Routes>
        </TypeProvider>
        </EmployeeProvider>
        </ProductProvider>
        </LocationProvider>
    )
}
