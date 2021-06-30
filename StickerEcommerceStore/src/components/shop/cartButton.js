import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCartPlus } from '@fortawesome/free-solid-svg-icons';

function CartButton({className, icon, onClick}) {
    return(
        <a onClick={onClick} className={`${className} cart-button`}>
            <FontAwesomeIcon icon={icon} />
        </a>
    )
}

export default CartButton;