import {
    SET_USER_PURCHASES
} from './types';

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                title: 'puchase 1',
                amount: 8.02
            },
            {
                _id: 1,
                title: 'puchase 2',
                amount: 11.21
            }
        ]
    })
}