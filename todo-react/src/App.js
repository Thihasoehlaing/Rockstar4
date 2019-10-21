import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

import React from 'react';
//import Item from "./Item";
import Header from "./Header";
import Todo from "./Todo";

// class Done extends React.Component {
//   render() {
//     return (
//       <ul>
//         {this.props.items.map(item => {
//           return (
//             <Item key={item._id} item={item} />
//           )
//         })}
//       </ul>
//     )
//   }
// }

const api = 'http://localhost:8000/tasks';

const styles ={
  paper: {
    display: 'flex'
  },
  input:{
    flexGrow: '1',
    padding : 10,
  },
  buttonadd:{
    marginLeft: -20,
  }
}

class App extends React.Component {
    input  = React.createRef();
    autoid = 3;
    state  = {
        tasks: []
    }

    componentWillMount(){
        fetch(api).then(res => res.json()).then(json => {
            this.setState({
                tasks:json
            });
        });
    }

    add = () => {
        let subject = this.input.current.value;
        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({subject})
        }).then(res => res.json()).then( json => {
            this.setState({
                tasks:[
                ...this.state.tasks,
                json
                ]
            });
        });
    }

    remove = (_id) => () => {
        fetch(`${api}/${_id}`, {
            method: 'DELETE'
        }).then(res => {
            this.setState({
                tasks: this.state.tasks.filter(item => item._id !== _id)
            });
        });      
    }

    done = (_id) => () => {
        this.setState({
            tasks: this.state.tasks.map(item => {
                if(item._id === _id) item.status = 1;
                return item;
            })
        });
    }

    undo = (_id) => () => {
        fetch(`${api}/${_id}`, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 1})
        }).then(res => {
            this.setState({
                tasks: this.state.tasks.map(item => {
                    if(item._id === _id) item.status = 0;
                    return item;
                })
            });
        });
    }

    clear = () => {
      this.setState({
        tasks: this.state.tasks.filter(item => item.status === 0)
      })
    }

    render() {
        return (
            <div>
                <Header count={ this.state.tasks.filter(
                        item => item.status === 0
                    ).length } 
                clear = {this.clear}
                />
  
                <Paper style={styles.paper}>
                  <InputBase
                    inputRef    = {this.input}
                    placeholder = "Enter Task"
                    style       = {styles.input}
                  />
                  <IconButton onClick={this.add} style={styles.buttonadd}>
                    <PlaylistAddIcon />
                  </IconButton>
                </Paper>

                <Todo
                    done   = {this.done}
                    undo   = {this.undo}
                    remove = {this.remove}
                    items  = {this.state.tasks.filter(item => item.status === 0)}
                />
                <Divider />
                <Todo
                    done   = {this.done}
                    undo   = {this.undo}
                    remove = {this.remove}
                    items  = {this.state.tasks.filter(item => item.status === 1)}
                />
            </div>
        );
    }
}

export default App;
