// components/modal/ResultModal.js — Assembles the full pipeline result modal

import { TbCircleDot, TbArrowsJoin } from 'react-icons/tb';
import { ModalOverlay } from './ModalOverlay';
import { ModalCard } from './ModalCard';
import { ModalHeader } from './ModalHeader';
import { StatCard } from './StatCard';
import { DagStatusCard } from './DagStatusCard';
import { PrimaryButton } from '../ui/PrimaryButton';
import { COLORS } from '../../theme/tokens';

export const ResultModal = ({ result, onClose }) => {
  if (!result) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalCard>
        <ModalHeader onClose={onClose} />
        <StatsGrid result={result} />
        <DagStatusCard isDag={result.is_dag} />
        <PrimaryButton onClick={onClose} fullWidth>
          Done
        </PrimaryButton>
      </ModalCard>
    </ModalOverlay>
  );
};

// ── Two-column stats grid ─────────────────────────────────────────────────────
const StatsGrid = ({ result }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px',
      marginBottom: '16px',
    }}
  >
    <StatCard
      icon={<TbCircleDot size={20} color={COLORS.brand} />}
      label="Nodes"
      value={result.num_nodes}
      color={COLORS.brand}
    />
    <StatCard
      icon={<TbArrowsJoin size={20} color={COLORS.brandAlt} />}
      label="Edges"
      value={result.num_edges}
      color={COLORS.brandAlt}
    />
  </div>
);
