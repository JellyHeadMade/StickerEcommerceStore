import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function CartButton({className, icon}) {
    return(
        <div className={`${className} cart-button`}>
            {/* <FontAwesomeIcon icon={icon} /> */}
            <FontAwesomeIcon icon={faTimes} />
        </div>
    )
}

function CartContent({className}) {
    return(
        <div className={`${className} card-content`} >

        </div>
    )
}

class ShopCart extends React.Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} shop-cart`}>
                <CartButton className='shop-cart__toggle' icon='faTimes' />
                <CartContent className='shop-cart__content' />
            </div>
        )
    }
}

export default ShopCart;