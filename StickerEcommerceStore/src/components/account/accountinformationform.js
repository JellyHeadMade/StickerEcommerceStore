import React from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormField, FormButton, LongGrayButton } from '../formFields';

import history from '../../history';

class AccountInformationForm extends React.Component {
    constructor() {
        super()

        this.state = {
            showPasswords : false
        }
    }
    render() {
        const { className, handleSubmit } = this.props;
    
        return ( 
            <form onSubmit={handleSubmit} className={`${className} account-information-form`}>
                <Field className='account-information-form__name' 
                type='name'
                name='name'
                placeholder='Name'
                title='Name'
                component={FormField} />
                <Field className='account-information-form__email' 
                type='email'
                name='email'
                placeholder='Email'
                title='Email'
                component={FormField} />

                <Field className='account-information-form__street-address' 
                type='address'
                name='address'
                placeholder='Street address'
                title='Street address'
                component={FormField} />
                <Field className='account-information-form__city' 
                type='city'
                name='city'
                placeholder='City'
                title='City'
                component={FormField} />

                <Field className='account-information-form__state' 
                type='state'
                name='state'
                placeholder='State'
                title='State'
                component={FormField} />
                <Field className='account-information-form__zipcode' 
                type='zipcode'
                name='zipcode'
                placeholder='Zipcode'
                title='Zipcode'
                component={FormField} />

                {
                    this.state.showPasswords ? 
                    [
                        <Field key={0} className='account-information-form__current' 
                        type='password'
                        name='Current Password'
                        placeholder='Current Password'
                        title='current'
                        component={FormField} />,
                        <Field key={1} className='account-information-form__new' 
                        type='password'
                        name='New Password'
                        placeholder='New Password'
                        title='new'
                        component={FormField} />,
                        <Field key={2} className='account-information-form__confirm' 
                        type='password'
                        name='Confirm Password'
                        placeholder='Confirm Password'
                        title='confirm'
                        component={FormField} />
                    ]
                    :
                    <Field className='account-information-form__change-password'
                    onClick={() => this.setState({showPasswords : true})}
                    type='button'
                    labelTitle='Password'
                    title='Change Password'
                    name='change-password'
                    component={LongGrayButton}/>
                }


                {/* <Field className='account-information-form__password' 
                type='password'
                name='password'
                placeholder='Password'
                title='Password'
                component={FormField} />
                <div className='account-information-form__line'></div>
                <Field className='account-information-form__login'
                onClick={() => history.push('/account')}
                type='submit'
                title='Login'
                name='Login'
                component={FormButton}/> */}
            </form>
        )
    }
}

AccountInformationForm = reduxForm({
    form: 'AccountInformationForm'
})(AccountInformationForm);

export default AccountInformationForm;