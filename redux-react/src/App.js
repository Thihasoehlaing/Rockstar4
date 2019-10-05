import React from 'react';
import Item from './Item';
import { connect } from 'react-redux';

const App = props => {
  let input = React.createRef();
  
    return (
      <div>
        <ul>
          {props.data.map(function (v) {
            return <Item name={v.name} />
          })
          }

          {/* { {this.state.data.map(v => <Item name={v.name} />)}  }  */}
        </ul>

        <input type="text" ref={input} />
        <button onClick={() => {
          props.add(input.current.value);
        }}>Add Item</button>
      </div>
    )
}

// class App extends React.Component{
//   constructor(){
//     super();
//     this.input = React.createRef();
//   }

//   render(){
  
//     return (
//       <div>
//         <ul>
//           {this.props.data.map(function (v) {
//               return <Item name = { v.name } />
//             })
//           }

//           {/* { {this.state.data.map(v => <Item name={v.name} />)}  }  */}
//         </ul>
        
//         <input type="text" ref={this.input} />
//         <button onClick={() => {
//           this.props.add(this.input.current.value);
//         }}>Add Item</button>
//       </div>  
//     )
//   }
// }

const ReduxApp = connect(state => {
  return{
    data: state
  }
}, dispatch => {
    return{
      add: (name) => {
        dispatch({type:'ADD', name});
      }
    }
})(App);

export default ReduxApp;