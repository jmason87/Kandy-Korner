import React, { useEffect, useState } from "react"

export const LocationList = () => {
    const [locations, setLocations] = useState([])

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