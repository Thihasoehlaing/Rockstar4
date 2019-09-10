import React from 'react';
import Item from './Item';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: [
        {name: 'Milk'},
        {name: 'Bread'},
        {name: 'Butter'},
      ]
    }
    this.add = this.add.bind(this);
  }

  add(){
    var items = this.state.data;
    items.push({ name: 'Apple'});
    this.setState({
      data: items
    });
  }
  render(){
    return (
      <div>
        < ul > {
          this.state.data.map(function (v) {
            return <Item name = {
              v.name
            }
            />
          })
        }

        {
          /* {this.state.data.map(v => <Item name={v.name} />)} */ } 
        </ul>

        <button onClick={this.add}>Add Item</button>
      </div>  
    )
  }
}

export default App;