import React from "react"
import "./Employee.css"

export const CustomerCard = ({customer}) => (
    <section className="customer">
        <h3 className="customerName">Name: {customer.name}</h3>
        <div className="customerAddress">Address: {customer.address}</div>

    </section>
)