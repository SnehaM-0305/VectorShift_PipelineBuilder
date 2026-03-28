// components/modal/DagStatusCard.js — Shows whether pipeline is a valid DAG

import { TbCheck, TbAlertTriangle } from 'react-icons/tb';
import { COLORS, FONT } from '../../theme/tokens';

export const DagStatusCard = ({ isDag }) => {
  const color    = isDag ? COLORS.success : COLORS.danger;
  const bgColor  = isDag ? 'rgba(16,185,129,0.08)'  : 'rgba(239,68,68,0.08)';
  const border   = isDag ? 'rgba(16,185,129,0.25)'  : 'rgba(239,68,68,0.25)';
  const iconBg   = isDag ? 'rgba(16,185,129,0.15)'  : 'rgba(239,68,68,0.15)';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '14px 16px',
        background: bgColor,
        border: `1px solid ${border}`,
        borderRadius: '10px',
        marginBottom: '20px',
      }}
    >
      <DagStatusIcon isDag={isDag} color={color} iconBg={iconBg} />
      <DagStatusText isDag={isDag} color={color} />
    </div>
  );
};

const DagStatusIcon = ({ isDag, color, iconBg }) => (
  <div
    style={{
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      flexShrink: 0,
      background: iconBg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {isDag
      ? <TbCheck size={20} color={color} />
      : <TbAlertTriangle size={20} color={color} />
    }
  </div>
);

const DagStatusText = ({ isDag, color }) => (
  <div>
    <div style={{ color, fontWeight: '600', fontSize: '14px', fontFamily: FONT.sans }}>
      {isDag ? 'Valid DAG' : 'Contains Cycle'}
    </div>
    <div style={{ color: COLORS.textMuted, fontSize: '11px', marginTop: '2px' }}>
      {isDag
        ? 'Pipeline is a directed acyclic graph — safe to execute.'
        : 'Pipeline has a cycle. Remove circular connections to run.'}
    </div>
  </div>
);
