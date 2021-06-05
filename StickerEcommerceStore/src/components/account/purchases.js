import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Purchases extends React.Component {

    componentDidMount() {
        this.props.fetchUserPurchases();
    }

    render() {
        const { className } = this.props;

        return (
            <div className={`${className} purchases`}>
                {
                    this.props.purchases.map(purchase => {
                        return <div>{purchase.title} : {purchase.amount}</div>
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    const { purchases } = state.user;
    return { purchases };
}

Purchases = connect(mapStateToProps, actions)(Purchases);

export default Purchases;