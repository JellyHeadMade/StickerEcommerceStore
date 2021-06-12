import {
    // SET_SHOP_CATERGORIES
    
} from '../actions/types';

const INITAL_STATE = {
    catergories: [],
    selectedCatergoryId: 0,
    productsSelected: []
}

export default function(state = INITAL_STATE, action) {
    switch (action.type) {
        // case SET_SHOP_CATERGORIES:
        //     return {
        //         ...state,
        //         catergories: action.payload
        //     }
        default: return state
    }
}