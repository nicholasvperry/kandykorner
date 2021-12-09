import React from "react"
import "./Employee.css"
import { Navigate, useNavigate } from "react-router"

export const EmployeeCard = ({employee}) => {
const navigate = useNavigate()


return (
    
    
    <section className="employee">
        <h3 className="employeeName">Name: {employee.name}</h3>
        <div className="employeeLocation">Location: {employee.location.name}</div>
        <div className="employeePosition">Position: {employee.manager ? `Manager` : "Professional"}</div>
        <div className="employentType">Employement Type: {employee.Fulltime ? `Full Time` : "Part Time"}</div>
        <div className="employeePayRate">Hourly Rate: ${employee.hourlyRate}</div>
        
    </section>
)}
