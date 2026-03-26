import { motion } from 'framer-motion';
import { team } from '../data/mockData';

const statusColor = { online: '#10b981', away: '#f59e0b', offline: '#4a5568' };

export default function TeamPanel() {
  return (
    <motion.div className="glass" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.1 }} style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ color: '#fff', fontSize: '14px', fontWeight: 700 }}>Team</h3>
        <span style={{ color: '#10b981', fontSize: '11px', fontWeight: 600 }}>
          {team.filter(t => t.status === 'online').length} online
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {team.map((member, i) => (
          <motion.div key={member.id} initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', borderRadius: '8px', cursor: 'pointer', transition: 'background 0.15s' }}
            whileHover={{ background: 'rgba(255,255,255,0.04)' }}>
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: member.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: '#fff' }}>
                {member.initials}
              </div>
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '9px', height: '9px', borderRadius: '50%', background: statusColor[member.status], border: '2px solid #0f1117' }} />
            </div>
            <div style={{ flex: 1, overflow: 'hidden' }}>
              <p style={{ color: '#e2e8f0', fontSize: '12px', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{member.name}</p>
              <p style={{ color: '#4a5568', fontSize: '11px' }}>{member.role}</p>
            </div>
            <span style={{ background: 'rgba(124,58,237,0.15)', color: '#a78bfa', borderRadius: '20px', padding: '2px 8px', fontSize: '10px', fontWeight: 700, flexShrink: 0 }}>
              {member.tasks}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
