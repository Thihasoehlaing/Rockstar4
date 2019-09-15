import React from 'react';

// class Item extends React.Component{
//   render(){
//     return(
//       <li>
//       {this.props.user.name}&nbsp;
//       <a href="/#" onClick={
//         this.props.remove(this.props.user.id)
//       }>Del</a>
//       </li>
//     );
//   }
// }

//function Item(props){}
const Item = props =>
  (
    <li>
      {props.user.name}&nbsp;
      <a href="/#" onClick={
        props.remove(props.user.id)
      }>Del</a>
    </li>
  ); //ျပဳျပင္ေျပာင္းလဲလုုိ့မရ stateless immutable component

class List extends React.Component{
  render(){
    return(
      <ul>
          {this.props.users.map(user => {
            return(
              <Item 
              key    = {user.id}
              user   = {user}
              remove = {this.props.remove}
            />
            )
          })}
        </ul>
    )
  }
}

class App extends React.Component{
  autoid = 2;
  input  = React.createRef();
    
  state       = {
    users:[
      {id:1, name: 'Tom'},
      {id:2, name: 'Jerry'},
    ]
  };

  add =() => {
    let users = this.state.users;
    users.push({ id: ++this.autoid, name: this.input.current.value});
    this.setState({users:users});
  }
  
  remove = (id) => () => {
    this.setState({
      users: this.state.users.filter(user => user.id !== id)
    });
  }
  
  render(){
    return(
      <div>
        <h1>User List</h1>
        <List users={this.state.users} remove={this.remove} />
        <input type="text" ref={this.input} />
        <button onClick={this.add}>Add </button>
      </div>
    );
  }
  
}

export default App;
