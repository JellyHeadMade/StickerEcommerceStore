import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function addCartProduct(product) {
    return ({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: 0,
                product: {
                    _id: 0,
                    title: 'JavaScript in the Browser',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a" ,
                    price: 3.99,
                    belongsTo: [0, 1]
                },
                quantity: 2
            },
            {
                _id: 1,
                product: {
                    _id: 1,
                    title: 'Graph Database',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a" ,
                    price: 2.99,
                    belongsTo: [0, 6]
                },
                quantity: 1
            }
        ]
    })
    // console.log(payload);
}


export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.02,
                orderNumber: 'A0025644855',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'jelly made',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 17.89,
                orderNumber: 'A0045544855',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'jelly made',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 2,
                total: 4.23,
                orderNumber: 'A0025321855',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'jelly made',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 3,
                total: 18.45,
                orderNumber: 'A0025644444',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'jelly made',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 4,
                total: 9.13,
                orderNumber: 'A0025644789',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'jelly made',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 5,
                total: 31.22,
                orderNumber: 'A0025644852',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'jelly made',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 6,
                total: 12.77,
                orderNumber: 'A0025644555',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'jelly made',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 7,
                total: 11.01,
                orderNumber: 'A0025644333',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'jelly made',
                    shippingAddress: '1234 West State Street'
                }
            }
        ]
    })
}