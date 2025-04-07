import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Complete Lab 11', completed: false },
    { id: 2, text: 'Review JSX Events and State', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const handleComplete = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;

    const newItem = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, newItem]);
    setNewTask('');
  };

  return (
    <div style={{ border: '1px solid blue', padding: '10px', width: '350px' }}>
      <h2>To-Do List</h2>

      {/* Input form moved up */}
      <form onSubmit={handleAddTask} style={{ marginBottom: '15px' }}>
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="New task"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button type="submit" style={{ padding: '5px 10px' }}>Add Task</button>
      </form>

      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ marginBottom: '8px' }}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none', marginRight: '10px' }}>
              {task.text}
            </span>
            <button 
              onClick={() => handleComplete(task.id)} 
              style={{ borderRadius: '5px', border: '1px solid gray', background: '#f0f0f0', cursor: 'pointer' }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
