import {
	GET_PRODUCTS, GET_BYNAME, DELETE_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT
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
				products: [...state.products, action.payload]
			};

		case UPDATE_PRODUCT:
			let index = state.products.findIndex( product => product._id === action.payload._id);
			state.products[index] = action.payload;
			return {
				...state,
				products: [...state.products]
			};

		default:
			return state;
	}
};