import React from 'react';

import PageTitle from '../pageTitle';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Payment extends React.Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (Fields) => {
        console.log(Fields);
        this.props.history.push('/account');
    }

    render() {
        return(
            <div className='sign-in'>
                <PageTitle className='sign-in__page-title' title='Payment Information' />
                <PaymentForm onSubmit={this.onSubmit} className='sign-in__form' />
            </div>
        )
    }
}

Payment = connect(null, actions)(Payment);

export default Payment;