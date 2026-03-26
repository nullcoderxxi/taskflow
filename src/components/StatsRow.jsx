import { motion } from 'framer-motion';
import { stats } from '../data/mockData';

export default function StatsRow() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
      {stats.map((s, i) => (
        <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.07, duration: 0.35 }} className="glass"
          style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <span style={{ color: '#4a5568', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s.label}</span>
            <span style={{ fontSize: '20px' }}>{s.icon}</span>
          </div>
          <div style={{ fontSize: '28px', fontWeight: 800, color: s.color, fontFamily: 'monospace', marginBottom: '4px' }}>{s.value}</div>
          <div style={{ color: '#4a5568', fontSize: '11px' }}>{s.change}</div>
        </motion.div>
      ))}
    </div>
  );
}
