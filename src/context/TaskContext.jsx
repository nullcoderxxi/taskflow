import { createContext, useContext, useState } from 'react';
import { initialTasks } from '../data/mockData';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeProject, setActiveProject] = useState('All Projects');

  const moveTask = (taskId, fromCol, toCol) => {
    if (fromCol === toCol) return;
    const task = tasks[fromCol].find(t => t.id === taskId);
    setTasks(prev => ({
      ...prev,
      [fromCol]: prev[fromCol].filter(t => t.id !== taskId),
      [toCol]: [task, ...prev[toCol]],
    }));
  };

  const deleteTask = (taskId, col) => {
    setTasks(prev => ({ ...prev, [col]: prev[col].filter(t => t.id !== taskId) }));
  };

  return (
    <TaskContext.Provider value={{ tasks, moveTask, deleteTask, activeProject, setActiveProject }}>
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => useContext(TaskContext);
