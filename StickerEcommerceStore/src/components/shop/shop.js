import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import ShopSearchBar from './shopSearchBar';
import ShopProduct from './shopProduct';

class Shop extends React.Component {

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