import React from "react";
import Item from "./Item";

class Todo extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => {
                    return (
                        <Item
                            remove = {this.props.remove}
                            done   = {this.props.done}
                            undo   = {this.props.undo}
                            key    = {item._id}
                            item   = {item}
                            
                        />
                    )
                })}
            </ul>
        )
    }
}

export default Todo;