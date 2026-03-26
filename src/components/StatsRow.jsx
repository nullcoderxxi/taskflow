import { motion } from 'framer-motion';
import { stats } from '../data/mockData';
import useWindowSize from '../hooks/useWindowSize';
import useCountUp from '../hooks/useCountUp';

function StatCard({ s, i, isMobile }) {
  const numericValue = parseFloat(String(s.value).replace(/[^0-9.]/g, '')) || 0;
  const animated = useCountUp(numericValue, 1000, Number.isInteger(numericValue) ? 0 : 1);
  const displayValue = typeof s.value === 'number'
    ? animated
    : String(s.value).replace(/\d+(\.\d+)?/, animated);

  return (
    <motion.div
      key={s.label}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.08, type: 'spring', stiffness: 200 }}
      whileHover={{ y: -6, scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      className="glass"
      style={{ padding: isMobile ? '16px' : '20px' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
        <span style={{
          color: '#4a5568', fontSize: isMobile ? '10px' : '12px',
          fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px',
        }}>{s.label}</span>
        <span style={{ fontSize: '18px' }}>{s.icon}</span>
      </div>
      <div style={{
        fontSize: isMobile ? '22px' : '28px',
        fontWeight: 800, color: s.color, fontFamily: 'monospace', marginBottom: '4px',
      }}>{displayValue}</div>
      <div style={{ color: '#4a5568', fontSize: '11px' }}>{s.change}</div>
    </motion.div>
  );
}

export default function StatsRow() {
  const { isMobile } = useWindowSize();

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: isMobile ? '12px' : '16px',
    }}>
      {stats.map((s, i) => (
        <StatCard key={s.label} s={s} i={i} isMobile={isMobile} />
      ))}
    </div>
  );
}
