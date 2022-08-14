import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { TodosContext } from '../context/TodosContext';
import TodoItem from './TodoItem';

function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);

  const [filter, setFilter] = useState('all');

  const getTodos = () => {
    if (filter === 'all') {
      return todos;
    } else if (filter === 'active') {
      return todos.filter(todo => !todo.isComplete);
    } else if (filter === 'completed') {
      return todos.filter(todo => todo.isComplete);
    }
  };

  const remaining = () => todos.filter(todo => !todo.isComplete).length;

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

  return (
    <>
      <ul className="todo-list">
        {getTodos().map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>

      {filter === 'all' && (
        <div className="check-all-container">
          <div>
            <button className="button" onClick={handleCompleteAll}>
              Check All
            </button>
          </div>

          <span>{remaining()} items remaining</span>
        </div>
      )}

      <div className="other-buttons-container">
        <div>
          <button
            className={classNames('button', 'filter-button', {
              'filter-button-active': filter === 'all',
            })}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={classNames('button', 'filter-button', {
              'filter-button-active': filter === 'active',
            })}
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button
            className={classNames('button', 'filter-button', {
              'filter-button-active': filter === 'completed',
            })}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>

        {filter === 'all' && (
          <div>
            <button className="button" onClick={clearCompleted}>
              Clear completed
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default TodoList;
