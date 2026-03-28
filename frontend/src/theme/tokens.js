// theme/tokens.js — Single source of truth for all design tokens

// ─── Node accent colors ────────────────────────────────────────────────────────
export const NODE_COLORS = {
  customInput: '#10b981',  // emerald
  customOutput: '#f59e0b', // amber
  llm:          '#8b5cf6', // violet
  text:         '#3b82f6', // blue
  filter:       '#ef4444', // red
  transform:    '#06b6d4', // cyan
  api:          '#ec4899', // pink
  merge:        '#84cc16', // lime
  condition:    '#f97316', // orange
};

// ─── Base palette ──────────────────────────────────────────────────────────────
export const COLORS = {
  bg:           '#0a0d14',
  surface:      '#0f1320',
  surfaceAlt:   '#161b2e',
  surfaceDark:  '#12172a',
  border:       'rgba(255,255,255,0.07)',
  borderLight:  'rgba(255,255,255,0.05)',
  inputBg:      'rgba(10,13,20,0.8)',
  inputBorder:  'rgba(255,255,255,0.08)',

  textPrimary:  '#e2e8f0',
  textMuted:    '#64748b',
  textDim:      '#475569',

  brand:        '#6366f1',
  brandAlt:     '#8b5cf6',

  success:      '#10b981',
  warning:      '#f59e0b',
  danger:       '#ef4444',
};

// ─── Typography ────────────────────────────────────────────────────────────────
export const FONT = {
  sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  mono: '"JetBrains Mono", "Fira Code", "Cascadia Code", Consolas, monospace',
};

// ─── Z-index stack ─────────────────────────────────────────────────────────────
export const Z = {
  toast:   9998,
  modal:   9999,
};

// ─── Transitions ──────────────────────────────────────────────────────────────
export const TRANSITION = {
  fast:   '0.1s ease',
  normal: '0.15s ease',
  spring: '0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
};
