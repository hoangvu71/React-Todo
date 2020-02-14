import React from "react"

class TodoForm extends React.Component{
    constructor() {
        super();
        this.state = {item: ""}
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.props.addItem(event, this.state.item);
        console.log(this.state.item);
        this.setState({ item : ""})
    }
    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }
    render(){
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input value={this.state.item} name="item" onChange={this.changeHandler} placeholder="...todo" />
                    <button type="submit">Add Todo</button>
                </form>
                <form onSubmit={this.props.clearItem}>
                    <button type="submit">Clear Completed</button>
                </form>
            </div>
           
        )
    }
}



export default TodoForm