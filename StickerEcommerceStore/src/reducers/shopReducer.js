import {
    SET_SHOP_CATEGORIES,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID,
    FILTER_PRODUCTS_WITH_QUERY
} from '../actions/types';

const INITIAL_STATE = {
    categories: []
    // products: [],
    // filteredProducts: []
}

export default function(state = INITIAL_STATE, action) {
     console.log('reducer action type is ' + action.type);
    switch (action.type) {
        case SET_SHOP_CATEGORIES:
            const categories  = action.payload;
            return {
                ...state,
                categories
            }
        default: return state;
    }
    console.log(categories + ' reducer catergories')
}