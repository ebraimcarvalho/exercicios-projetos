import React from 'react'

// import Header from './Header';
// import MainContent from './MainContent';
// import Footer from './Footer';

import TodoItem from './TodoItem'

function MyApp () {
  return (
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  )
}

export default MyApp