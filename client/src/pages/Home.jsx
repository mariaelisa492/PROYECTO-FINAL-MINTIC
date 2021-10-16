import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductsList } from "../components/ProductsList/ProductsList";
import Sidebar from "../components/SideBar/SideBar";


export const Home = () => {
    const filteredProducts = useSelector((state) => state.filteredProducts);

    console.log(filteredProducts, "Estado modificable");

    return (
        <div>

            <div>
                <Sidebar />
            </div>

            <div>
                {filteredProducts.length > 0 ? (
                    <ProductsList filteredProducts={filteredProducts} />
                ) : (
                    <p>loading</p>
                )}
            </div>

        </div>
    );
};
