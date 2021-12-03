import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"

// The context is imported and used by individual components that need data
//LocationContext stores date used in application
export const LocationList = () => {
    // This state changes when `getLocations()` is invoked below
    const { locations, getLocations } = useContext(LocationContext)
  
    //useEffect - reach out to the world for something.
    //In this case it is reaching out to the api call for locations
    useEffect(() => {
      console.log("LocationList: useEffect - getLocations")
      getLocations()
  
    }, [])
  
  //inserts htmls into DOM 
    return (
      <>
      <h2 className="header">Locations</h2>
      <div className="locations">
        {console.log("LocationList: Render", locations)}
        {
          locations.map(locationObj => {
            return <LocationCard key={locationObj.id} location={locationObj} />
          })
        }
      </div>
      </>
    )
  }