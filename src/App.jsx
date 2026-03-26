import './index.css';
import { useState } from 'react';
import { TaskProvider } from './context/TaskContext';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import StatsRow from './components/StatsRow';
import KanbanBoard from './components/KanbanBoard';
import ProjectsList from './components/ProjectsList';
import TeamPanel from './components/TeamPanel';
import ActivityFeed from './components/ActivityFeed';
import TechBadges from './components/TechBadges';
import useWindowSize from './hooks/useWindowSize';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isMobile, isTablet } = useWindowSize();

  const isSmallScreen = isMobile || isTablet;

  // Responsive grid columns for the main content area
  const mainGridCols = isMobile
    ? '1fr'
    : isTablet
    ? '1fr 260px'
    : '1fr 280px';

  const padding = isMobile ? '16px' : '24px';

  return (
    <TaskProvider>
      <div style={{ display: 'flex', minHeight: '100vh', background: '#0f1117' }}>

        {/* Sidebar: on desktop render inline; on mobile/tablet render as overlay */}
        {!isSmallScreen ? (
          <Sidebar />
        ) : (
          <Sidebar
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflowY: 'auto' }}>
          <Navbar
            onToggleSidebar={() => setSidebarOpen(prev => !prev)}
          />

          <main style={{
            padding,
            paddingBottom: '60px',
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '16px' : '24px',
          }}>
            <StatsRow />

            {/* Main grid — responsive */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: mainGridCols,
              gap: '20px',
            }}>
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

      <TechBadges />
    </TaskProvider>
  );
}
