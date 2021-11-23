import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"

export const EmployeeList = () => {
    const [employees, updateEmployees] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees?_expand=location")
            .then (res => res.json())
            .then((data) => {
                updateEmployees(data)
            })
        },
        []
    )

    return (
        <>
            <button onClick={() => history.push("./employees/create")}>Employee Application</button>
            {
                employees.map(
                    (employee) => {
                        return <div key={`employee==${employee.id}`}>
                            <p>{employee.name} is working in the {employee.location.region} store!</p>
                        </div>
                    }
                )
            }
        </>
    )
}    