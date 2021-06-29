import React from 'react';

import { reduxForm, Field } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function FormSearchbar(props) {
    return (
        <div className='search-bar-grid'>
            {/* <i className="fas fa-search"></i> */}
            <FontAwesomeIcon className='search-bar-grid__icon' icon={faSearch} />
            <input className={`${props.className} form-search-bar search-bar-grid__input`} {...props.input} type='text' placeholder={` ${props.placeholder}`} />
        </div>
    )
}

class ShopSearchBar extends React.Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} shop-search-bar`}>
                <Field name='query' className='shop-search-bar__form-search-bar' placeholder='Search' component={FormSearchbar}/>
            </form>
        )
    }
}

ShopSearchBar = reduxForm({
    form: 'ShopSearchBar'
})(ShopSearchBar);

export default ShopSearchBar;