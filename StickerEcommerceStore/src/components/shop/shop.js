import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import ShopSearchBar from './shopSearchBar';
import ShopProduct from './shopProduct';
import ShopCart from './shopCart';
import CartButton from './cartButton';
import CartProduct from './cartProduct';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

class Shop extends React.Component {

    constructor() {
        super() 

        this.state = {
            showCart: true
        }
    }

    componentDidMount() {
        //fetch products
        const headerLinks = [
            {
                _id: 0,
                title: 'Login',
                path: '/signup'
            },
            
        ]
        this.props.setHeaderLinks(headerLinks);
        this.props.fetchShopCategories();
        this.props.fetchShopProducts();
    }

    shouldComponentUpdate(nextProps) {
        if(this.props != nextProps ) {
            this.props.setNavbarLinks(nextProps.categories, (_id) => this.props.filterProductsWithCatergoryId(_id));
        }
        return true
    }

    onSubmit = (fields) => {
        console.log(fields);
        this.props.filterProductsWithQuery(fields)
    }

    handleAddToCart = () => {
        if(document.getElementById('shop-cart').classList.contains('cart-hidden')) {
            document.getElementById('shop-cart').classList.remove('cart-hidden');
        } else {
            document.getElementById('shop-cart').classList.add('cart-hidden');
        }
    }


    render() {
        return (
            <div className='shop'>
                <ShopSearchBar className='shop__search-bar' onSubmit={this.onSubmit}/>
                <div className='shop__products'>
                    {
                        this.props.filteredProducts.map(product => {
                            return (
                                <ShopProduct {...product} key={product._id} />
                            )
                        })
                    }
                </div>
                {
                    this.state.showCart ? <ShopCart className='shop__cart'/> : ''
                }

                <CartButton onClick={this.handleAddToCart} className='shop__cart-button' icon={faCartPlus} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { categories, filteredProducts } = state.shop;
    return {
        categories,
        filteredProducts
    } 
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;