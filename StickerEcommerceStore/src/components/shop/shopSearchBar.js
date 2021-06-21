import React from 'react';

import { reduxForm, Field } from 'redux-form';

function FormSearchbar(props) {
    return (
        <input className={`${props.className} form-search-bar`} {...props.input} type='text' placeholder={`<i class="fas fa-search"></i> ${props.placeholder}`} />
    )
}

class ShopSearchBar extends React.Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} shop-search-bar`}>
                <Field name='shop-search-bar' className='shop-search-bar__form-search-bar' placeholder='search' component={FormSearchbar}/>
            </form>
        )
    }
}

ShopSearchBar = reduxForm({
    form: 'ShopSearchBar'
})(ShopSearchBar);

export default ShopSearchBar;