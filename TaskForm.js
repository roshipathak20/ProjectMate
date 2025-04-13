import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !dueDate) return;

    const newTask = {
      title,
      dueDate
    };

    addTask(newTask); // send this up to App
    setTitle('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-2">Add a New Task ✨</h2>
      <input 
        type="text" 
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <input 
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
        ➕ Add Task
      </button>
    </form>
  );
};

export default TaskForm;
