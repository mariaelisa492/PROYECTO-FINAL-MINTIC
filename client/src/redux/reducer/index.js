import {
	GET_PRODUCTS, GET_BYNAME, DELETE_PRODUCT, CREATE_PRODUCT
} from "../constants/index";

const initialState = {
	users: [],
	sales: [],
	products: [],
	filteredProducts: []
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {

		case GET_PRODUCTS:
			return {
				...state,
				products: action.payload,
				filteredProducts: action.payload
			};

		case GET_BYNAME:
			return {
				...state,
				filteredProducts: [...action.payload]
			};

		case DELETE_PRODUCT:
			let deletedProduct = state.products.filter(product => product._id !== action.payload._id)
			return {
				...state,
				products: [...deletedProduct]
			};

		case CREATE_PRODUCT:
			return {
				...state,
				products: []
			};

		default:
			return state;
	}
};