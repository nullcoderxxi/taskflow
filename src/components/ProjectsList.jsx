import { motion } from 'framer-motion';
import { projects } from '../data/mockData';

export default function ProjectsList() {
  return (
    <motion.div className="glass" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }} style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ color: '#fff', fontSize: '14px', fontWeight: 700 }}>Active Projects</h3>
        <button style={{ background: 'none', border: 'none', color: '#7c3aed', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>View all</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {projects.map((p, i) => (
          <motion.div key={p.id} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }} whileHover={{ x: 3 }} style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '7px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: p.color }} />
                <span style={{ color: '#e2e8f0', fontSize: '13px', fontWeight: 600 }}>{p.name}</span>
              </div>
              <span style={{ color: '#4a5568', fontSize: '11px' }}>Due {p.due}</span>
            </div>

            {/* Progress bar */}
            <div style={{ height: '5px', background: 'rgba(255,255,255,0.07)', borderRadius: '3px', overflow: 'hidden', marginBottom: '6px' }}>
              <motion.div initial={{ width: 0 }} animate={{ width: `${p.progress}%` }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                style={{ height: '100%', background: `linear-gradient(90deg, ${p.color}, ${p.color}99)`, borderRadius: '3px' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {/* Avatars */}
              <div style={{ display: 'flex' }}>
                {p.members.map((m, j) => (
                  <div key={j} style={{
                    width: '20px', height: '20px', borderRadius: '50%',
                    background: ['#7c3aed','#0ea5e9','#10b981','#f59e0b'][j % 4],
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '8px', fontWeight: 700, color: '#fff',
                    marginLeft: j > 0 ? '-5px' : 0,
                    border: '2px solid #0f1117',
                  }}>{m}</div>
                ))}
              </div>
              <span style={{ color: p.color, fontSize: '12px', fontWeight: 700 }}>{p.progress}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
