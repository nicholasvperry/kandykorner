import React, { createContext, useState } from "react"

// The context is imported and used by individual components that need data
//LocationContext stores date used in application
export const LocationContext = createContext()

// This component allows other components to use the context data
export const LocationProvider = (props) => {
    //useState hook defines a variable that holds the state of the compnent and a function to update it
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8088/locations?_embed=employees")
        .then(res => res.json())
        .then(setLocations)
    }
    //setLocations puts the data from the api into the array of animals

    const addLocation = locationObj => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locationObj)
        })
        .then(getLocations)
    }

    //gets location and includes id. Used for editing locations
    const getLocationById = (id) => {
        return fetch(`http://localhost:8088/locations/${id}?_embed=employees&_embed=animals`)
            .then(res => res.json())
    }

    //update location fetch call
    const updateLocation = location => {
        return fetch(`http://localhost:8088/locations/${location.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(location)
        })
          .then(getLocations)
      }
    /*
        You return a context provider which has the
        `locations` state, `getlocations` function,
        and the `addlocation` function as keys. This
        allows any child elements to access them.
    */
    return (
        <LocationContext.Provider value={{
            locations, getLocations, addLocation, getLocationById, updateLocation
        }}>
            {props.children}
        </LocationContext.Provider>
    )}