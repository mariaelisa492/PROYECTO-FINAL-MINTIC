import axios from "axios";
import {
    LOCALHOST_URL, GET_BYNAME, GET_PRODUCTS, GET_SALES, GET_BYID
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

export const getSales = () => {
    return async (dispatch) => {
        try {
            const sales = await axios.get(`${LOCALHOST_URL}/sales`);
            return dispatch({
                type: GET_SALES,
                payload: sales.data,
            });
        } catch (error) {
            console.log(error, 'getSales ||Error||');
        }
    };
};

export const getSalesById = (id) => {
    return async (dispatch) => {
        try {
            const salesById = await axios.get(`${LOCALHOST_URL}/sales/byid/?id=${id}`);
            return dispatch({
                type: GET_BYID,
                payload: salesById.data,
            });
        } catch (error) {
            console.log(error, 'getProductsByName ||Error||');
        }
    };
};
export const deleteSale = (id) => {
    return async (dispatch) => {
        try {
            const deleteSale = await axios.delete(`http://localhost:5000/sales/${id}`);
            return dispatch({
                type: "DELETE_SALE",
                payload: deleteSale.data.remove,
            })
        }
        catch (error) {
            console.log("Error al eliminar Venta");
        }
    }
}

export const createSale = (objSale) => {
    return async (dispatch) => {
        try {
            const sales = await axios.post(`${LOCALHOST_URL}/sales/create`, objSale);
            return dispatch({
                type: "CREATE_SALE",
                payload: sales.data.sale,
            })
        } catch (error) {
            console.log("Error al crear venta")   
        }
    }
}

export const updateSale = (sale) => {
    return async (dispatch) => {
        try {
            const objSale = 
            { 
              sellerDocument:sale.sellerDocument, 
              products: sale.products, 
              nameCostume: sale.nameCostume, 
              quantity: sale.quantity, 
              totalPrice: sale.totalPrice, 
              status: sale.status, 
               };
            const sales = await axios.put(`${LOCALHOST_URL}/sales/${sale._id}`, objSale);
            return dispatch({
                type: "UPDATE_SALE",
                payload: sales.data.sale,
            })
        } catch (error) {
            console.log("Error al crear venta")   
        }
    }
}