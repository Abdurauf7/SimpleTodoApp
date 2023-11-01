import React,{useState} from 'react';
// Components
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

// interfaces
import { Todo } from './interfaces';

const App: React.FC = () => {
  const [todos,setTodos] = useState<Todo[]>([])

  const todoAddHandler = (text:string) => {
    setTodos(prevTodos =>[
      ...prevTodos,
      { id: Math.random(), text }]
    )
  }

  const todoDeleteHandler = (id:number) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

 
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}

export default App;
