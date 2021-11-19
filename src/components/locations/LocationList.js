import React, { useEffect, useState } from "react"

export const LocationList = () => {
    // state variables. locations is the array that setLocations will set state to.
    const [locations, setLocations] = useState([])

    /*
    useEffect take two arguments. The first is a function, the second is an array.
    when state changes, in this case, locations (line 5), useEffect will run this function.
    It operates just like a eventlistener. 
    */
    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
            .then(res => res.json())
            .then((locationArray) => {
                setLocations(locationArray)
            })
        },
        []
    )

    return (
        <>
            {
                locations.map(
                    (locationObj) => {
                        return <p>{locationObj.region}</p>
                    }
                )
            }
        </>    
    )
}