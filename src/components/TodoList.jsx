import React, { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';
import TodoItem from './TodoItem';

function TodoList() {
  const { todos } = useContext(TodosContext);

  return (
    <>
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>

      <div className="check-all-container">
        <div>
          <div className="button">Check All</div>
        </div>

        <span>3 items remaining</span>
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
          <button className="button">Clear completed</button>
        </div>
      </div>
    </>
  );
}

export default TodoList;
