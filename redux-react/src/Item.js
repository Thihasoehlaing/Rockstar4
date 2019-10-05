import React from 'react';

class Item extends React.Component {
    render() {
        return ( 
            <li>{this.props.name}</li>
        )
    }
} // property is read only

export default Item;