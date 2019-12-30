import React from 'react'

import TodoItem from './TodoItem'
import todosData from './todosData'

function Todo() {
  const data = todosData.map(item => <TodoItem key={item.id} data={item}/>)
  console.log(data)

  return (
    <div className="todo-list">
      {data}
    </div>
  )
}

export default Todo