import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"


export const ApplicationViews = () => {
    return (
        <Home>
        <Routes>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/" element={<Home />} />

            {/* Render the animal list when http://localhost:3000/locations */}
            <Route exact path="/locations" element={ <LocationList />} />
                
            
        </Routes>
        </Home>
    )
}
