import { Bell, Search, Plus, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import useWindowSize from '../hooks/useWindowSize';

export default function Navbar({ onToggleSidebar }) {
  const { isMobile } = useWindowSize();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        height: '60px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: isMobile ? '0 16px' : '0 24px',
        background: 'rgba(15,17,23,0.95)', backdropFilter: 'blur(12px)',
        position: 'sticky', top: 0, zIndex: 50,
      }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Hamburger — mobile/tablet only */}
        {isMobile && (
          <button
            onClick={onToggleSidebar}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#718096', padding: '4px', display: 'flex', alignItems: 'center',
            }}
          >
            <Menu size={20} />
          </button>
        )}

        <div>
          <h1 style={{ color: '#fff', fontSize: isMobile ? '14px' : '16px', fontWeight: 700 }}>Dashboard</h1>
          {!isMobile && <p style={{ color: '#4a5568', fontSize: '12px' }}>Welcome back, Amandeep 👋</p>}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '12px' }}>
        {/* Search — hidden on mobile */}
        {!isMobile && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '8px', padding: '7px 12px',
          }}>
            <Search size={14} color="#718096" />
            <input
              placeholder="Search tasks..."
              style={{
                background: 'transparent', border: 'none', outline: 'none',
                color: '#fff', fontSize: '13px', width: '180px',
              }}
            />
          </div>
        )}

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(124,58,237,0.4)' }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            padding: isMobile ? '7px 10px' : '8px 14px',
            background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
            border: 'none', borderRadius: '8px', color: '#fff',
            fontSize: isMobile ? '12px' : '13px', fontWeight: 600, cursor: 'pointer',
          }}
        >
          <Plus size={15} />
          {!isMobile && 'New Task'}
        </motion.button>

        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <Bell size={18} color="#718096" />
          <div style={{
            position: 'absolute', top: '-3px', right: '-3px',
            width: '8px', height: '8px', borderRadius: '50%',
            background: '#ef4444', border: '2px solid #0f1117',
          }} />
        </div>
      </div>
    </motion.header>
  );
}
