import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useNavigate } from "react-router-dom"

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)

	const [location, setLocation] = useState({})

	const {locationId} = useParams();
	const navigate = useNavigate();



  useEffect(() => {
    console.log("useEffect", locationId)
    getLocationById(locationId)
    .then((response) => {
      setLocation(response)
    })
    }, [])

  return (
    <section className="location">
      <h2 className="locationName">{location.name}</h2>
      <div className="locationAddress">Address: { location.address }</div>
    <h3 className="locationEmployees">Employees: </h3>
    <div className="locationEmployeeNames">
    {location.employees?.map(employeeObj => <p key={employeeObj.id}>{employeeObj.name}</p>)}
    </div>
    <h3 className="locationInformation">Additional Information: </h3>
    <div className="locationFtg">Square feet: {location.sqrFtg}</div>
        <div className="handicap">{location.handicap ? `Handicap Accessible` : "Not Handicap Accessible" }</div>
    <button onClick={() => {
    navigate(`/locations/edit/${location.id}`)
}}>Edit</button>
    </section>
    
  )
}
