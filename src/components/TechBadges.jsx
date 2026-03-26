const techs = ['React.js', 'Node.js', 'MongoDB', 'JWT Auth', 'Express.js', 'AWS', 'Framer Motion', 'Context API', 'Tailwind CSS'];

export default function TechBadges() {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 200,
      background: '#0a0d14',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '8px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      overflowX: 'auto',
      height: '44px',
      flexShrink: 0,
    }}>
      <span style={{
        color: '#4a5568',
        fontSize: '12px',
        fontWeight: 600,
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}>
        Tech Stack:
      </span>
      <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
        {techs.map((tech) => (
          <span key={tech} style={{
            background: 'rgba(124,58,237,0.1)',
            color: '#7c3aed',
            border: '1px solid rgba(124,58,237,0.2)',
            borderRadius: '20px',
            padding: '3px 10px',
            fontSize: '11px',
            fontWeight: 600,
            whiteSpace: 'nowrap',
          }}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
