import React from "react"
import { Route } from "react-router-dom"
import { EmployeeForm } from "./employees/EmployeeFrorm"
import { LocationList } from "./locations/LocationList"
import { ProductList } from "./products/ProductList"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">
                <LocationList />
            </Route>

            <Route path="/products">
                <ProductList />
            </Route>

            <EmployeeForm />
        </>
    )
}
