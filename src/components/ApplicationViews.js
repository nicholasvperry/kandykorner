import React from "react"
import { Route, Routes } from "react-router-dom"
import { EmployeeProvider } from "./Employees/EmployeeProvider"
import { Home } from "./Home"
import {LocationList} from "./Locations/LocationList"
import {LocationProvider} from "./Locations/LocationProvider"
import { ProductList } from "./Products/ProductList"
import { ProductProvider } from "./Products/ProductProvider"
import { EmployeeList } from "./Employees/EmployeeList"
import { EmployeeForm } from "./Employees/EmployeeForm"

export const ApplicationViews = () => {
    return (
        <LocationProvider>
        <ProductProvider>
        <EmployeeProvider>
        <Routes>
            {/* Render the home page when http://localhost:3000/ */}
            <Route exact path="/" element={<Home />} />

            {/* Render the location list when http://localhost:3000/locations */}
            <Route exact path="/locations" element={ <LocationList />} />
            
            {/* Render the product list when http://localhost:3000/products */}
            <Route exact path="/products" element={ <ProductList />} />
                
            {/* Render the employee list when http://localhost:3000/employees */}
            <Route exact path="/employees" element={ <EmployeeList />} />

            {/* Render the employee form when http://localhost:3000/employee/create */}
            <Route path="employees/create/*" element={<EmployeeForm />} />
                
            
        </Routes>
        </EmployeeProvider>
        </ProductProvider>
        </LocationProvider>
    )
}
