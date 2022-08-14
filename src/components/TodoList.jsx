import React, { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';
import TodoItem from './TodoItem';

function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);

  const handleCompleteAll = () => {
    let updatedTodos = [...todos];

    updatedTodos = updatedTodos.map(todo => {
      todo.isComplete = true;
      return todo;
    });

    setTodos(updatedTodos);
  };

  const clearCompleted = () => {
    let updatedTodos = [...todos];

    setTodos(updatedTodos.filter(todo => !todo.isComplete));
  };

  const remaining = () => todos.filter(todo => !todo.isComplete).length;

  return (
    <>
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>

      <div className="check-all-container">
        <div>
          <div className="button" onClick={handleCompleteAll}>
            Check All
          </div>
        </div>

        <span>{remaining()} items remaining</span>
      </div>

      <div className="other-buttons-container">
        <div>
          <button className="button filter-button filter-button-active">
            All
          </button>
          <button className="button filter-button">Active</button>
          <button className="button filter-button">Completed</button>
        </div>
        <div>
          <button className="button" onClick={clearCompleted}>
            Clear completed
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoList;
