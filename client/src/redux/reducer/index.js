import {
	GET_PRODUCTS, GET_BYNAME, DELETE_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT, CREATE_SALE, GET_BYID, DELETE_SALE, UPDATE_SALE, GET_SALES
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
			case GET_SALES:
				return {
					...state,
					sales: action.payload,
					filteredSales: action.payload
				};
	
			case GET_BYID:
				return {
					...state,
					filteredSales: [...action.payload]
				};
	
			case DELETE_SALE:
				let deletedSales = state.sales.filter(sale => sale._id !== action.payload._id)
				return {
					...state,
					sales: [...deletedSales]
				};
	
			case CREATE_SALE:
				return {
					...state,
					sales: [...state.sales, action.payload]
				};
	
			case UPDATE_SALE:
				let indexS = state.sales.findIndex( sale => sale._id === action.payload._id);
				state.sales[indexS] = action.payload;
				return {
					...state,
					sale: [...state.sales]
				};

		default:
			return state;
	}
};