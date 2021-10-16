import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { Product } from "../Product/Product";
import "./productsList.css";


export const ProductsList = ({ filteredProducts }) => {
    console.log(filteredProducts, "ProductsList");
    const dispatch = useDispatch()

    return (
        <>
            <div className="containerList">
                <div className="productList">
                    {filteredProducts.map((product) => {
                        return (
                            <Product
                                img={product.image}
                                name={product.name}
                                price={product.price}
                                isActive={product.isActive}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};
