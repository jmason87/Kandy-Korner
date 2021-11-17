import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType")
            .then(res => res.json())
            .then((productArray) => {
                setProducts(productArray)
            })
        },
        []
    )

    return (
        <>
            {
                products.map(
                    (productObj) => {
                        return <p>
                        <div>{productObj.name}</div>
                        <div>${productObj.price}</div>
                        <div>{productObj.productType.category}</div>
                        </p>
                    }
                )
            }
        </>    
    )
}