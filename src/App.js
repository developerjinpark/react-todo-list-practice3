import React, { Component } from 'react';

let id = 0;

const Todo = props => (
  <li>
    <input type="checkbox" checked={props.todo.checked} onChange={props.onToggle} />
    <button onClick={props.onDelete}>Delete</button>
    <span>{props.todo.text}</span>
  </li>
)

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    }
  }

  addTodo() {
    const text = prompt("ToDo text please!!");
    this.setState({
      todos: [ 
        ...this.state.todos, 
        {id: id++, text: text, checked: false}
      ],
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        }
      })
    })
  }
  render() {
    return (
      <div>
        <div>Todo Count: {this.state.todos.length}</div>
        <div>Unchecked Todo Count: {this.state.todos.filter(todo => !todo.checked).length}</div>
        <button onClick={() => this.addTodo()}>Add ToDo</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={() => this.removeTodo(todo.id)}
              onToggle={() => this.toggleTodo(todo.id)}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App;
