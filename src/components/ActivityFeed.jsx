import { motion } from 'framer-motion';
import { activity } from '../data/mockData';
import { Activity } from 'lucide-react';

export default function ActivityFeed() {
  return (
    <motion.div className="glass" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.15 }} style={{ padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <Activity size={14} color="#7c3aed" />
        <h3 style={{ color: '#fff', fontSize: '14px', fontWeight: 700 }}>Recent Activity</h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {activity.map((a, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            style={{ display: 'flex', gap: '10px', paddingBottom: '14px', position: 'relative' }}>
            {/* Timeline line */}
            {i < activity.length - 1 && (
              <div style={{ position: 'absolute', left: '14px', top: '28px', bottom: 0, width: '1px', background: 'rgba(255,255,255,0.06)' }} />
            )}
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: a.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>
              {a.user}
            </div>
            <div>
              <p style={{ color: '#a0aec0', fontSize: '12px', lineHeight: 1.5 }}>
                <span style={{ color: a.color, fontWeight: 700 }}>{a.user}</span>
                {' '}{a.action}{' '}
                <span style={{ color: '#e2e8f0' }}>{a.task}</span>
              </p>
              <p style={{ color: '#4a5568', fontSize: '11px', marginTop: '2px' }}>{a.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
