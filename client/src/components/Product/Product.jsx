import React from "react";
import './product.css'
export const Product = ({ img, name, price, isActive }) => {

    console.log(isActive)

    return (
        <div className="container-list-detail">
            <div className="img-detail">
                <img src={img} alt={name} />
            </div>
            <div className="detail">
                <h3 className="capitalizeText">{name}</h3>
                <h4>Price: $ {price}</h4>
            </div>
        </div>
    )
}