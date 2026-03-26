import './index.css';
import { TaskProvider } from './context/TaskContext';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import StatsRow from './components/StatsRow';
import KanbanBoard from './components/KanbanBoard';
import ProjectsList from './components/ProjectsList';
import TeamPanel from './components/TeamPanel';
import ActivityFeed from './components/ActivityFeed';

export default function App() {
  return (
    <TaskProvider>
      <div style={{ display: 'flex', minHeight: '100vh', background: '#0f1117' }}>
        <Sidebar />

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflowY: 'auto' }}>
          <Navbar />

          <main style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <StatsRow />

            {/* Main grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '20px' }}>
              {/* Left — kanban */}
              <KanbanBoard />

              {/* Right sidebar panels */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <ProjectsList />
                <TeamPanel />
                <ActivityFeed />
              </div>
            </div>
          </main>
        </div>
      </div>
    </TaskProvider>
  );
}
