import React from "react"
import { Link } from "react-router-dom"
import "./Location.css"

export const LocationCard = ({location, employeeCount}) => (
    <section className="location">
        
        <h3 className="locationName">
            <Link to={`/locations/detail/${location.id}`}>
        { location.name }
      </Link></h3>
        <div className="locationAddress">{location.address}</div>
       
    </section>
)
