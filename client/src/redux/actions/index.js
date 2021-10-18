import axios from "axios";
import {
    LOCALHOST_URL, GET_BYNAME, GET_PRODUCTS
} from "../constants/index"

export const getProducts = () => {
    return async (dispatch) => {
        try {
            const products = await axios.get(`${LOCALHOST_URL}/products`);
            return dispatch({
                type: GET_PRODUCTS,
                payload: products.data,
            });
        } catch (error) {
            console.log(error, 'getProducts ||Error||');
        }
    };
};

export const getProductsByName = (name) => {
    return async (dispatch) => {
        try {
            const productsByName = await axios.get(`${LOCALHOST_URL}/products/byName/?name=${name}`);
            return dispatch({
                type: GET_BYNAME,
                payload: productsByName.data,
            });
        } catch (error) {
            console.log(error, 'getProductsByName ||Error||');
        }
    };
};

export const deleteProduct = (id) => {
    return async (dispatch) => {
        try {
            const deleteProd = await axios.delete(`http://localhost:5000/products/${id}`);
            return dispatch({
                type: "DELETE_PRODUCT",
                payload: deleteProd.data.remove,
            })
        }
        catch (error) {
            console.log("Error al eliminar productos");
        }
    }
}

export const createProduct = (objProduct) => {
    return async (dispatch) => {
        try {
            const products = await axios.post(`${LOCALHOST_URL}/products/create`, objProduct);
            return dispatch({
                type: "CREATE_PRODUCT",
                payload: products.data.product,
            })
        } catch (error) {
            console.log("Error al crear producto")   
        }
    }
}

export const updateProduct = (product) => {
    return async (dispatch) => {
        try {
            const objProduct = 
            { 
              name:product.name, 
              description: product.name, 
              image: product.image, 
              price: product.price, 
              stock: product.stock, 
              sellerDocument: product.sellerDocument, 
              isActive: true };
            const products = await axios.put(`${LOCALHOST_URL}/products/${product._id}`, objProduct);
            return dispatch({
                type: "UPDATE_PRODUCT",
                payload: products.data.product,
            })
        } catch (error) {
            console.log("Error al crear producto")   
        }
    }
}