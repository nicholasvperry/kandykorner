import React from "react"
import "./Location.css"

export const LocationCard = ({location}) => (
    <section className="location">
        <h3 className="locationName">{location.name}</h3>
        <div className="locationAddress">{location.address}</div>
        <div className="locationFtg">{location.sqrFtg}</div>
        <div className="handicap">{location.handicap}</div>
    </section>
)
