import React from "react";
//import AppBar from "@material-ui/core/AppBar";

import{
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Badge,
} from "@material-ui/core";

import DoneAllIcon from "@material-ui/icons/DoneAll";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = {
    header:{
        margin    : 0,
        padding   : 20,
        background: 'black',
        color     : 'white',
        fontSize  : 21,
    }
};

class Header extends React.Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Badge badgeContent={this.props.count} color="secondary">
                        <DoneAllIcon />
                    </Badge>
                    <Typography variant="h6" style={styles.title}>
                        Todo List
                    </Typography>
                    <IconButton color="inherit">
                        <MoreVertIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;