import { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { TodosContext } from '../context/TodosContext';

import '../reset.css';
import '../App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish react course',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: 'Grocery run',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 3,
      title: 'Clean room',
      isComplete: false,
      isEditing: false,
    },
  ]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      <div className="todo-app-container">
        <div className="todo-app">
          <h2>Todo App</h2>
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </TodosContext.Provider>
  );
}

export default App;
