import React from 'react';

import { reduxForm, Field } from 'redux-form';
import Details from '../details';

import { FormField, FormButton } from '../formFields';

import history from '../../history';

class SignUpForm extends React.Component {
    render() {
        const { className, handleSubmit } = this.props;
        const info = [
        {
            _id: 0,
            title: 'At least characters',
        },
        {
            _id: 1,
            title: 'At least on number',
        },
        {
            _id: 2,
            title: 'At least one symbol',
        }
    ]
        return ( 
            <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
                <Field className='sign-up-form__name' 
                type='name'
                name='Name'
                placeholder='Name'
                title='name'
                component={FormField} />
                <Field className='sign-up-form__email' 
                type='email'
                name='email'
                placeholder='Email'
                title='Email'
                component={FormField} />
                <Field className='sign-up-form__password' 
                type='password'
                name='password'
                placeholder='Password'
                title='Password'
                component={FormField} />
                <Field className='sign-up-form__confirm' 
                type='password'
                name='Confirm Password'
                placeholder='Confirm Password'
                title='Confirm Password'
                component={FormField} />




                <div className='sign-up-form__line'></div>
                <Field className='sign-up-form__login'
                onClick={() => history.push('/account')}
                type='submit'
                title='Create Account'
                name='Login'
                component={FormButton}/>
                <Field className='sign-up-form__back'
                onClick={() => history.push('/signin')}
                type='button'
                title='Back'
                name='Back'
                gray={true}
                component={FormButton}/>

                <Details className='sign-up-form__details' title='Password Requirements' info={info}/>
            </form>
        )
    }
}

SignUpForm = reduxForm({
    form: 'SignUpForm'
})(SignUpForm);

export default SignUpForm;