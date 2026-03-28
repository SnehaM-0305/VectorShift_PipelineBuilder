// components/node/NodeBody.js — Body area; extra horizontal inset when handles have in-card labels

const EXTRA_INSET = 40;

export const NodeBody = ({
  children,
  hasLeftHandles = false,
  hasRightHandles = false,
  paddingBottomExtra = 0,
}) => (
  <div
    style={{
      paddingTop: '12px',
      paddingBottom: 12 + paddingBottomExtra,
      paddingLeft: 14 + (hasLeftHandles ? EXTRA_INSET : 0),
      paddingRight: 14 + (hasRightHandles ? EXTRA_INSET : 0),
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    }}
  >
    {children}
  </div>
);
