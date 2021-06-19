import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

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


    render() {
        return (
            <div className='shop'>
                shop...
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { categories } = state.shop;
    return {
        categories
    } 
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;