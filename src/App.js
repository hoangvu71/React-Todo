import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"
const list = [{task: "", id: "", completed:false},]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = { list }
  }
  addItem = (event, item) => {
    event.preventDefault();
    const newList = {
      task: item,
      id: Date.now(),
      completed: false
    }
    this.setState({ list: [...this.state.list, newList]})
  }

  toggleItem = (itemId) => {
    this.setState({
      list: this.state.list.map(item => {
        if (itemId === item.id) {
          return{
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  clearItem = (event) => {
    event.preventDefault();
    this.setState({
      list: this.state.list.filter(item => {
        return item.completed === false;
      })
    })
  }
  
  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList  toggleItem= {this.toggleItem} list={this.state.list}/>
        <TodoForm clearItem={this.clearItem} addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
