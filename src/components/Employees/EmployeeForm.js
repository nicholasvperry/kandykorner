import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../Locations/LocationProvider";

export const EmployeeForm = () => {
    const {addEmployee} = useContext(EmployeeContext)
    //pull getLocations fetch call and store state in "location"
    const { locations, getLocations} = useContext(LocationContext)
    

    //employee is the state
    //setEmployee is how we change the value of the object
    //useState sets initial values
    const [employee, setEmployee] = useState({    
        name: "",
        locationId: 0,
        manager: true,
        fullTime: true,
        hourlyRate: 0
      });

    const navigate = useNavigate()

    useEffect(() => {
        getLocations()
    }, [])

    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        
        //...employee makes copy of current state
        const newEmployee = { ...employee }
        /* Employee is an object with properties.
        Set the property to the new value
        using object bracket notation. */

        //Change copy. ID tells which property to change
        newEmployee[event.target.id] = event.target.value
        
        // update copy (change state)
        setEmployee(newEmployee)

    }

    const handleClickSaveEmployee = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form
        
        //Pull foreign keys from form to save in json
        const locationId = parseInt(employee.locationId)
        employee.locationId = locationId

        // if (employeeName === "") {
        //   window.alert("Please add your name")
        // } else {
        //   //invoke addEmployee passing employee as an argument.
        //   //once complete, change the url and display the employee list
          addEmployee(employee)
          .then(() => navigate("/employees"))
        // }
      }

    return (
        <form className="employeeForm">
            <h2 className="employeeFormTitle">New Employee</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Employee name:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name}/>
              </div>
            </fieldset> 

            <fieldset>
              <div className="form-group">
                  <label htmlFor="location">Assign to location: </label>
                  <select onChange={handleControlledInputChange} defaultValue={employee.locationId} name="locationId" id="locationId" className="form-control" >
                      <option type="number" value="0">Select a location</option>
                      {locations.map(l => (
                          <option key={l.id} value={l.id}>
                              {l.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>

                        
          <fieldset>
              <div className="form-group">
                  <label htmlFor="manager">Manager</label>
                  <input type="checkbox" id="manager" onChange={handleControlledInputChange} required  className="form-control" placeholder="Manager" value={employee.manager}/>
              </div>
            </fieldset> 

            <fieldset>
              <div className="form-group">
                  <label htmlFor="position">Employee Position: </label>
                  <select onChange={handleControlledInputChange} defaultValue={employee.fullTime} name="fullTime" id="fullTime" className="form-control" >
                      <option>Select a position:</option>
                      <option value="true">Full Time</option>
                      <option value="false">Part Time</option>
                  </select>
              </div>
          </fieldset>

            <fieldset>
              <div className="form-group">
                  <label htmlFor="rate">Employee rate: $</label>
                  <input value={employee.hourlyRate} type="number" id="rate" onChange={handleControlledInputChange} required  className="form-control" />
              </div>
            </fieldset> 

            

          <button className="btn btn-primary"
            onClick={handleClickSaveEmployee}>
            Save Employee
          </button>
        </form>
    )
}