import React from 'react'

import TodoItem from './TodoItem'
import todosData from './todosData'
// 30
class Todo extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }
  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} data={item}/>)
    console.log(todoItems)

    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }  
}

export default Todo