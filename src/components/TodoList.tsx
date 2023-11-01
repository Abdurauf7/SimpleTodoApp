import React from 'react'

import '../styles/TodoList.css'

import {TodoListProps} from '../interfaces'
const TodoList: React.FC<TodoListProps> = ({items,onDeleteTodo}) => {
  return (
    <ul>
      {
       items.map(todo => 
        (
          <li key={todo.id}>
            <span>
            {todo.text}
            </span>
            <button onClick={() => onDeleteTodo(todo.id)}> DELETE </button>
          </li>
        ))
      }
    </ul>
  )
}

export default TodoList