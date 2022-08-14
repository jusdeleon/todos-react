import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TodosContext } from '../context/TodosContext';

function TodoItem({ todo }) {
  const { todos, setTodos } = useContext(TodosContext);

  const handleToggleCompleted = id => {
    let updatedTodos = [...todos];

    updatedTodos = updatedTodos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleToggleEdit = id => {
    let updatedTodos = [...todos];

    updatedTodos = updatedTodos.map(todo => {
      if (todo.id === id) {
        todo.isEditing = !todo.isEditing;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleUpdate = (id, updatedTodo) => {
    let updatedTodos = [...todos];

    updatedTodos = updatedTodos.map(todo => {
      if (todo.id === id) {
        if (updatedTodo.trim().length === 0) {
          todo.isEditing = !todo.isEditing;
          return todo;
        }

        todo.title = updatedTodo;
        todo.isEditing = !todo.isEditing;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleDelete = id => {
    let updatedTodos = [...todos];

    setTodos(updatedTodos.filter(todo => todo.id !== id));
  };

  return (
    <li className="todo-item-container">
      <div
        className="todo-item"
        onDoubleClick={() => handleToggleEdit(todo.id)}
      >
        {!todo.isEditing && (
          <>
            <input
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => handleToggleCompleted(todo.id)}
            />
            <span
              className={classNames('todo-item-label', {
                'line-through': todo.isComplete,
              })}
            >
              {todo.title}
            </span>
          </>
        )}

        {todo.isEditing && (
          <input
            type="text"
            className="todo-item-input"
            defaultValue={todo.title}
            onBlur={e => handleUpdate(todo.id, e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                handleUpdate(todo.id, e.target.value);
              } else if (e.key === 'Escape') {
                handleToggleEdit(todo.id);
              }
            }}
            autoFocus
          />
        )}
      </div>
      <button className="x-button" onClick={() => handleDelete(todo.id)}>
        <svg
          className="x-button-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object,
};

export default TodoItem;
