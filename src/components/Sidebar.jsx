import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Kanban, Users, FolderKanban, BarChart2, Settings, ChevronRight, Plus, X } from 'lucide-react';
import { projects } from '../data/mockData';

const nav = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Kanban, label: 'Board', active: false },
  { icon: FolderKanban, label: 'Projects', active: false },
  { icon: Users, label: 'Team', active: false },
  { icon: BarChart2, label: 'Reports', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

function SidebarContent({ active, setActive, onClose, isMobileOverlay }) {
  return (
    <aside style={{
      width: '240px',
      flexShrink: 0,
      background: '#0a0d14',
      borderRight: '1px solid rgba(255,255,255,0.06)',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      ...(isMobileOverlay
        ? { position: 'fixed', top: 0, left: 0, zIndex: 200 }
        : { position: 'sticky', top: 0 }),
      overflow: 'hidden',
    }}>
      {/* Logo */}
      <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '8px',
              background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px',
            }}>⚡</div>
            <span style={{ fontWeight: 800, fontSize: '17px', color: '#fff', letterSpacing: '-0.5px' }}>
              Task<span style={{ color: '#7c3aed' }}>Flow</span>
            </span>
          </div>
          {isMobileOverlay && (
            <button
              onClick={onClose}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#718096', padding: '4px' }}
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Nav */}
      <nav style={{ padding: '12px 10px', flex: 1, overflowY: 'auto' }}>
        <p style={{
          color: '#4a5568', fontSize: '10px', fontWeight: 700,
          letterSpacing: '1.5px', textTransform: 'uppercase', padding: '4px 10px 10px',
        }}>Menu</p>
        {nav.map(({ icon: Icon, label }) => (
          <motion.button
            key={label}
            onClick={() => { setActive(label); if (isMobileOverlay && onClose) onClose(); }}
            whileHover={{ x: 3 }}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', gap: '10px',
              padding: '9px 10px', borderRadius: '8px', border: 'none', cursor: 'pointer',
              background: active === label ? 'rgba(124,58,237,0.15)' : 'transparent',
              color: active === label ? '#7c3aed' : '#718096',
              fontSize: '13px', fontWeight: active === label ? 700 : 500,
              marginBottom: '2px', transition: 'all 0.15s', textAlign: 'left',
            }}
          >
            <Icon size={16} />
            {label}
            {active === label && <ChevronRight size={14} style={{ marginLeft: 'auto' }} />}
          </motion.button>
        ))}

        {/* Projects */}
        <div style={{ marginTop: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 10px 10px' }}>
            <p style={{ color: '#4a5568', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Projects</p>
            <Plus size={13} color="#4a5568" style={{ cursor: 'pointer' }} />
          </div>
          {projects.map(p => (
            <motion.button
              key={p.id}
              whileHover={{ x: 3 }}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: '8px',
                padding: '7px 10px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                background: 'transparent', color: '#718096', fontSize: '12px', fontWeight: 500,
                marginBottom: '2px', transition: 'all 0.15s', textAlign: 'left',
              }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: p.color, flexShrink: 0 }} />
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</span>
            </motion.button>
          ))}
        </div>
      </nav>

      {/* User */}
      <div style={{ padding: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '32px', height: '32px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '13px', fontWeight: 700, color: '#fff', flexShrink: 0,
        }}>AS</div>
        <div style={{ overflow: 'hidden' }}>
          <p style={{ color: '#fff', fontSize: '12px', fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Amandeep Singh</p>
          <p style={{ color: '#4a5568', fontSize: '11px' }}>Lead Developer</p>
        </div>
      </div>
    </aside>
  );
}

export default function Sidebar({ open, onClose }) {
  const [active, setActive] = useState('Dashboard');

  // Determine if we're in mobile/tablet overlay mode by checking the open prop is passed
  // On desktop (open === undefined means not managed externally), always show inline
  const isOverlayMode = open !== undefined;

  if (!isOverlayMode) {
    // Desktop: render inline sticky sidebar
    return <SidebarContent active={active} setActive={setActive} isMobileOverlay={false} />;
  }

  // Mobile/tablet: render as overlay when open
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Dark backdrop */}
          <motion.div
            key="overlay-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(0,0,0,0.6)',
              zIndex: 199,
              backdropFilter: 'blur(2px)',
            }}
          />
          {/* Slide-in sidebar */}
          <motion.div
            key="overlay-sidebar"
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            style={{ position: 'fixed', top: 0, left: 0, zIndex: 200, height: '100vh' }}
          >
            <SidebarContent
              active={active}
              setActive={setActive}
              onClose={onClose}
              isMobileOverlay={true}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
