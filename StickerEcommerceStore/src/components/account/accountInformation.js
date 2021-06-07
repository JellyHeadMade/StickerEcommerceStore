import React from 'react';

import PageTitle from '../pageTitle';
import AccountInformationForm from './accountinformationform';

class AccountInformation extends React.Component {

    onSubmit = (Fields) => {
        console.log(Fields);
        // this.props.history.push('/account');
    }

    render() {
        return(
            <div className='account-information'>
                <PageTitle className='account-information' title='Account Information' />
                <AccountInformationForm onSubmit={this.onSubmit} className='account-information__form' />
            </div>
        )
    }
}

export default AccountInformation;