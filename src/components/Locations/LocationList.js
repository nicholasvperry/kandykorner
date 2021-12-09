import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"
import { EmployeeContext } from "../Employees/EmployeeProvider"
import { useNavigate } from "react-router"

// The context is imported and used by individual components that need data
//LocationContext stores date used in application
export const LocationList = () => {
    // This state changes when `getLocations()` is invoked below
    const { locations, getLocations } = useContext(LocationContext)
    const {employees, getEmployees} = useContext(EmployeeContext)
    const navigate = useNavigate()
  
    //useEffect - reach out to the world for something.
    //In this case it is reaching out to the api call for locations
    useEffect(() => {
      console.log("LocationList: useEffect - getLocations")
      getLocations()
      .then(getEmployees)
  
    }, [])
  
  //inserts htmls into DOM 
  return (
    <>
       <h1>Locations</h1>

       <button onClick={() => navigate("/locations/create")}>
              New Location
          </button>


        <div className="locations">
          {locations.map(location => {
    //Filter through employees to find emplyees with matching lacationIDs
    const employeeByLocation = location.employees.filter(e => e.locationId === location.id)
    //count number of employees with matching locationIDs
    const employeeCount = employeeByLocation.length
              

    return <LocationCard 
              key={location.id} 
              location={location}
              employeeCount={employeeCount} />
           })
          }
        </div>
    </>
  )

  
    // return (
    //   <>
    //   <h2 className="header">Locations</h2>
    //   <div className="locations">
    //     {console.log("LocationList: Render", locations)}
    //     {
    //       locations.map(locationObj => {
    //         return <LocationCard key={locationObj.id} location={locationObj} />
    //       })
    //     }
    //   </div>
    //   </>
    // )
  }