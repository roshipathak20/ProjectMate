import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]); // State for tasks
  const [taskTitle, setTaskTitle] = useState(""); // State for task title
  const [taskDate, setTaskDate] = useState(""); // State for task due date
  const [currentTab, setCurrentTab] = useState("home"); // State to manage active tab

  // Use localStorage to persist tasks across page refreshes
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever the tasks state changes
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  // Handle navigation
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  // Function to categorize tasks based on their due date
  const categorizeTask = (taskDate) => {
    const today = new Date();
    const taskDueDate = new Date(taskDate);

    // Check if the task is overdue
    if (taskDueDate < today) {
      return "overdue";
    }

    // Check if the task is due this week (within the next 7 days)
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    if (taskDueDate <= nextWeek) {
      return "this-week";
    }

    // Otherwise, it's an upcoming task
    return "upcoming";
  };

  // Handle task submission
  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskTitle && taskDate) {
      const taskStatus = categorizeTask(taskDate); // Get task category based on date
      const newTask = {
        title: taskTitle,
        date: taskDate,
        status: taskStatus,
      };
      setTasks([...tasks, newTask]);
      setTaskTitle(""); // Clear task title after adding
      setTaskDate(""); // Clear task date after adding
    } else {
      alert("Please fill in both title and date!");
    }
  };

  // Handle task completion
  const handleDoneTask = (index) => {
    // Remove the task only from the list
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });
  };

  // Filter tasks by status
  const getTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <div className="app">
      <header>
        <h1>ProjectMate</h1>
        <nav>
          <button onClick={() => handleTabChange("home")}>Home</button>
          <button onClick={() => handleTabChange("tasks")}>Tasks</button>
          <button onClick={() => handleTabChange("profile")}>Profile</button>
          <button onClick={() => handleTabChange("help")}>Help</button>
        </nav>
      </header>

      <main>
        {currentTab === "home" && (
          <div>
            <h2>Welcome Love, Let's Get Started!</h2>
            <p>Click on the "Tasks" tab to manage your tasks.</p>
          </div>
        )}

        {currentTab === "tasks" && (
          <div>
            <h2>Task Management</h2>
            <div className="task-form">
              <input
                type="text"
                placeholder="Task Title"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
              <input
                type="date"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
              />
              <button onClick={handleAddTask}>Add Task</button>
            </div>

            <div className="task-sections">
              <div className="task-section overdue">
                <h3>Overdue</h3>
                {getTasksByStatus("overdue").map((task, index) => (
                  <div key={index} className="task">
                    <h3>{task.title}</h3>
                    <p>{task.date}</p>
                    <button onClick={() => handleDoneTask(index)}>Done</button>
                  </div>
                ))}
              </div>

              <div className="task-section this-week">
                <h3>This Week</h3>
                {getTasksByStatus("this-week").map((task, index) => (
                  <div key={index} className="task">
                    <h3>{task.title}</h3>
                    <p>{task.date}</p>
                    <button onClick={() => handleDoneTask(index)}>Done</button>
                  </div>
                ))}
              </div>

              <div className="task-section upcoming">
                <h3>Upcoming</h3>
                {getTasksByStatus("upcoming").map((task, index) => (
                  <div key={index} className="task">
                    <h3>{task.title}</h3>
                    <p>{task.date}</p>
                    <button onClick={() => handleDoneTask(index)}>Done</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentTab === "profile" && <div>Profile Page</div>}
        {currentTab === "help" && <div>Help Page</div>}
      </main>
    </div>
  );
}

export default App;
