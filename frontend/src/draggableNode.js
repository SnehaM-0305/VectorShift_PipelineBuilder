// draggableNode.js — Draggable node pill for the toolbar palette

export const DraggableNode = ({ type, label, icon, color = '#6366f1' }) => {
  const onDragStart = (event) => {
    event.target.style.transform = 'scale(0.95)';
    event.target.style.opacity = '0.8';
    event.dataTransfer.setData('application/reactflow', JSON.stringify({ nodeType: type }));
    event.dataTransfer.effectAllowed = 'move';
  };

  const onDragEnd = (event) => {
    event.target.style.transform = 'scale(1)';
    event.target.style.opacity = '1';
  };

  return (
    <div
      className={`draggable-node draggable-node--${type}`}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      draggable
      style={{
        cursor: 'grab',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '5px 10px',
        borderRadius: '8px',
        background: `${color}15`,
        border: `1px solid ${color}30`,
        transition: 'background 0.15s, border-color 0.15s, transform 0.1s',
        userSelect: 'none',
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = `${color}25`;
        e.currentTarget.style.borderColor = `${color}55`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = `${color}15`;
        e.currentTarget.style.borderColor = `${color}30`;
      }}
    >
      <span style={{ color, fontSize: '14px', display: 'flex', alignItems: 'center' }}>
        {icon}
      </span>
      <span style={{
        color: '#cbd5e1',
        fontSize: '12px',
        fontWeight: '500',
        whiteSpace: 'nowrap',
      }}>
        {label}
      </span>
    </div>
  );
};
