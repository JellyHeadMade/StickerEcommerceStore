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
    return {state}
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;