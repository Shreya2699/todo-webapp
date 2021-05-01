import React from "react";
import TodoItem from "./TodoItem";

class Main extends React.Component {

    render() {

        var mytodoitems = [...this.props.todoitems];

        return (
            <div>


                {/* form to add todo item */}

                <div className="container-md pt-4">

                    <form className="mb-4 mt-2">
                        <div className="form-row">
                            <div className="col-md-11 mb-2">
                                <input type="text" className="form-control" placeholder="I want to do ...." />
                            </div>
                            <div className="col-md-1 mb-2">
                                <button className="btn btn-primary px-4" >Add</button>
                            </div>
                        </div>
                    </form>

                    {/* to do items  */}
                    <ul class="list-group">

                    <TodoItem id={mytodoitems[0].id} text={mytodoitems[0].text} isCompleted={mytodoitems[0].isCompleted} />
                    <TodoItem id={mytodoitems[1].id} text={mytodoitems[1].text} isCompleted={mytodoitems[1].isCompleted} />
                    <TodoItem id={mytodoitems[2].id} text={mytodoitems[2].text} isCompleted={mytodoitems[2].isCompleted} />
                    <TodoItem id={mytodoitems[3].id} text={mytodoitems[3].text} isCompleted={mytodoitems[3].isCompleted} />

                        
                        
                        
                    </ul>

                </div>


                

            </div>
        )
    }

}

export default Main;