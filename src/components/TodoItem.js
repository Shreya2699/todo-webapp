import React from "react";

class TodoItem extends React.Component {
    constructor() {
        super();
    }


    render() {
        return (
            <li class="list-group-item TodoItem__shineOnTouch"> 
                <input id="Main__todoCheckbox" className="mr-2" type="checkbox" />
                {this.props.text}
            </li>
        )
    }

}

export default TodoItem;