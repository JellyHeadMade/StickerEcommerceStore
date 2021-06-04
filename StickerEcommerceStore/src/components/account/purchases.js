import React from 'react';

class Purchases extends React.Component {
    render() {
        const { className } = this.props;

        return (
            <div className={`${className} purchases`}>
                purchases go here. 
            </div>
        )
    }
}

export default Purchases;