import React from 'react';
import GreenPriceTag from '../greenPriceTag';
import Quantity from '../quantity';

class CartProduct extends React.Component {
    render() {
        const {  product, quantity } = this.props;
        const {  title,  price } = product;
        return(
            <div className={` cart-product`}>
                <img className='cart-product__image' src='http://via.placeholder.com/130x130' />
                <div className='cart-product__title'>{title}</div>
                <Quantity className='cart-product__quantity' quantity={quantity}/>
                <a className='cart-product__remove'>Remove</a>
                <GreenPriceTag className='cart-product__price' title={price} />
            </div>
        )
    }
}

export default CartProduct;