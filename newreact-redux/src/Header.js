import React from "react";

const styles = {
    header: {
        margin    : 0,
        padding   : 10,
        background: 'black',
        color     : 'white',
        fontSize  : 21
    }
};

const Header = props => (
    <h1 style={styles.header}>Todo React ({ props.count })</h1>
);

export default Header;