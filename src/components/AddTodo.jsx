import React, { useState, useContext } from 'react';
import { TodosContext } from '../context/TodosContext';

function AddTodo() {
  const { todos, setTodos, idForTodo, setIdForTodo } = useContext(TodosContext);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (newTodo.trim().length === 0) {
      return;
    }

    let newTodos = [...todos];

    newTodos.push({
      id: idForTodo,
      title: newTodo,
      isComplete: false,
      isEditing: false,
    });

    setTodos(newTodos);
    setIdForTodo(prevIdForTodo => prevIdForTodo + 1);
    setNewTodo('');
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What do you need to do?"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
    </form>
  );
}

export default AddTodo;
