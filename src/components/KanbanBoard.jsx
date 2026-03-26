import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTasks } from '../context/TaskContext';
import { MoreHorizontal, Clock } from 'lucide-react';

const columns = [
  { key: 'todo', label: 'To Do', color: '#718096', dot: '#718096' },
  { key: 'inprogress', label: 'In Progress', color: '#f59e0b', dot: '#f59e0b' },
  { key: 'review', label: 'In Review', color: '#0ea5e9', dot: '#0ea5e9' },
  { key: 'done', label: 'Done', color: '#10b981', dot: '#10b981' },
];

const priorityColors = { high: '#ef4444', medium: '#f59e0b', low: '#10b981' };
const teamColors = { AS: '#7c3aed', JK: '#0ea5e9', ML: '#10b981', RN: '#f59e0b', PK: '#ec4899', TW: '#06b6d4' };

function TaskCard({ task, col, taskIndex = 0 }) {
  const { moveTask, deleteTask } = useTasks();
  const [menu, setMenu] = useState(false);
  const others = columns.filter(c => c.key !== col);

  return (
    <motion.div
      layout
      layoutId={task.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -10 }}
      transition={{ delay: taskIndex * 0.05, type: 'spring', stiffness: 250, damping: 25 }}
      whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
      style={{
        background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '10px', padding: '14px', cursor: 'grab', position: 'relative',
        transition: 'box-shadow 0.2s',
      }}
    >
      {/* Priority + menu */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{
          padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.5px',
          color: priorityColors[task.priority], background: `${priorityColors[task.priority]}18`,
          border: `1px solid ${priorityColors[task.priority]}30`,
        }}>{task.priority}</span>
        <div style={{ position: 'relative' }}>
          <button onClick={() => setMenu(!menu)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4a5568', padding: '2px' }}>
            <MoreHorizontal size={15} />
          </button>
          {menu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                position: 'absolute', right: 0, top: '100%', background: '#1a1f2e',
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px',
                padding: '6px', zIndex: 10, minWidth: '140px',
              }}
            >
              {others.map(c => (
                <button key={c.key} onClick={() => { moveTask(task.id, col, c.key); setMenu(false); }} style={{
                  display: 'block', width: '100%', padding: '6px 10px', background: 'none',
                  border: 'none', color: '#a0aec0', fontSize: '12px', cursor: 'pointer',
                  borderRadius: '4px', textAlign: 'left',
                }}>Move to {c.label}</button>
              ))}
              <button onClick={() => deleteTask(task.id, col)} style={{
                display: 'block', width: '100%', padding: '6px 10px', background: 'none',
                border: 'none', color: '#ef4444', fontSize: '12px', cursor: 'pointer',
                borderRadius: '4px', textAlign: 'left', marginTop: '4px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}>Delete</button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Title */}
      <p style={{ color: '#e2e8f0', fontSize: '13px', fontWeight: 600, lineHeight: 1.4, marginBottom: '10px' }}>{task.title}</p>

      {/* Project */}
      <p style={{ color: '#4a5568', fontSize: '11px', marginBottom: '10px' }}>📁 {task.project}</p>

      {/* Tags */}
      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '12px' }}>
        {task.tags.map(t => (
          <span key={t} style={{
            padding: '2px 7px', borderRadius: '4px', fontSize: '10px',
            background: 'rgba(124,58,237,0.15)', color: '#a78bfa',
            border: '1px solid rgba(124,58,237,0.2)',
          }}>#{t}</span>
        ))}
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#4a5568', fontSize: '11px' }}>
          <Clock size={11} />{task.due}
        </div>
        <div style={{
          width: '24px', height: '24px', borderRadius: '50%',
          background: teamColors[task.assignee] || '#7c3aed',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '10px', fontWeight: 700, color: '#fff',
        }}>
          {task.assignee}
        </div>
      </div>
    </motion.div>
  );
}

export default function KanbanBoard() {
  const { tasks } = useTasks();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <h2 style={{ color: '#fff', fontSize: '15px', fontWeight: 700, marginBottom: '16px' }}>Kanban Board</h2>

      {/* Always use minmax columns so the board scrolls horizontally on mobile */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(220px, 1fr))',
        gap: '16px',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        paddingBottom: '4px',
      }}>
        {columns.map((col, colIndex) => (
          <div key={col.key} style={{ minWidth: '220px' }}>
            {/* Column header */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: colIndex * 0.1 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: col.dot }} />
                <span style={{ color: '#a0aec0', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{col.label}</span>
                <span style={{ background: 'rgba(255,255,255,0.08)', color: '#718096', borderRadius: '20px', padding: '1px 7px', fontSize: '11px', fontWeight: 600 }}>
                  {tasks[col.key].length}
                </span>
              </div>
            </motion.div>

            {/* Cards */}
            <motion.div layout style={{ display: 'flex', flexDirection: 'column', gap: '10px', minHeight: '200px' }}>
              <AnimatePresence>
                {tasks[col.key].map((task, taskIndex) => (
                  <TaskCard key={task.id} task={task} col={col.key} taskIndex={taskIndex} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
