import React from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

import{
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const styles = {
  drawer:{
    width:300
  },
  header:{
    background:'#808080',
    height:100,
  },
  link:{
    textDecoration:'none',
  },
  linkuser:{
    textDecoration:'none',
    color:'black',
  },
  text:{
    background:'#808080',
  },
  textb:{
    marginLeft: '5%',
  }
}

class App extends React.Component{
  state = {
    Drawer: false
  };

  toggleDrawer = () => {
    this.setState({
      drawer: !this.state.drawer
    });
  }

  render(){
    return(
      <Router>
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton color="inherit" onClick={this.toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">
                Menu React
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer open={this.state.drawer} onClose={this.toggleDrawer}>
            <header style={styles.header}></header>
            <List style={styles.drawer}>

              <Link to="/Home" style={styles.link}>
                <ListItem onClick={this.toggleDrawer}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>

              <Link to="/Users" style={styles.link}>
                <ListItem onClick={this.toggleDrawer}>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="Users" />
                </ListItem>
              </Link>

              <Link to="/Contact" style={styles.link}> 
                <ListItem onClick={this.toggleDrawer}>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Contact" />
                </ListItem>
              </Link>

              <Link to="/Exit" style={styles.link}>
                <ListItem onClick={this.toggleDrawer}>
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary="Exit" />
                </ListItem>
              </Link>

            </List>
          </Drawer>
          <div>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Users" component={Users} />
            <Route path="/Users/:name" component={Detail} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Exit" component={Exit} />
          </div>
        </div>
      </Router>
    )
  }
}

const Home = props => <div style={styles.text}><h1 style={styles.textb}>Home</h1></div>;
const Contact = props => <div style={styles.text}><h1 style={styles.textb}>Contact</h1></div>;

const Users = props => (
                        <div style={styles.text}>
                          <h1 style={styles.textb}>Users</h1>
                          <ul>
                            <li>
                              <Link to="/Users/Alice" style={styles.linkuser}>Alice</Link>
                            </li>
                            <li>
                              <Link to="/Users/Bob" style={styles.linkuser}>Bob</Link>
                            </li>
                          </ul>
                        </div>
                      );

const Exit = props => <div style={styles.text}><h1 style={styles.textb}>Account - Exit</h1></div>;
const Detail = props => <div style={styles.text}><h1 style={styles.textb}>User - {props.match.params.name}</h1></div>

export default App;