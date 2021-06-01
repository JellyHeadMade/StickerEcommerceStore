import {
    SET_HEADER_LINKS,
    SET_NAVBAR_LINKS
} from '../actions/types'

const INITAL_STATE = {
    headerLinks: [
        {
            title: 'yp'
        },
        {
            title: 'pus'
        }
    ],
    navbarLinks: [
        {
            title: 'account'
        },
        {
            title: 'purchases'
        }
    ]
}

export default function(state = INITAL_STATE, action) {
    switch (action.type) {
        case SET_HEADER_LINKS: 
            return {
                ...state,
                headerLinks: action.payload
            }
        case SET_NAVBAR_LINKS: 
            return {
                ...state,
                navbarLInks: action.payload
            }
        default: return state
    } 
}