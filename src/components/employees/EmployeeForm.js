import React, { useState, useEffect } from "react"
import { useHistory } from "react-router"

export const EmployeeForm = () => {
    const [locations, setLocations] = useState([])
    const [employee, updateEmployee] = useState({
        name: "",
        location: "",
        hourlyRate: "",
        manager: false,
        fullTime: false
    })
    const history = useHistory()


    const submitEmployee = (event) => {
        event.preventDefault()
        const newEmployee = {
            name: employee.name,
            locationId: parseInt(employee.location),
            wage: employee.hourlyRate,
            manager: employee.manager,
            status: employee.fullTime
        }

        const fetchOptions = {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees", fetchOptions)
        .then(res => res.json())
        .then(() => {
            history.push("/employees")
        })
    }

        useEffect(
        () => {
            fetch("http://localhost:8088/locations")
            .then(res => res.json())
            .then((LocationArray) => {
                setLocations(LocationArray)
            })
        },
        []
    )
    
    
    
    
    
    return (
        
        <form>
            <h2>Employee Info</h2>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" 
                        onChange={
                            (event) => {
                                const empCopy = {...employee}
                                empCopy.name = event.target.value
                                updateEmployee(empCopy)
                            }
                        }  />
                </div>
                <div>
                    <label htmlFor="location">Store Number: </label>
                    <select onChange={
                        (event) => {
                            const empCopy = {...employee}
                            empCopy.location = event.target.value
                            updateEmployee(empCopy)
                        }
                    }>
                        <option value="0">Choose</option>
                        {locations.map(
                            (location) => {
                                return <option key={`location==${location.id}`} value={location.id}>{location.region}</option>
                            }
                           
                        )}
                    </select>
                    
                    {/* <label htmlFor="location">Location:</label>
                    <input type="text" 
                        onChange={
                            (event) => {
                                const empCopy = {...employee}
                                empCopy.location = event.target.value
                                updateEmployee(empCopy)
                            }
                        }  /> */}
                </div>
                <div>
                    <label htmlFor="hRate">Hourly Rate: </label>
                    <input type="text" 
                        onChange={
                            (event) => {
                                const empCopy = {...employee}
                                empCopy.hourlyRate = event.target.value
                                updateEmployee(empCopy)
                            }
                        }  />
                </div>
                <div>
                    <label htmlFor="manager">Manager</label>
                    <input type="checkbox" 
                        onChange={
                            (event) => {
                                const empCopy = {...employee}
                                empCopy.manager = event.target.checked
                                updateEmployee(empCopy)
                            }
                        }  />
                </div>
                <div>
                    <label htmlFor="fTime">Full Time</label>
                    <input type="checkbox" 
                        onChange={
                            (event) => {
                                const empCopy = {...employee}
                                empCopy.fullTime = event.target.checked
                                updateEmployee(empCopy)
                            }
                        }  />
                </div>
                <button onClick={submitEmployee}>
                    Submit
                </button>
        </form>
        
    )
}