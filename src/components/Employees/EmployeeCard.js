import React from "react"
import "./Employee.css"

export const EmployeeCard = ({employee}) => {

let isFulltime = ""
let isManager = employee.manager ? "Yes" : "No"

if (employee.manager === false) {
    isFulltime = "Part Time"
} else {
    isFulltime = "Full Time"
}




return (
    
    
    <section className="employee">
        <h3 className="employeeName">Name: {employee.name}</h3>
        <div className="employeeLocation">Location: {employee.location.name}</div>
        <div className="employeePosition">Position: {isManager}</div>
        <div className="employentType">Employement Type: {isFulltime}</div>
        <div className="employeePayRate">Hourly Rate: ${employee.hourlyRate}</div>
       
    </section>
)}
