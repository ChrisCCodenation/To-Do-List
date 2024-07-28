import React from 'react';

const ArchiveList = ({ archivedTodos }) => {
  return (
    <div>
      <h2>Archived Todos</h2>
      <ul>
        {archivedTodos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArchiveList;
