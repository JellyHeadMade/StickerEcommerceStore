import React from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormField, FormButton } from '../formFields';

import history from '../../history';

class AccountInformationForm extends React.Component {
    render() {
        const { className, handleSubmit } = this.props;
    
        return ( 
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
                <Field className='sign-in-form__email' 
                type='email'
                name='email'
                placeholder='Email'
                title='Email'
                component={FormField} />
                <Field className='sign-in-form__password' 
                type='password'
                name='password'
                placeholder='Password'
                title='Password'
                component={FormField} />
                <div className='sign-in-form__line'></div>
                <Field className='sign-in-form__login'
                onClick={() => history.push('/account')}
                type='submit'
                title='Login'
                name='Login'
                component={FormButton}/>
            </form>
        )
    }
}

AccountInformationForm = reduxForm({
    form: 'AccountInformationForm'
})(AccountInformationForm);

export default AccountInformationForm;