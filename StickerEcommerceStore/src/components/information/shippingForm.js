import React from 'react';

import { reduxForm, Field } from 'redux-form';
import Details from '../details';

import { FormField, FormButton } from '../formFields';

import history from '../../history';

class ShippingForm extends React.Component {
    render() {
        const { className, handleSubmit } = this.props;
        
        return ( 
            <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
                <Field className='shipping-form__name' 
                type='name'
                name='name'
                placeholder='Name'
                title='Name'
                component={FormField} />
                <Field className='shipping-form__address' 
                type='address'
                name='address'
                placeholder='Street Address'
                title='Street Address'
                component={FormField} />
                <Field className='shipping-form__city' 
                type='city'
                name='city'
                placeholder='City'
                title='City'
                component={FormField} />
                <Field className='shipping-form__state' 
                type='state'
                name='state'
                placeholder='State'
                title='State'
                component={FormField} />
                <Field className='shipping-form__zipcode' 
                type='zipcode'
                name='zipcode'
                placeholder='Zipcode'
                title='Zipcode'
                component={FormField} />




                <div className='shipping-form__line'></div>
                <Field className='shipping-form__use-this-address'
                onClick={() => history.push('/information/payment')}
                type='submit'
                title='Use This Address'
                name='use-this-address'
                component={FormButton}/>
                <Field className='shipping-form__back'
                onClick={() => history.push('/signin')}
                type='button'
                title='Back'
                name='Back'
                gray={true}
                component={FormButton}/>
            </form>
        )
    }
}

ShippingForm = reduxForm({
    form: 'ShippingForm'
})(ShippingForm);

export default ShippingForm;